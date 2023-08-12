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

// document.addEventListener("DOMContentLoaded", function() {
//     const addRatingButton = document.getElementById("add-rating-button");
//     const rateCardContainer = document.querySelector(".rate-card");
    
//     addRatingButton.addEventListener("click", function() {
//         const newRateCard = document.createElement("div");
//         newRateCard.classList.add("rate-card");

//         const newPersonInfo = document.createElement("div");
//         newPersonInfo.classList.add("person-info");

//         const newPersonImage = document.createElement("img");
//         newPersonImage.src = "person2.jpg"; // Replace with the URL of the new person's image
//         newPersonImage.alt = "New Person's Image";
//         newPersonImage.classList.add("person-image");

//         const newPersonName = document.createElement("h3");
//         newPersonName.classList.add("person-name");
//         newPersonName.textContent = "Jane Smith"; // Replace with the name of the new person

//         const newPersonMessage = document.createElement("p");
//         newPersonMessage.classList.add("person-message");
//         newPersonMessage.textContent = "A new message goes here..."; // Replace with the new message

//         const newRating = document.createElement("div");
//         newRating.classList.add("rating");

//         for (let i = 0; i < 5; i++) {
//             const starIcon = document.createElement("i");
//             starIcon.classList.add("fas", "fa-star", "star");
//             newRating.appendChild(starIcon);
//         }

//         newPersonInfo.appendChild(newPersonImage);
//         newPersonInfo.appendChild(newPersonName);
//         newPersonInfo.appendChild(newPersonMessage);
//         newPersonInfo.appendChild(newRating);
//         newRateCard.appendChild(newPersonInfo);
//         rateCardContainer.appendChild(newRateCard);
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const ratingCarousel = document.querySelector(".rating-carousel");

    // Dummy ratings data
    const dummyRatings = [
        { name: "John Doe", message: "Lorem ipsum dolor sit amet.", rating: 4 },
        { name: "Jane Smith", message: "Consectetur adipiscing elit.", rating: 5 },
        { name: "Alice Johnson", message: "Vivamus vulputate aliquam eros ut tristique.", rating: 3 },
        // Add more dummy ratings as needed
    ];

    // Populate the rating carousel with dummy ratings
    for (const rating of dummyRatings) {
        const ratingCard = createRatingCard(rating);
        ratingCarousel.appendChild(ratingCard);
    }

    const ratingCards = document.querySelectorAll(".rating-card");
    let currentSlide = 0;

    // Function to create a rating card based on the rating data
    function createRatingCard(rating) {
        const ratingCard = document.createElement("div");
        ratingCard.classList.add("rating-card");
        ratingCard.innerHTML = `
            <img src="person.png" alt="Person's Image" class="person-image">
            <h3 class="person-name">${rating.name}</h3>
            <p class="person-message">${rating.message}</p>
            <div class="rating">
                ${getStarIcons(rating.rating)}
            </div>
        `;
        return ratingCard;
    }

    // Helper function to generate star icons based on rating
    function getStarIcons(rating) {
        let stars = "";
        for (let i = 1; i <= 5; i++) {
            const starClass = i <= rating ? "fas fa-star star" : "far fa-star star";
            stars += `<i class="${starClass}"></i>`;
        }
        return stars;
    }

    // Function to show the next slide
    function showNextSlide() {
        ratingCards[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % ratingCards.length;
        ratingCards[currentSlide].classList.add("active");
    }

    // Automatically show the next slide every 5 seconds
    setInterval(showNextSlide, 5000);

    // Show the first slide initially
    ratingCards[currentSlide].classList.add("active");
});

