import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import os
import time
from html_to_markdown import convert_to_markdown


seed_links = [
    "https://docs.atlan.com/"
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
    "Accept-Encoding": "gzip, deflate",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
}

visited = set()
base_domain = "docs.atlan.com"

# Output directory
dir_name = "data/atlan_docs"
os.makedirs(dir_name, exist_ok=True)

def remove_unwanted_elements(soup):
    """Remove images, table of contents, navigation toolkits, and other unwanted elements from the soup"""
    
    for img in soup.find_all('img'):
        img.decompose()
    
    for figure in soup.find_all('figure'):
        figure.decompose()
    
    for picture in soup.find_all('picture'):
        picture.decompose()
    
    for svg in soup.find_all('svg'):
        svg.decompose()
    
    toc_selectors = [
        '[class*="toc"]', '[class*="table-of-contents"]', '[class*="contents"]',
        '[id*="toc"]', '[id*="table-of-contents"]', '[id*="contents"]',
        'nav[class*="toc"]', 'div[class*="toc"]', 'aside[class*="toc"]',
        '.sidebar-toc', '.doc-toc', '.page-toc', '.content-toc',
        '.right-sidebar', '.sidebar-nav', '.doc-sidebar',
        'nav[aria-label*="Table of contents"]', 'nav[aria-label*="TOC"]'
    ]
    
    for selector in toc_selectors:
        for element in soup.select(selector):
            element.decompose()
    
    # Remove navigation toolkits and breadcrumbs
    navigation_selectors = [
      
        '.breadcrumb', '.breadcrumbs', '[class*="breadcrumb"]',
        '.navigation', '.nav-menu', '.main-nav', '.primary-nav',
        '.site-nav', '.global-nav', '.header-nav', '.top-nav',

        '[class*="toolkit"]', '[class*="menu"]', '[class*="sidebar"]',

        '.tree-nav', '.nav-tree', '.directory-tree',
       
        '.dev-nav', '.api-nav', '.docs-nav'
    ]
    
    for selector in navigation_selectors:
        for element in soup.select(selector):
            element.decompose()
    
    # Remove elements with text that suggests TOC or navigation
    for element in soup.find_all(['div', 'nav', 'aside', 'section', 'ul']):
        text = element.get_text(strip=True).lower()
        # Check for TOC indicators
        if any(phrase in text for phrase in ['table of contents', 'on this page', 'in this article', 'contents']):
            if len(text) < 500:
                element.decompose()
                continue
        
        # Check for navigation/toolkit indicators
        if any(phrase in text for phrase in ['toolkits', 'packages', 'typedefs', 'developer']):
            # Look for list-like structures with checkboxes or bullet points
            if '[x]' in text or '- [ ]' in text or ('*' in text and len(text.split('\n')) > 3):
                element.decompose()
                continue
    
    # Remove nested list structures that look like navigation menus
    for ul in soup.find_all('ul'):
        # Check if this looks like a navigation menu
        list_items = ul.find_all('li')
        if len(list_items) > 2:
            text_content = ul.get_text()
            # If it contains navigation-like patterns
            if any(pattern in text_content.lower() for pattern in ['toolkits', 'packages', 'typedefs', 'running example', 'define via']):
                ul.decompose()
    
    # Remove checkbox-style lists (common in documentation navigation)
    for element in soup.find_all(['div', 'section', 'ul', 'ol']):
        text = element.get_text()
        checkbox_count = text.count('[x]') + text.count('[ ]')
        if checkbox_count > 2:  # Multiple checkboxes indicate navigation
            element.decompose()
    
    return soup

def save_page_content(url, content):
    # Use path as filename, replace / with _
    parsed = urlparse(url)
    filename = parsed.path.strip("/").replace("/", "_")
    if not filename:
        filename = "index"
    filepath = os.path.join(dir_name, f"{filename}.md")
    with open(filepath, "w", encoding="utf-8") as f:
        # Add URL reference at the top
        f.write(f"# Source URL\n{url}\n\n")
        f.write(f"{'='*80}\n\n")
        f.write(content)

def crawl(url, depth=0, max_depth=3):
    if url in visited or depth > max_depth:
        return
    
    visited.add(url)
    print(f"{'  ' * depth}Crawling: {url}")
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        print(f"{'  ' * depth}Status: {response.status_code}")
        
        if response.status_code != 200:
            print(f"{'  ' * depth}Skipping due to status code: {response.status_code}")
            return
            
        soup = BeautifulSoup(response.text, "html.parser")
        
        soup = remove_unwanted_elements(soup)
        
        md_response = convert_to_markdown(source=str(soup))
        save_page_content(url, md_response)

        # Find internal links (use original soup for link extraction)
        original_soup = BeautifulSoup(response.text, "html.parser")
        for a_tag in original_soup.find_all("a", href=True):
            link = urljoin(url, a_tag["href"])
            link = link.split('#')[0]
            
            if (base_domain in link and 
                link.startswith("https://") and 
                link not in visited):
                crawl(link, depth + 1, max_depth)
        
 
        time.sleep(0.5)
        
    except requests.exceptions.RequestException as e:
        print(f"{'  ' * depth}Request error for {url}: {e}")
    except Exception as e:
        print(f"{'  ' * depth}Error crawling {url}: {e}")


print("Starting to crawl Atlan documentation...")
for i, link in enumerate(seed_links, 1):
    print(f"\nProcessing seed link {i}/{len(seed_links)}: {link}")
    crawl(link)

print(f"\nCrawling finished. Saved {len(visited)} pages in ./{dir_name}/")
print("Pages crawled:")
for url in sorted(visited):
    print(f"  - {url}")