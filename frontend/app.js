// Application state
const appState = {
    chatHistory: [],
    sampleTickets: [],
    classifiedTickets: [], // Add storage for classified tickets
    currentSession: generateSessionId(),
    isStreaming: false,
    apiBaseUrl: 'http://localhost:8003'
};

// Generate unique session ID
function generateSessionId() {
    return 'session-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);
}

// DOM elements
const elements = {
    chatMessages: document.getElementById('chatMessages'),
    promptInput: document.getElementById('promptInput'),
    sendButton: document.getElementById('sendButton'),
    loadSampleTickets: document.getElementById('loadSampleTickets'),
    loadClassifiedTickets: document.getElementById('loadClassifiedTickets'), // New button
    ticketsSidebar: document.getElementById('ticketsSidebar'),
    ticketsList: document.getElementById('ticketsList'),
    closeSidebar: document.getElementById('closeSidebar'),
    classifyToggle: document.getElementById('classifyToggle'),
    classifyModal: document.getElementById('classifyModal'),
    modalBackdrop: document.getElementById('modalBackdrop'),
    closeModal: document.getElementById('closeModal'),
    classificationForm: document.getElementById('classificationForm'),
    cancelClassify: document.getElementById('cancelClassify'),
    loadingOverlay: document.getElementById('loadingOverlay')
};

// Sidebar resize functionality
let isResizing = false;
let sidebarWidth = 400; // Default width

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    initializeEventListeners();
    setupWelcomeMessage();
    initializeResizableSidebar();
    hideLoading(); // Ensure loading overlay is hidden on startup
});

// Event listeners
function initializeEventListeners() {
    console.log('Setting up event listeners...');
    
    // Send message
    elements.sendButton.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Send button clicked');
        handleSendMessage();
    });
    
    elements.promptInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            console.log('Enter pressed in input');
            handleSendMessage();
        }
    });

    // Load sample tickets
    elements.loadSampleTickets.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Load sample tickets clicked');
        handleLoadSampleTickets();
    });

    // Load classified tickets - NEW
    elements.loadClassifiedTickets.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Load classified tickets clicked');
        handleLoadClassifiedTickets();
    });

    // Sidebar controls
    elements.closeSidebar.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Close sidebar clicked');
        closeSidebar();
    });

    // Classification modal
    elements.classifyToggle.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Classify toggle clicked');
        openClassificationModal();
    });

    elements.closeModal.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Close modal clicked');
        closeClassificationModal();
    });

    elements.modalBackdrop.addEventListener('click', function(e) {
        console.log('Modal backdrop clicked');
        closeClassificationModal();
    });

    elements.cancelClassify.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Cancel classify clicked');
        closeClassificationModal();
    });

    elements.classificationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Classification form submitted');
        handleClassifySubmit(e);
    });

    // Auto-resize textarea
    elements.promptInput.addEventListener('input', autoResizeTextarea);

    // Focus input on click
    elements.promptInput.addEventListener('click', function() {
        this.focus();
    });

    console.log('Event listeners set up successfully');
}

// Auto resize textarea
function autoResizeTextarea() {
    const textarea = elements.promptInput;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 200) + 'px';
}

// Setup welcome message handler
function setupWelcomeMessage() {
    let hasTyped = false;
    elements.promptInput.addEventListener('input', function() {
        if (!hasTyped && elements.promptInput.value.trim()) {
            const welcomeMessage = document.querySelector('.welcome-message');
            if (welcomeMessage) {
                welcomeMessage.style.opacity = '0.5';
                hasTyped = true;
            }
        }
    });
}

// Handle send message
async function handleSendMessage() {
    console.log('handleSendMessage called');
    const prompt = elements.promptInput.value.trim();
    console.log('Prompt:', prompt);
    
    if (!prompt || appState.isStreaming) {
        console.log('Empty prompt or already streaming, returning');
        return;
    }

    // Clear welcome message
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message to chat
    addUserMessage(prompt);
    elements.promptInput.value = '';
    autoResizeTextarea();

    // Show loading state for assistant response
    const assistantMessageElement = addAssistantMessage('', true);

    try {
        appState.isStreaming = true;
        elements.sendButton.disabled = true;

        // Always create artifact for AI analysis visibility
        const analysisArtifact = createSingleToolCallArtifact(assistantMessageElement);

        // Call streaming API
        await streamResponse(prompt, assistantMessageElement);
    } catch (error) {
        console.error('Error sending message:', error);
        updateAssistantMessage(assistantMessageElement, 'Sorry, there was an error processing your request. Please check if the API server is running on http://localhost:8003 and try again.', true);
    } finally {
        appState.isStreaming = false;
        elements.sendButton.disabled = false;
    }
}

// Add user message to chat
function addUserMessage(message) {
    console.log('Adding user message:', message);
    const messageElement = createMessageElement(message, 'user');
    elements.chatMessages.appendChild(messageElement);
    scrollToBottom();
}

// Add assistant message to chat
function addAssistantMessage(message, isStreaming = false) {
    console.log('Adding assistant message:', message, 'streaming:', isStreaming);
    const messageElement = createMessageElement(message, 'assistant', isStreaming);
    elements.chatMessages.appendChild(messageElement);
    scrollToBottom();
    return messageElement;
}

