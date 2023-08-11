// JavaScript to add animation to the Call-to-Action button
document.getElementById("login").addEventListener("mouseover", function() {
    this.classList.add("animated-button");
});
document.getElementById("login").addEventListener("mouseout", function() {
    this.classList.remove("animated-button");
});

// Function to toggle the overlay
function toggleOverlay() {
    const overlay = document.getElementById("overlay");
    const overlayContent = document.querySelector(".overlay-content");
    
    if (overlay.style.display === "block") {
        overlayContent.classList.remove("active");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    } else {
        overlay.style.display = "block";
        setTimeout(() => {
            overlayContent.classList.add("active");
        }, 10);
    }
}

// Event listener for the mobile toggle button
document.querySelector(".navbar-toggler").addEventListener("click", toggleOverlay);

// Event listener for the close overlay button
document.querySelector(".close-overlay").addEventListener("click", toggleOverlay);

// Event listener for the overlay links (optional)
document.querySelectorAll(".overlay-content .nav-link").forEach(link => {
    link.addEventListener("click", toggleOverlay);
});

// JavaScript to handle chatbot behavior
document.addEventListener("DOMContentLoaded", function () {
    const chatIcon = document.getElementById("chat-icon");
    const chatbot = document.getElementById("chatbot");
    const closeChat = document.getElementById("close-chat");
    const chatMessages = document.getElementById("chat-messages");
    const userInput = document.getElementById("user-input");
    const sendButton = document.getElementById("send-button");

    // Show chatbot when the icon is clicked
    chatIcon.addEventListener("click", function () {
        chatbot.style.display = "block";
        chatIcon.style.display = "none"; // Hide the chat icon when chatbot is open
        scrollToBottom();
    });

    // Close chatbot when the close button is clicked
    closeChat.addEventListener("click", function () {
        chatbot.style.display = "none";
        chatIcon.style.display = "block";
    });

    // Send a message when the Send button is clicked
    sendButton.addEventListener("click", function () {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            // Add user message to the chat
            addMessage("user", userMessage);

            // Simulate a reply from the chatbot
            setTimeout(function () {
                addMessage("bot", "Thank you for your message! How can I assist you?");
                scrollToBottom();
            }, 500);
        }
        userInput.value = ""; // Clear the input field
    });

    // Function to add a message to the chat
    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerText = message;
        chatMessages.appendChild(messageElement);
    }

    // Function to scroll the chat to the bottom
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Display a welcome message when the user enters the page
    addMessage("bot", "Welcome to our website! How can I help you?");
});
