// Start auto-open timer
var autoOpenTimer;

function startAutoOpenTimer() {
    autoOpenTimer = setTimeout(function() {
        var chatInterface = document.getElementById('chat-interface');
        chatInterface.style.display = 'block';
        var chatIcon = document.querySelector('.chat-icon');
        chatIcon.classList.add('open');
        // Add blink effect
        chatIcon.classList.add('blink');
        // Add pop effect
        chatIcon.classList.add('pop');
        // Start blinking
        startBlinking();
    }, 5000);
}

// Call startAutoOpenTimer() when the page loads
window.addEventListener('load', startAutoOpenTimer);

// Blinking function
function startBlinking() {
    var chatIcon = document.querySelector('.chat-icon');
    var blinkInterval = setInterval(function() {
        chatIcon.classList.toggle('blink');
    }, 500);
}

// Toggle chat function
function toggleChat() {
    var chatInterface = document.getElementById('chat-interface');
    chatInterface.style.display = (chatInterface.style.display === 'none') ? 'block' : 'none';
    var chatIcon = document.querySelector('.chat-icon');
    chatIcon.classList.toggle('open');
}

// Send message function
function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    var chatBody = document.getElementById('chat-body');

    // Display user message
    var userMessage = document.createElement('div');
    userMessage.className = 'user-message';
    userMessage.innerText = 'You: ' + userInput;
    chatBody.appendChild(userMessage);

    // Send message to server
    fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        // Display bot response
        var botMessage = document.createElement('div');
        botMessage.className = 'bot-message';
        botMessage.innerText = 'Assistant: ' + data.response;
        chatBody.appendChild(botMessage);

        // Scroll to bottom of chat body
        chatBody.scrollTop = chatBody.scrollHeight;
    })
    .catch(error => console.error('Error:', error));

    // Clear input field
    document.getElementById('user-input').value = '';

    // Add clicked class to chat icon
    var chatIcon = document.querySelector('.chat-icon');
    chatIcon.classList.add('clicked');
}