// Create message element
function createMessageElement(content, sender, isStreaming = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message--${sender}`;

    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${sender === 'user' ? 'message-avatar--user' : ''}`;
    avatar.textContent = sender === 'user' ? 'U' : 'A';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${isStreaming ? 'message-streaming' : ''}`;
    bubble.innerHTML = formatMessage(content) || (isStreaming ? 'Thinking...' : '');

    if (isStreaming && !content) {
        const cursor = document.createElement('span');
        cursor.className = 'streaming-cursor';
        bubble.appendChild(cursor);
    }

    const time = document.createElement('div');
    time.className = 'message-time';
    time.textContent = new Date().toLocaleTimeString();

    contentDiv.appendChild(bubble);
    contentDiv.appendChild(time);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);

    return messageDiv;
}

// Format message content with proper markdown rendering
function formatMessage(content) {
    if (!content) return '';
    
    try {
        // Configure marked for GitHub-style markdown
        marked.setOptions({
            breaks: true, // Convert \n to <br>
            gfm: true, // GitHub Flavored Markdown
            headerIds: false, // Don't add IDs to headers
            mangle: false, // Don't mangle email addresses
            sanitize: false, // We'll use DOMPurify instead
            smartLists: true,
            smartypants: false,
            xhtml: false
        });
        
        // Parse markdown to HTML
        const rawHtml = marked.parse(content);
        
        // Sanitize the HTML to prevent XSS attacks
        const cleanHtml = DOMPurify.sanitize(rawHtml, {
            ALLOWED_TAGS: [
                'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'p', 'br', 'strong', 'b', 'em', 'i', 'u',
                'ul', 'ol', 'li', 'blockquote',
                'code', 'pre', 'a', 'img',
                'table', 'thead', 'tbody', 'tr', 'th', 'td',
                'hr', 'del', 'ins', 'mark', 'sub', 'sup'
            ],
            ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'target'],
            ALLOW_DATA_ATTR: false
        });
        
        return cleanHtml;
    } catch (error) {
        console.error('Error parsing markdown:', error);
        // Fallback to simple text with line breaks
        return content.replace(/\n/g, '<br>');
    }
}

// Update assistant message content
function updateAssistantMessage(messageElement, content, isComplete = false) {
    const bubble = messageElement.querySelector('.message-bubble');
    bubble.innerHTML = formatMessage(content);

    if (!isComplete) {
        const cursor = document.createElement('span');
        cursor.className = 'streaming-cursor';
        bubble.appendChild(cursor);
    } else {
        bubble.classList.remove('message-streaming');
        const cursor = bubble.querySelector('.streaming-cursor');
        if (cursor) cursor.remove();
    }
    scrollToBottom();
}

// Enhanced stream response handler for backend's ChunkPayload format
async function streamResponse(prompt, messageElement) {
    console.log('Starting stream response for prompt:', prompt);
    
    const payload = {
        prompt: prompt,
        session: appState.currentSession,
        user_id: 'user-' + Date.now(),
        organization_id: 'org-' + Date.now()
    };

    try {
        console.log('Making API call to:', `${appState.apiBaseUrl}/stream`);
        const response = await fetch(`${appState.apiBaseUrl}/stream`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulatedContent = '';
        let toolCallArtifact = messageElement.querySelector('.artifact'); // Use existing artifact
        let toolCallsData = new Map(); // Use Map for better tool call tracking
        let reasoningData = [];

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    const data = line.slice(6);
                    if (data === '[DONE]' || data.trim() === '') {
                        continue;
                    }

                    try {
                        const parsed = JSON.parse(data);
                        console.log('Parsed chunk:', parsed);
                        
                        // Handle different chunk types based on backend's ChunkPayload format
                        const { id, content, type, category } = parsed;
                        
                        // Log for debugging
                        if (category !== 'text.chunk') {
                            console.log(`Processing chunk - Category: ${category}, Type: ${type}, ID: ${id}`, content);
                        }
                        
                        switch (category) {
                            case 'text.chunk':
                                // Regular text content from the AI - stream it character by character for effect
                                if (content && typeof content === 'string') {
                                    // Add streaming effect for better UX
                                    await streamTextContent(content, (text) => {
                                        accumulatedContent += text;
                                updateAssistantMessage(messageElement, accumulatedContent);
                                    });
                                }
                                break;
                                
                            case 'reasoning':
                                // Tool call results and reasoning
                                if (content && content.name) {
                                    if (!toolCallArtifact) {
                                        toolCallArtifact = messageElement.querySelector('.artifact');
                                    }
                                    
                                    // Update or create tool call entry
                                    const toolCall = toolCallsData.get(id) || {
                                        id: id,
                                        name: content.name,
                                        status: 'completed',
                                        timestamp: new Date().toISOString(),
                                        result: content.content,
                                        artifact: content.artifact
                                    };
                                    
                                    toolCall.result = content.content;
                                    toolCall.status = 'completed';
                                    toolCallsData.set(id, toolCall);
                                    
                                    updateToolCallArtifact(toolCallArtifact, Array.from(toolCallsData.values()));
                                }
                                break;
                                
                            case 'reasoning.chunk':
                                // Streaming reasoning content
                                if (content && content.name) {
                            if (!toolCallArtifact) {
                                        toolCallArtifact = messageElement.querySelector('.artifact');
                                    }
                                    
                                    // Update or create tool call entry
                                    let toolCall = toolCallsData.get(id);
                                    if (!toolCall) {
                                        toolCall = {
                                            id: id,
                                            name: content.name,
                                        status: 'calling',
                                            timestamp: new Date().toISOString(),
                                            result: ''
                                        };
                                        toolCallsData.set(id, toolCall);
                                    }
                                    
                                    // Append streaming content with typing effect
                                    if (content.content) {
                                        const newContent = content.content;
                                        await streamToolResult(newContent, (text) => {
                                            toolCall.result = (toolCall.result || '') + text;
                                            updateToolCallArtifact(toolCallArtifact, Array.from(toolCallsData.values()));
                                        });
                                    }
                                }
                                break;
                                
                            case 'interrupt':
                                // Handle interrupts (tool calls starting)
                                if (content) {
                                    if (!toolCallArtifact) {
                                        toolCallArtifact = messageElement.querySelector('.artifact');
                                    }
                                    
                                    // Handle tool_calls array
                                    if (content.tool_calls) {
                                        content.tool_calls.forEach(toolCall => {
                                            const toolData = {
                                                id: toolCall.id,
                                                name: toolCall.function?.name || toolCall.name,
                                                args: toolCall.function?.arguments || toolCall.args,
                                                status: 'calling',
                                                timestamp: new Date().toISOString()
                                            };
                                            toolCallsData.set(toolCall.id, toolData);
                                        });
                                    }
                                    // Handle single tool call
                                    else if (content.name || content.function) {
                                        const toolData = {
                                            id: id,
                                            name: content.function?.name || content.name,
                                            args: content.function?.arguments || content.args,
                                            status: 'calling',
                                            timestamp: new Date().toISOString()
                                        };
                                        toolCallsData.set(id, toolData);
                                    }
                                    
                                    updateToolCallArtifact(toolCallArtifact, Array.from(toolCallsData.values()));
                                }
                                break;
                                
                            default:
                                // Handle any other content types
                                if (content && typeof content === 'string') {
                                    accumulatedContent += content;
                                    updateAssistantMessage(messageElement, accumulatedContent);
                                }
                                break;
                        }

                    } catch (e) {
                        console.warn('Failed to parse chunk as JSON:', data, e);
                        // Fallback: treat as plain text if it's not empty
                        if (data.trim()) {
                            accumulatedContent += data;
                            updateAssistantMessage(messageElement, accumulatedContent);
                        }
                    }
                }
            }
        }

        // Finalize the response
        updateAssistantMessage(messageElement, accumulatedContent || 'Response completed.', true);
        if (toolCallArtifact && toolCallsData.size > 0) {
            // Mark all tool calls as completed
            toolCallsData.forEach(toolCall => {
                if (toolCall.status === 'calling') {
                    toolCall.status = 'completed';
                }
            });
            updateToolCallArtifact(toolCallArtifact, Array.from(toolCallsData.values()), true);
        }

    } catch (error) {
        console.error('Streaming error:', error);
        let errorMessage = 'Sorry, there was an error processing your request. ';
        
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            errorMessage += `Unable to connect to the API server at ${appState.apiBaseUrl}. Please ensure the server is running and try again.`;
        } else if (error.message.includes('HTTP error')) {
            errorMessage += `Server returned an error: ${error.message}. Please try again.`;
        } else {
            errorMessage += 'Please check your connection and try again.';
        }
        
        updateAssistantMessage(messageElement, errorMessage, true);
    }
}

// Stream text content with typing effect
async function streamTextContent(content, callback) {
    const words = content.split(' ');
    for (let i = 0; i < words.length; i++) {
        const word = words[i] + (i < words.length - 1 ? ' ' : '');
        callback(word);
        // Add small delay for streaming effect
        await new Promise(resolve => setTimeout(resolve, 20));
    }
}

// Stream tool result content with typing effect
async function streamToolResult(content, callback) {
    const chunks = content.match(/.{1,10}/g) || [content]; // Split into chunks of 10 characters
    for (const chunk of chunks) {
        callback(chunk);
        // Faster streaming for tool results
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}

// Create enhanced tool call artifact with better UI
function createSingleToolCallArtifact(messageElement) {
    const contentDiv = messageElement.querySelector('.message-content');
    
    const artifact = document.createElement('div');
    artifact.className = 'artifact enhanced-artifact';
    
    const header = document.createElement('div');
    header.className = 'artifact-header expanded';
    header.innerHTML = `
        <div class="artifact-header-content">
            <div class="artifact-icon-wrapper">
                <span class="artifact-icon">🧠</span>
                <div class="artifact-pulse"></div>
            </div>
            <div class="artifact-title-section">
                <h4 class="artifact-title">AI Internal Analysis</h4>
                <p class="artifact-subtitle">Tool calls, reasoning, and backend processing</p>
            </div>
        </div>
        <div class="artifact-controls">
            <span class="artifact-status processing">Processing...</span>
            <button class="artifact-toggle" aria-label="Toggle analysis view">
                <svg class="toggle-icon" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M7 14l5-5 5 5z" fill="currentColor"/>
                </svg>
            </button>
        </div>
    `;
    
    const content = document.createElement('div');
    content.className = 'artifact-content expanded';
    content.innerHTML = `
        <div class="analysis-sections">
            <div class="reasoning-section">
                <div class="section-header">
                    <span class="section-icon">💭</span>
                    <h5>AI Reasoning</h5>
                </div>
                <div class="reasoning-content">
                    <div class="thinking-indicator">
                        <div class="thinking-dots">
                            <span></span><span></span><span></span>
                        </div>
                        <span class="thinking-text">Analyzing your request...</span>
                    </div>
                </div>
            </div>
            <div class="tool-calls-section">
                <div class="section-header">
                    <span class="section-icon">🔧</span>
                    <h5>Tool Execution</h5>
                </div>
                <div class="tool-calls-container">
                    <div class="no-tools-message">No tool calls yet...</div>
                </div>
            </div>
        </div>
    `;
    
    // Enhanced toggle functionality with smooth animations
    header.addEventListener('click', (e) => {
        if (e.target.closest('.artifact-toggle')) {
            toggleArtifact(artifact);
        }
    });
    
    artifact.appendChild(header);
    artifact.appendChild(content);
    contentDiv.appendChild(artifact);
    
    // Add entrance animation
    setTimeout(() => {
        artifact.classList.add('artifact-visible');
    }, 100);
    
    scrollToBottom();
    return artifact;
}

// Enhanced artifact toggle with smooth animations
function toggleArtifact(artifact) {
    const header = artifact.querySelector('.artifact-header');
    const content = artifact.querySelector('.artifact-content');
    const toggle = header.querySelector('.artifact-toggle');
    const isExpanded = header.classList.contains('expanded');
    
    if (isExpanded) {
        // Collapse
        content.style.maxHeight = content.scrollHeight + 'px';
        content.offsetHeight; // Force reflow
        content.style.maxHeight = '0';
        header.classList.remove('expanded');
        content.classList.remove('expanded');
        toggle.classList.add('collapsed');
    } else {
        // Expand
        content.classList.add('expanded');
        header.classList.add('expanded');
        content.style.maxHeight = content.scrollHeight + 'px';
        toggle.classList.remove('collapsed');
        
        // Reset max-height after animation
        setTimeout(() => {
            if (content.classList.contains('expanded')) {
                content.style.maxHeight = 'none';
            }
        }, 300);
    }
}

// Update enhanced tool call artifact with better visualization
function updateToolCallArtifact(artifact, toolCallsData, isComplete = false) {
    const container = artifact.querySelector('.tool-calls-container');
    const statusElement = artifact.querySelector('.artifact-status');
    const reasoningContent = artifact.querySelector('.reasoning-content');
    
    // Update overall status
    if (isComplete) {
        statusElement.textContent = 'Complete';
        statusElement.className = 'artifact-status complete';
        // Remove thinking indicator
        const thinkingIndicator = reasoningContent?.querySelector('.thinking-indicator');
        if (thinkingIndicator) {
            thinkingIndicator.style.opacity = '0';
            setTimeout(() => thinkingIndicator.remove(), 300);
        }
    } else {
        statusElement.textContent = 'Processing...';
        statusElement.className = 'artifact-status processing';
    }
    
    // Update tool calls
    if (!toolCallsData || toolCallsData.length === 0) {
        container.innerHTML = '<div class="no-tools-message">Waiting for tool calls...</div>';
        return;
    }
    
    let html = '';
    
    toolCallsData.forEach((toolCall, index) => {
        const status = toolCall.status || 'calling';
        const statusIcon = getStatusIcon(status);
        const functionName = toolCall.name || 'Unknown Function';
        const args = toolCall.args || '{}';
        const duration = toolCall.duration || calculateDuration(toolCall.timestamp);
        
        // Parse arguments safely
        let parsedArgs = {};
        try {
            parsedArgs = typeof args === 'string' ? JSON.parse(args) : args;
        } catch (e) {
            parsedArgs = { raw: args };
        }
        
        html += `
            <div class="enhanced-tool-call-item ${status}" data-tool-id="${toolCall.id || index}">
                <div class="tool-call-header" onclick="toggleToolDetails(this.parentElement)">
                    <div class="tool-status-indicator">
                        <span class="status-icon">${statusIcon}</span>
                        <div class="status-pulse ${status}"></div>
                </div>
                    <div class="tool-info">
                        <h6 class="tool-name">${functionName}</h6>
                        <div class="tool-meta">
                            <span class="tool-time">${new Date(toolCall.timestamp).toLocaleTimeString()}</span>
                            ${duration ? `<span class="tool-duration">${duration}</span>` : ''}
                    </div>
                    </div>
                    <button class="tool-expand-btn" onclick="event.stopPropagation(); toggleToolDetails(this.closest('.enhanced-tool-call-item'))">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M7 14l5-5 5 5z" fill="currentColor"/>
                        </svg>
                    </button>
                </div>
                <div class="tool-call-details collapsed">
                    ${Object.keys(parsedArgs).length > 0 ? `
                        <div class="tool-section">
                            <div class="section-label">
                                <span class="label-icon">📝</span>
                                <strong>Function Arguments</strong>
                            </div>
                            <div class="args-container">
                                <pre class="json-display"><code>${safeJSONStringify(parsedArgs, 2)}</code></pre>
                            </div>
                        </div>
                    ` : ''}
                    ${toolCall.result ? `
                        <div class="tool-section">
                            <div class="section-label">
                                <span class="label-icon">📊</span>
                                <strong>Execution Result</strong>
                            </div>
                            <div class="result-container">
                                ${formatEnhancedToolResult(toolCall.result)}
                            </div>
                        </div>
                    ` : status === 'calling' ? `
                        <div class="tool-section">
                            <div class="section-label">
                                <span class="label-icon">⏳</span>
                                <strong>Status</strong>
                            </div>
                            <div class="execution-status">
                                <div class="status-message">Executing function...</div>
                                <div class="progress-bar">
                                    <div class="progress-fill"></div>
                                </div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    
    // Add staggered animations for new tool calls
    const toolItems = container.querySelectorAll('.enhanced-tool-call-item');
    toolItems.forEach((item, index) => {
        if (!item.classList.contains('animated')) {
            item.style.animationDelay = `${index * 100}ms`;
            item.classList.add('slide-in', 'animated');
        }
    });
    
    scrollToBottom();
}

// Get status icon with better visual indicators
function getStatusIcon(status) {
    const icons = {
        'calling': '⏳',
        'processing': '🔄',
        'completed': '✅',
        'error': '❌',
        'pending': '⏸️'
    };
    return icons[status] || '🔄';
}

// Calculate duration for tool calls
function calculateDuration(timestamp) {
    if (!timestamp) return null;
    const start = new Date(timestamp);
    const now = new Date();
    const diff = now - start;
    if (diff < 1000) return `${diff}ms`;
    return `${(diff / 1000).toFixed(1)}s`;
}

// Toggle tool call details
function toggleToolDetails(toolItem) {
    if (!toolItem) return;
    
    const details = toolItem.querySelector('.tool-call-details');
    const button = toolItem.querySelector('.tool-expand-btn');
    
    if (!details || !button) return;
    
    const isCollapsed = details.classList.contains('collapsed');
    
    if (isCollapsed) {
        details.classList.remove('collapsed');
        details.classList.add('expanded');
        button.classList.add('expanded');
    } else {
        details.classList.add('collapsed');
        details.classList.remove('expanded');
        button.classList.remove('expanded');
    }
}

// Enhanced tool result formatting with better visualization
function formatEnhancedToolResult(result) {
    if (typeof result === 'string') {
        // Check if it's JSON
        try {
            const parsed = JSON.parse(result);
            return `
                <div class="result-json">
                    <div class="result-header">
                        <span class="result-type">JSON Response</span>
                        <button class="copy-result-btn" onclick="copyToClipboard(this)" data-content="${escapeHtml(result)}">
                            <svg viewBox="0 0 24 24" width="14" height="14">
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
                            </svg>
                            Copy
                        </button>
                    </div>
                    <pre class="json-display"><code>${JSON.stringify(parsed, null, 2)}</code></pre>
                </div>
            `;
        } catch (e) {
            // Plain text result
            const isLongText = result.length > 200;
            return `
                <div class="result-text ${isLongText ? 'expandable' : ''}">
                    <div class="result-header">
                        <span class="result-type">Text Response</span>
                        <button class="copy-result-btn" onclick="copyToClipboard(this)" data-content="${escapeHtml(result)}">
                            <svg viewBox="0 0 24 24" width="14" height="14">
                                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
                            </svg>
                            Copy
                        </button>
                    </div>
                    <div class="text-content ${isLongText ? 'truncated' : ''}">
                        ${result.replace(/\n/g, '<br>')}
                    </div>
                    ${isLongText ? '<button class="expand-text-btn" onclick="toggleTextExpansion(this)">Show more</button>' : ''}
                </div>
            `;
        }
    } else if (typeof result === 'object') {
        return `
            <div class="result-json">
                <div class="result-header">
                    <span class="result-type">Object Response</span>
                    <button class="copy-result-btn" onclick="copyToClipboard(this)" data-content="${escapeHtml(JSON.stringify(result, null, 2))}">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
                        </svg>
                        Copy
                    </button>
                </div>
                <pre class="json-display"><code>${JSON.stringify(result, null, 2)}</code></pre>
            </div>
        `;
    } else {
        return `
            <div class="result-text">
                <div class="result-header">
                    <span class="result-type">Simple Response</span>
                    <button class="copy-result-btn" onclick="copyToClipboard(this)" data-content="${escapeHtml(String(result))}">
                        <svg viewBox="0 0 24 24" width="14" height="14">
                            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"/>
                        </svg>
                        Copy
                    </button>
                </div>
                <div class="text-content">${String(result)}</div>
            </div>
        `;
    }
}

// Utility functions for enhanced artifact
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function copyToClipboard(button) {
    const content = button.getAttribute('data-content');
    navigator.clipboard.writeText(content).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = `
            <svg viewBox="0 0 24 24" width="14" height="14">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
            </svg>
            Copied!
        `;
        button.classList.add('copied');
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showInfoMessage('Failed to copy to clipboard');
    });
}

function toggleTextExpansion(button) {
    const textContent = button.previousElementSibling;
    const isExpanded = textContent.classList.contains('expanded');
    
    if (isExpanded) {
        textContent.classList.remove('expanded');
        textContent.classList.add('truncated');
        button.textContent = 'Show more';
    } else {
        textContent.classList.add('expanded');
        textContent.classList.remove('truncated');
        button.textContent = 'Show less';
    }
}

// Update reasoning display with AI's internal thoughts
function updateReasoningDisplay(artifact, reasoning) {
    const reasoningContent = artifact.querySelector('.reasoning-content');
    if (!reasoningContent) return;
    
    // Remove thinking indicator if it exists
    const thinkingIndicator = reasoningContent.querySelector('.thinking-indicator');
    if (thinkingIndicator) {
        thinkingIndicator.style.opacity = '0';
        setTimeout(() => thinkingIndicator.remove(), 300);
    }
    
    // Create reasoning display
    const reasoningDisplay = document.createElement('div');
    reasoningDisplay.className = 'reasoning-display';
    
    if (typeof reasoning === 'string') {
        reasoningDisplay.innerHTML = `
            <div class="reasoning-item">
                <div class="reasoning-header">
                    <span class="reasoning-icon">🤔</span>
                    <strong>AI Reasoning</strong>
                </div>
                <div class="reasoning-text">${reasoning.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    } else if (typeof reasoning === 'object') {
        let html = '';
        
        // Handle different reasoning structures
        if (reasoning.steps && Array.isArray(reasoning.steps)) {
            html += `
                <div class="reasoning-item">
                    <div class="reasoning-header">
                        <span class="reasoning-icon">🧠</span>
                        <strong>Thinking Process</strong>
                    </div>
                    <div class="reasoning-steps">
                        ${reasoning.steps.map((step, index) => `
                            <div class="reasoning-step">
                                <span class="step-number">${index + 1}</span>
                                <span class="step-text">${step}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        if (reasoning.analysis) {
            html += `
                <div class="reasoning-item">
                    <div class="reasoning-header">
                        <span class="reasoning-icon">🔍</span>
                        <strong>Analysis</strong>
                    </div>
                    <div class="reasoning-text">${reasoning.analysis.replace(/\n/g, '<br>')}</div>
                </div>
            `;
        }
        
        if (reasoning.approach) {
            html += `
                <div class="reasoning-item">
                    <div class="reasoning-header">
                        <span class="reasoning-icon">🎯</span>
                        <strong>Approach</strong>
                    </div>
                    <div class="reasoning-text">${reasoning.approach.replace(/\n/g, '<br>')}</div>
                </div>
            `;
        }
        
        // Fallback for generic object
        if (!html) {
            html = `
                <div class="reasoning-item">
                    <div class="reasoning-header">
                        <span class="reasoning-icon">💭</span>
                        <strong>Internal Thoughts</strong>
                    </div>
                    <div class="reasoning-json">
                        <pre><code>${JSON.stringify(reasoning, null, 2)}</code></pre>
                    </div>
                </div>
            `;
        }
        
        reasoningDisplay.innerHTML = html;
    }
    
    // Add with animation
    reasoningDisplay.style.opacity = '0';
    reasoningDisplay.style.transform = 'translateY(10px)';
    reasoningContent.appendChild(reasoningDisplay);
    
    setTimeout(() => {
        reasoningDisplay.style.transition = 'all 0.3s ease-out';
        reasoningDisplay.style.opacity = '1';
        reasoningDisplay.style.transform = 'translateY(0)';
    }, 100);
    
    scrollToBottom();
}

// Safe JSON stringify to handle errors/cycles
function safeJSONStringify(value, spaces) {
    const cache = new Set();
    try {
        return JSON.stringify(value, function(key, val) {
            if (typeof val === 'object' && val !== null) {
                if (cache.has(val)) return '[Circular]';
                cache.add(val);
            }
            return val;
        }, spaces);
    } catch (err) {
        try {
            return String(value);
        } catch (_) {
            return '[Unserializable]';
        }
    }
}

// Scroll to bottom
function scrollToBottom() {
    elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

// Show/hide loading
function showLoading() {
    if (elements.loadingOverlay) {
        elements.loadingOverlay.style.display = 'flex';
    }
}

function hideLoading() {
    if (elements.loadingOverlay) {
        elements.loadingOverlay.style.display = 'none';
    }
}

// Show info message
function showInfoMessage(message) {
    // Create a temporary info message
    const infoDiv = document.createElement('div');
    infoDiv.className = 'info-message';
    infoDiv.textContent = message;
    infoDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #3b82f6;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(infoDiv);
    
    setTimeout(() => {
        infoDiv.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => infoDiv.remove(), 300);
    }, 3000);
}

// Truncate text helper
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Handle classify submit
async function handleClassifySubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const ticketData = {
        id: formData.get('ticketId'),
        subject: formData.get('subject'),
        body: formData.get('body')
    };

    showLoading();

    try {
        const response = await fetch(`${appState.apiBaseUrl}/classify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ticketData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        closeClassificationModal();
        
        // Display classification result
        const resultMessage = `Classification Result:\n${JSON.stringify(result, null, 2)}`;
        addAssistantMessage(resultMessage);
        
    } catch (error) {
        console.error('Error classifying ticket:', error);
        showInfoMessage('Classification failed. Please try again.');
    } finally {
        hideLoading();
    }
}

// Modal functions
function openClassificationModal() {
    elements.classifyModal.style.display = 'block';
    elements.modalBackdrop.style.display = 'block';
}

function closeClassificationModal() {
    elements.classifyModal.style.display = 'none';
    elements.modalBackdrop.style.display = 'none';
    elements.classificationForm.reset();
}

// Sidebar functions
function openSidebar() {
    elements.ticketsSidebar.classList.add('open');
}

function closeSidebar() {
    elements.ticketsSidebar.classList.remove('open');
}

// NEW: Handle load classified tickets with better error handling
async function handleLoadClassifiedTickets() {
    console.log('Loading classified tickets...');
    showLoading();

    try {
        console.log('Making API call to:', `${appState.apiBaseUrl}/load-classified-tickets`);
        
        // Add a timeout to the fetch request
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
        
        const response = await fetch(`${appState.apiBaseUrl}/load-classified-tickets`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            // Log the response details for debugging
            console.error('Response not OK:', {
                status: response.status,
                statusText: response.statusText,
                url: response.url
            });
            
            if (response.status === 404) {
                throw new Error('Endpoint not found. Make sure /load-classified-tickets is implemented on your backend.');
            } else if (response.status === 500) {
                const errorText = await response.text().catch(() => 'Unknown server error');
                throw new Error(`Server error (500): ${errorText}`);
            } else {
                throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
            }
        }

        const rawData = await response.json();
        console.log('Received classified tickets:', rawData);
        
        // Handle the response structure
        if (rawData && rawData.classified_tickets && Array.isArray(rawData.classified_tickets)) {
            appState.classifiedTickets = rawData.classified_tickets;
        } else if (Array.isArray(rawData)) {
            // Handle case where API returns array directly
            appState.classifiedTickets = rawData;
        } else {
            console.warn('Unexpected response format:', rawData);
            throw new Error('Invalid response format from server');
        }
        
        displayClassifiedTicketsEnhanced();
        openClassifiedSidebar(); // Use the wider sidebar

    } catch (error) {
        console.error('Error loading classified tickets:', error);
        
        let errorMessage = 'Failed to load classified tickets. ';
        if (error.name === 'AbortError') {
            errorMessage += 'Request timed out.';
        } else if (error.message.includes('fetch')) {
            errorMessage += 'Cannot connect to API server. Please check if the server is running on http://localhost:8003';
        } else {
            errorMessage += error.message;
        }
        
        // Show mock classified tickets for demonstration
        console.log('Loading mock classified tickets...');
        appState.classifiedTickets = getMockClassifiedTickets();
        displayClassifiedTicketsEnhanced();
        openClassifiedSidebar();
        showInfoMessage(errorMessage + ' Using sample data.');
    } finally {
        hideLoading();
    }
}

// NEW: Open wider sidebar for classified tickets
function openClassifiedSidebar() {
    elements.ticketsSidebar.classList.add('open');
    elements.ticketsSidebar.classList.add('wide'); // Add wide class for classified tickets
    sidebarWidth = 600; // Set wider width for classified tickets
    elements.ticketsSidebar.style.width = sidebarWidth + 'px';
}

// NEW: Display classified tickets with enhanced layout
function displayClassifiedTickets() {
    console.log('Displaying', appState.classifiedTickets.length, 'classified tickets');
    
    // Update sidebar header
    const sidebarHeader = elements.ticketsSidebar.querySelector('.sidebar-header h3');
    if (sidebarHeader) {
        sidebarHeader.textContent = 'Classified Tickets';
    }
    
    if (appState.classifiedTickets.length === 0) {
        elements.ticketsList.innerHTML = '<div class="empty-state">No classified tickets found</div>';
        return;
    }

    const ticketsHTML = appState.classifiedTickets.map(classifiedTicket => {
        const ticket = classifiedTicket.ticket;
        const topicColor = getTopicColor(classifiedTicket.topic);
        const sentimentColor = getSentimentColor(classifiedTicket.sentiment);
        const priorityColor = getPriorityColor(classifiedTicket.priority);
        
        return `
            <div class="classified-ticket-card">
                <div class="classified-ticket-header">
                    <div class="ticket-id-container">
                        <span class="ticket-id">${ticket.id}</span>
                    </div>
                    <div class="classification-tags">
                        <span class="tag topic-tag" style="background-color: ${topicColor}">
                            <span class="tag-icon">🏷️</span>
                            ${classifiedTicket.topic}
                        </span>
                        <span class="tag sentiment-tag" style="background-color: ${sentimentColor}">
                            <span class="tag-icon">😊</span>
                            ${classifiedTicket.sentiment}
                        </span>
                        <span class="tag priority-tag" style="background-color: ${priorityColor}">
                            <span class="tag-icon">⚡</span>
                            ${classifiedTicket.priority}
                        </span>
                    </div>
                </div>
                
                <div class="ticket-content">
                    <h4 class="ticket-subject">${ticket.subject}</h4>
                    <div class="ticket-body-preview">
                        ${truncateText(ticket.body, 200)}
                        ${ticket.body.length > 200 ? '<button class="expand-body-btn" onclick="toggleBodyExpansion(this)">Show more</button>' : ''}
                    </div>
                    <div class="ticket-body-full" style="display: none;">
                        ${ticket.body}
                        <button class="collapse-body-btn" onclick="toggleBodyExpansion(this)">Show less</button>
                    </div>
                </div>
                
                <div class="classification-analysis">
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">🎯</span>
                            <strong>Topic Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.topic_explanation || 'No explanation provided'}</div>
                    </div>
                    
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">💭</span>
                            <strong>Sentiment Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.sentiment_explanation || 'No explanation provided'}</div>
                    </div>
                    
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">📊</span>
                            <strong>Priority Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.priority_explanation || 'No explanation provided'}</div>
                    </div>
                </div>
                
                <div class="ticket-actions">
                    <button class="btn btn--primary btn--sm send-ticket-btn" onclick="sendClassifiedTicketToAgent('${ticket.id}')">
                        <span class="btn-icon">🚀</span>
                        Send to Agent
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="copyTicketDetails('${ticket.id}')">
                        <span class="btn-icon">📋</span>
                        Copy Details
                    </button>
                </div>
            </div>
        `;
    }).join('');

    elements.ticketsList.innerHTML = ticketsHTML;
}

// NEW: Toggle body expansion
function toggleBodyExpansion(button) {
    const ticketCard = button.closest('.classified-ticket-card');
    const preview = ticketCard.querySelector('.ticket-body-preview');
    const full = ticketCard.querySelector('.ticket-body-full');
    
    if (preview.style.display === 'none') {
        // Show preview, hide full
        preview.style.display = 'block';
        full.style.display = 'none';
    } else {
        // Show full, hide preview
        preview.style.display = 'none';
        full.style.display = 'block';
    }
}

// NEW: Copy ticket details to clipboard
function copyTicketDetails(ticketId) {
    const classifiedTicket = appState.classifiedTickets.find(ct => ct.ticket.id === ticketId);
    if (!classifiedTicket) return;

    const ticket = classifiedTicket.ticket;
    const details = `Ticket ID: ${ticket.id}
Subject: ${ticket.subject}
Body: ${ticket.body}

Classification:
- Topic: ${classifiedTicket.topic}
- Sentiment: ${classifiedTicket.sentiment}
- Priority: ${classifiedTicket.priority}

Analysis:
- Topic: ${classifiedTicket.reasoning?.topic_explanation || 'N/A'}
- Sentiment: ${classifiedTicket.reasoning?.sentiment_explanation || 'N/A'}
- Priority: ${classifiedTicket.reasoning?.priority_explanation || 'N/A'}`;

    navigator.clipboard.writeText(details).then(() => {
        showInfoMessage('Ticket details copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy to clipboard:', err);
        showInfoMessage('Failed to copy to clipboard');
    });
}

// NEW: Get color for topic tags
function getTopicColor(topic) {
    const colors = {
        'How-to': '#3b82f6',      // Blue
        'Product': '#10b981',      // Emerald
        'Connector': '#f59e0b',    // Amber
        'Lineage': '#8b5cf6',      // Violet
        'API/SDK': '#ef4444',      // Red
        'SSO': '#06b6d4',          // Cyan
        'Glossary': '#84cc16',     // Lime
        'Best practices': '#6366f1', // Indigo
        'Sensitive data': '#ec4899', // Pink
    };
    return colors[topic] || '#6b7280'; // Default gray
}

// NEW: Get color for sentiment tags
function getSentimentColor(sentiment) {
    const colors = {
        'Frustrated': '#ef4444',   // Red
        'Curious': '#3b82f6',      // Blue
        'Angry': '#dc2626',        // Dark red
        'Neutral': '#6b7280',      // Gray
        'Urgent': '#f59e0b',       // Amber
        'Happy': '#10b981',        // Green
        'Confused': '#8b5cf6',     // Purple
    };
    return colors[sentiment] || '#6b7280'; // Default gray
}

// NEW: Get color for priority tags
function getPriorityColor(priority) {
    const colors = {
        'P0': '#dc2626',           // High priority - Red
        'P1': '#f59e0b',           // Medium priority - Amber
        'P2': '#10b981',           // Low priority - Green
    };
    return colors[priority] || '#6b7280'; // Default gray
}

// NEW: Send classified ticket to agent
async function sendClassifiedTicketToAgent(ticketId) {
    const classifiedTicket = appState.classifiedTickets.find(ct => ct.ticket.id === ticketId);
    if (!classifiedTicket) return;

    const ticket = classifiedTicket.ticket;
    const prompt = `Ticket ID: ${ticket.id}\nSubject: ${ticket.subject}\nBody: ${ticket.body}\n\nClassification:\n- Topic: ${classifiedTicket.topic}\n- Sentiment: ${classifiedTicket.sentiment}\n- Priority: ${classifiedTicket.priority}`;
    
    closeSidebar();
    
    // Clear welcome message if exists
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message
    addUserMessage(prompt);
    
    // Show loading state for assistant response
    const assistantMessageElement = addAssistantMessage('', true);

    try {
        appState.isStreaming = true;
        elements.sendButton.disabled = true;

        // Always create artifact for AI analysis visibility
        const analysisArtifact = createSingleToolCallArtifact(assistantMessageElement);

        // Use streaming response for classified ticket processing
        await streamResponse(prompt, assistantMessageElement);

    } catch (error) {
        console.error('Error sending classified ticket to agent:', error);
        updateAssistantMessage(assistantMessageElement, 'Error processing classified ticket. Please try again.', true);
    } finally {
        appState.isStreaming = false;
        elements.sendButton.disabled = false;
    }
}

// NEW: Mock classified tickets for testing
function getMockClassifiedTickets() {
    return [
        {
            ticket: {
                id: "TICKET-245",
                subject: "Connecting Snowflake to Atlan - required permissions?",
                body: "Hi team, we're trying to set up our primary Snowflake production database as a new source in Atlan, but the connection keeps failing. We've tried using our standard service account, but it's not working. Our entire BI team is blocked on this integration for a major upcoming project, so it's quite urgent. Could you please provide a definitive list of the exact permissions and credentials needed on the Snowflake side to get this working? Thanks."
            },
            topic: "Connector",
            sentiment: "Urgent",
            priority: "P0",
            reasoning: {
                topic_explanation: "The ticket is focused on connecting Snowflake, which is a specific data connector, and addresses issues related to permissions and credentials.",
                sentiment_explanation: "The customer expresses urgency due to their BI team being blocked on a critical integration for an upcoming project.",
                priority_explanation: "This is a P0 issue as it is blocking a major project and requires immediate attention."
            }
        },
        {
            ticket: {
                id: "TICKET-246",
                subject: "Which connectors automatically capture lineage?",
                body: "Hello, I'm new to Atlan and trying to understand the lineage capabilities. The documentation mentions automatic lineage, but it's not clear which of our connectors (we use Fivetran, dbt, and Tableau) support this out-of-the-box. We need to present a clear picture of our data flow to leadership next week. Can you explain how lineage capture differs for these tools?"
            },
            topic: "Lineage",
            sentiment: "Curious",
            priority: "P1",
            reasoning: {
                topic_explanation: "The ticket is specifically asking about lineage capabilities and which connectors support automatic lineage.",
                sentiment_explanation: "The customer is learning-oriented and seeking clarification on product capabilities.",
                priority_explanation: "This is informational and affects understanding but not blocking critical work."
            }
        },
        {
            ticket: {
                id: "TICKET-247",
                subject: "How to set up SSO with Azure AD?",
                body: "We need to integrate Atlan with our Azure Active Directory for single sign-on. Can you provide step-by-step instructions for configuring SAML authentication? Our security team requires all applications to use centralized authentication, and we have about 200 users who need access to Atlan."
            },
            topic: "SSO",
            sentiment: "Neutral",
            priority: "P1",
            reasoning: {
                topic_explanation: "The ticket is asking about SSO configuration with Azure AD, which falls under the SSO category.",
                sentiment_explanation: "Professional tone without urgency or frustration, seeking procedural guidance.",
                priority_explanation: "Important for security and user experience but not critical blocking issue."
            }
        }
    ];
}

// Handle load sample tickets (existing function with sidebar type handling)
async function handleLoadSampleTickets() {
    console.log('Loading sample tickets...');
    showLoading();

    try {
        console.log('Making API call to:', `${appState.apiBaseUrl}/load-sample-tickets`);
        const response = await fetch(`${appState.apiBaseUrl}/load-sample-tickets`);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const raw = await response.json();
        console.log('Received tickets:', raw);
        appState.sampleTickets = normalizeTicketsResponse(raw);
        displaySampleTickets();
        openSampleSidebar(); // Use regular sidebar

    } catch (error) {
        console.error('Error loading sample tickets:', error);
        appState.sampleTickets = getMockTickets();
        displaySampleTickets();
        openSampleSidebar();
        showInfoMessage('Using sample tickets (API server not available)');
    } finally {
        hideLoading();
    }
}

// NEW: Open regular sidebar for sample tickets
function openSampleSidebar() {
    elements.ticketsSidebar.classList.add('open');
    elements.ticketsSidebar.classList.remove('wide'); // Remove wide class for sample tickets
    sidebarWidth = 400; // Set regular width for sample tickets
    elements.ticketsSidebar.style.width = sidebarWidth + 'px';
    
    // Update sidebar header
    const sidebarHeader = elements.ticketsSidebar.querySelector('.sidebar-header h3');
    if (sidebarHeader) {
        sidebarHeader.textContent = 'Sample Tickets';
    }
}

// Display sample tickets (existing function)
function displaySampleTickets() {
    console.log('Displaying', appState.sampleTickets.length, 'tickets');
    
    if (appState.sampleTickets.length === 0) {
        elements.ticketsList.innerHTML = '<div class="empty-state">No sample tickets found</div>';
        return;
    }

    const ticketsHTML = appState.sampleTickets.map(ticket => `
        <div class="ticket-card">
            <div class="ticket-header">
                <span class="ticket-id">${ticket.id}</span>
            </div>
            <div class="ticket-subject">${ticket.subject}</div>
            <div class="ticket-body">${truncateText(ticket.body, 150)}</div>
            <button class="btn btn--primary btn--sm send-ticket-btn" onclick="sendTicketToAgent('${ticket.id}')">
                Send to Agent
            </button>
        </div>
    `).join('');

    elements.ticketsList.innerHTML = ticketsHTML;
}

// Send ticket to agent (existing function)
async function sendTicketToAgent(ticketId) {
    const ticket = appState.sampleTickets.find(t => t.id === ticketId);
    if (!ticket) return;

    const prompt = `Ticket ID: ${ticket.id}\nSubject: ${ticket.subject}\nBody: ${ticket.body}`;
    
    closeSidebar();
    
    // Clear welcome message if exists
    const welcomeMessage = document.querySelector('.welcome-message');
    if (welcomeMessage) {
        welcomeMessage.remove();
    }

    // Add user message
    addUserMessage(prompt);
    
    // Show loading state for assistant response
    const assistantMessageElement = addAssistantMessage('', true);

    try {
        appState.isStreaming = true;
        elements.sendButton.disabled = true;

        // Always create artifact for AI analysis visibility
        const analysisArtifact = createSingleToolCallArtifact(assistantMessageElement);

        // Use streaming response for ticket processing
        await streamResponse(prompt, assistantMessageElement);

    } catch (error) {
        console.error('Error sending ticket to agent:', error);
        updateAssistantMessage(assistantMessageElement, 'Error processing ticket. Please try again.', true);
    } finally {
        appState.isStreaming = false;
        elements.sendButton.disabled = false;
    }
}

// Mock tickets for testing (existing function)
function getMockTickets() {
    return [
        {
            id: "TICKET-001",
            subject: "How to connect Snowflake to Atlan?",
            body: "I need help setting up a Snowflake connection but getting authentication errors."
        },
        {
            id: "TICKET-002",
            subject: "Data lineage not showing",
            body: "The lineage view is empty even though we have data flowing through our pipeline."
        },
        {
            id: "TICKET-003",
            subject: "User permissions issue",
            body: "New team member can't access the datasets they need for their project."
        }
    ];
}

// Normalize tickets from various API shapes
function normalizeTicketsResponse(rawResponse) {
    try {
        if (typeof rawResponse === 'string') {
            const maybeParsed = JSON.parse(rawResponse);
            return normalizeTicketsArray(maybeParsed);
        }
        return normalizeTicketsArray(rawResponse);
    } catch (error) {
        console.warn('Failed to parse tickets response, falling back to empty list:', error);
        return [];
    }
}

function normalizeTicketsArray(maybeArrayLike) {
    let list = [];
    if (Array.isArray(maybeArrayLike)) {
        list = maybeArrayLike;
    } else if (maybeArrayLike && Array.isArray(maybeArrayLike.tickets)) {
        list = maybeArrayLike.tickets;
    } else if (maybeArrayLike && Array.isArray(maybeArrayLike.data)) {
        list = maybeArrayLike.data;
    } else if (maybeArrayLike && typeof maybeArrayLike === 'object' && maybeArrayLike.items && Array.isArray(maybeArrayLike.items)) {
        list = maybeArrayLike.items;
    }

    if (!Array.isArray(list)) return [];
    return list.map(normalizeSingleTicket).filter(Boolean);
}

function normalizeSingleTicket(item) {
    try {
        if (typeof item === 'string') {
            try {
                const parsed = JSON.parse(item);
                return coerceTicketShape(parsed);
            } catch (_) {
                return coerceTicketShape({ body: item });
            }
        }
        if (item && typeof item === 'object') {
            return coerceTicketShape(item);
        }
        return null;
    } catch (error) {
        console.warn('Failed to normalize ticket:', item, error);
        return null;
    }
}

function coerceTicketShape(source) {
    const getProp = (obj, candidates) => {
        for (const candidate of candidates) {
            if (obj[candidate] != null) return obj[candidate];
            const foundKey = Object.keys(obj).find(k => k.toLowerCase() === String(candidate).toLowerCase());
            if (foundKey && obj[foundKey] != null) return obj[foundKey];
        }
        return undefined;
    };

    let id = getProp(source, ['id', 'ticket_id', 'ticketId', 'key', 'uid', 'identifier']);
    let subject = getProp(source, ['subject', 'title', 'summary', 'heading']);
    let body = getProp(source, ['body', 'description', 'content', 'message', 'text', 'details']);

    const toStringSafe = (val) => (val == null ? '' : String(val)).trim();
    id = toStringSafe(id);
    subject = toStringSafe(subject);
    body = toStringSafe(body);

    if (!subject && body) {
        subject = truncateText(body, 80);
    }
    if (!body && subject) {
        body = subject;
    }
    if (!id) {
        id = source.ticket_id || source.ticketId || source.id || `TICKET-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
        id = toStringSafe(id);
    }

    return {
        id: id || 'Unknown ID',
        subject: subject || 'No subject',
        body: body || 'No description'
    };
}

