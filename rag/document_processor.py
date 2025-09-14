import re
import hashlib
from typing import List, Optional,Dict,Any
from pathlib import Path
from dataclasses import dataclass
import logging
from dataclasses import dataclass, field
from typing import Dict

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

@dataclass
class SimpleChunk:
    id: str
    content: str
    source_file: str
    chunk_index: int
    metadata: Dict = field(default_factory=dict)

def clean_content(content: str) -> str:
    """Remove metadata and normalize content"""
    # Remove YAML frontmatter
    content = re.sub(r'^---\n.*?\n---', '', content, flags=re.DOTALL)
    
    # Remove source URL section
    content = re.sub(r'^# Source URL\n.*?\n={70,}\n', '', content, flags=re.MULTILINE | re.DOTALL)
    
    # Remove HTML comments
    content = re.sub(r'<!--.*?-->', '', content, flags=re.DOTALL)
    
    # Normalize whitespace
    content = re.sub(r'\n{3,}', '\n\n', content)
    
    return content.strip()

def generate_chunk_id(content: str, source_file: str, chunk_index: int) -> str:
    """Generate unique chunk ID"""
    content_hash = hashlib.md5(content.encode()).hexdigest()[:8]
    file_name = Path(source_file).stem
    return f"{file_name}_{chunk_index}_{content_hash}"

def extract_metadata(content: str, source_file: str) -> Dict[str, Any]:
    """Extract basic metadata from content"""
    metadata = {
        "source_file": source_file,
        "file_name": Path(source_file).name,
        "content_length": len(content),
        "word_count": len(content.split())
    }
    
    # Determine document type based on file path
    if "docs.atlan.com" in source_file or "atlan_docs" in source_file:
        metadata["doc_type"] = "user_docs"
    elif "developer.atlan.com" in source_file or "atlan_developer_docs" in source_file:
        metadata["doc_type"] = "developer_docs"
    else:
        metadata["doc_type"] = "general"
    
    # Extract title from first header
    title_match = re.search(r'^#+\s*(.+)', content, re.MULTILINE)
    if title_match:
        metadata["title"] = title_match.group(1).strip()
    
    return metadata

def chunk_text(text: str, source_file: str, chunk_size: int = 1000, chunk_overlap: int = 200) -> List[SimpleChunk]:
    """Split text into overlapping chunks"""
    chunks = []
    words = text.split()
    
    # Estimate words per chunk (rough approximation: 1 word = 5 characters)
    words_per_chunk = chunk_size // 5
    overlap_words = chunk_overlap // 5
    
    start = 0
    chunk_index = 0
    
    while start < len(words):
        # Get chunk words
        end = min(start + words_per_chunk, len(words))
        chunk_words = words[start:end]
        chunk_content = ' '.join(chunk_words)
        
        # Create chunk ID
        chunk_id = generate_chunk_id(chunk_content, source_file, chunk_index)
        
        chunks.append(SimpleChunk(
            id=chunk_id,
            content=chunk_content,
            source_file=source_file,
            chunk_index=chunk_index,
            metadata={
                "source_file": source_file,
                "chunk_index": chunk_index,
            }
        ))
        
        # Move start position with overlap
        if end >= len(words):
            break
        start = end - overlap_words
        chunk_index += 1
    
    return chunks

def process_file(file_path: str, chunk_size: int = 1000, chunk_overlap: int = 200) -> List[SimpleChunk]:
    """Process a single file and return chunks"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Clean content
        cleaned_content = clean_content(content)
        
        # Skip empty files
        if not cleaned_content.strip():
            return []
        
        # Chunk content
        return chunk_text(cleaned_content, file_path, chunk_size, chunk_overlap)
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return []

def process_directory(directory_path: str, pattern: str = "*.md", chunk_size: int = 1000, chunk_overlap: int = 200) -> List[SimpleChunk]:
    """Process all files in directory"""
    all_chunks = []
    directory = Path(directory_path)
    
    for file_path in directory.rglob(pattern):
        if file_path.is_file():
            chunks = process_file(str(file_path), chunk_size, chunk_overlap)
            all_chunks.extend(chunks)
    
    print(f"Processed {len(all_chunks)} chunks from {len(list(directory.rglob(pattern)))} files")
    return all_chunks

def get_chunk_stats(chunks: List[SimpleChunk]) -> dict:
    """Get basic statistics about chunks"""
    if not chunks:
        return {"total_chunks": 0}
    
    lengths = [len(chunk.content) for chunk in chunks]
    files = list(set(chunk.source_file for chunk in chunks))
    
    return {
        "total_chunks": len(chunks),
        "total_files": len(files),
        "avg_length": sum(lengths) / len(lengths),
        "min_length": min(lengths),
        "max_length": max(lengths)
    }


# if __name__ == "__main__":
#     chunks = process_directory("data/atlan_developer_docs")
#     result = get_chunk_stats(chunks)
#     print(result)