// Initialize resizable sidebar functionality
function initializeResizableSidebar() {
    // Create resize handle
    const resizeHandle = document.createElement('div');
    resizeHandle.className = 'sidebar-resize-handle';
    elements.ticketsSidebar.appendChild(resizeHandle);

    // Mouse events for resizing
    resizeHandle.addEventListener('mousedown', startResize);
    document.addEventListener('mousemove', doResize);
    document.addEventListener('mouseup', stopResize);

    function startResize(e) {
        isResizing = true;
        resizeHandle.classList.add('dragging');
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';
        e.preventDefault();
    }

    function doResize(e) {
        if (!isResizing) return;
        
        const newWidth = window.innerWidth - e.clientX;
        const minWidth = 300;
        const maxWidth = Math.min(800, window.innerWidth * 0.8);
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            sidebarWidth = newWidth;
            elements.ticketsSidebar.style.width = sidebarWidth + 'px';
            
            // Update CSS custom property for transitions
            elements.ticketsSidebar.style.setProperty('--sidebar-width', sidebarWidth + 'px');
        }
    }

    function stopResize() {
        if (isResizing) {
            isResizing = false;
            resizeHandle.classList.remove('dragging');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        }
    }

    // Touch events for mobile
    resizeHandle.addEventListener('touchstart', startResizeTouch);
    document.addEventListener('touchmove', doResizeTouch);
    document.addEventListener('touchend', stopResize);

    function startResizeTouch(e) {
        isResizing = true;
        resizeHandle.classList.add('dragging');
        e.preventDefault();
    }

    function doResizeTouch(e) {
        if (!isResizing || !e.touches[0]) return;
        
        const touch = e.touches[0];
        const newWidth = window.innerWidth - touch.clientX;
        const minWidth = 300;
        const maxWidth = Math.min(800, window.innerWidth * 0.8);
        
        if (newWidth >= minWidth && newWidth <= maxWidth) {
            sidebarWidth = newWidth;
            elements.ticketsSidebar.style.width = sidebarWidth + 'px';
        }
    }
}

// Enhanced classified ticket display with animations
function displayClassifiedTicketsEnhanced() {
    console.log('Displaying', appState.classifiedTickets.length, 'classified tickets with enhanced UI');
    
    // Update sidebar header with animation
    const sidebarHeader = elements.ticketsSidebar.querySelector('.sidebar-header h3');
    if (sidebarHeader) {
        sidebarHeader.style.opacity = '0';
        setTimeout(() => {
            sidebarHeader.textContent = 'Classified Tickets';
            sidebarHeader.style.opacity = '1';
        }, 150);
    }
    
    if (appState.classifiedTickets.length === 0) {
        elements.ticketsList.innerHTML = '<div class="empty-state">No classified tickets found</div>';
        return;
    }

    // Add staggered animation to cards
    const ticketsHTML = appState.classifiedTickets.map((classifiedTicket, index) => {
        const ticket = classifiedTicket.ticket;
        const topicColor = getTopicColor(classifiedTicket.topic);
        const sentimentColor = getSentimentColor(classifiedTicket.sentiment);
        const priorityColor = getPriorityColor(classifiedTicket.priority);
        
        return `
            <div class="classified-ticket-card" style="animation-delay: ${index * 100}ms">
                <div class="classified-ticket-header">
                    <div class="ticket-id-container">
                        <span class="ticket-id">${ticket.id}</span>
                    </div>
                    <div class="classification-tags">
                        <span class="tag topic-tag" style="background-color: ${topicColor}">
                            <span class="tag-icon">🏷️</span>
                            ${classifiedTicket.topic}
                        </span>
                        <span class="tag sentiment-tag" style="background-color: ${sentimentColor}">
                            <span class="tag-icon">😊</span>
                            ${classifiedTicket.sentiment}
                        </span>
                        <span class="tag priority-tag" style="background-color: ${priorityColor}">
                            <span class="tag-icon">⚡</span>
                            ${classifiedTicket.priority}
                        </span>
                    </div>
                </div>
                
                <div class="ticket-content">
                    <h4 class="ticket-subject">${ticket.subject}</h4>
                    <div class="ticket-body-preview">
                        ${truncateText(ticket.body, 200)}
                        ${ticket.body.length > 200 ? '<button class="expand-body-btn" onclick="toggleBodyExpansion(this)">Show more</button>' : ''}
                    </div>
                    <div class="ticket-body-full" style="display: none;">
                        ${ticket.body}
                        <button class="collapse-body-btn" onclick="toggleBodyExpansion(this)">Show less</button>
                    </div>
                </div>
                
                <div class="classification-analysis">
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">🎯</span>
                            <strong>Topic Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.topic_explanation || 'No explanation provided'}</div>
                    </div>
                    
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">💭</span>
                            <strong>Sentiment Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.sentiment_explanation || 'No explanation provided'}</div>
                    </div>
                    
                    <div class="analysis-section">
                        <div class="analysis-header">
                            <span class="analysis-icon">📊</span>
                            <strong>Priority Analysis</strong>
                        </div>
                        <div class="analysis-content">${classifiedTicket.reasoning?.priority_explanation || 'No explanation provided'}</div>
                    </div>
                </div>
                
                <div class="ticket-actions">
                    <button class="btn btn--primary btn--sm send-ticket-btn" onclick="sendClassifiedTicketToAgent('${ticket.id}')">
                        <span class="btn-icon">🚀</span>
                        Send to Agent
                    </button>
                    <button class="btn btn--secondary btn--sm" onclick="copyTicketDetails('${ticket.id}')">
                        <span class="btn-icon">📋</span>
                        Copy Details
                    </button>
                </div>
            </div>
        `;
    }).join('');

    elements.ticketsList.innerHTML = ticketsHTML;
    
    // Trigger animation
    setTimeout(() => {
        const cards = elements.ticketsList.querySelectorAll('.classified-ticket-card');
        cards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }, 50);
}