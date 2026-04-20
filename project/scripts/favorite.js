const messageElement = document.querySelector('.message');
const messageAuthorElement = document.querySelector('.message__author');
const next = document.querySelector("#nextMessage");
const section = document.querySelector(".messages-container");

const showImages = localStorage.getItem('imagesEnabled');

// get messages
function getMessage() {

    // get the indice list of viewed messages
    let favoriteMessages = JSON.parse(localStorage.getItem('favoriteMessages')) || [];
    // debugger;

    if (favoriteMessages.length === 0) {

        messageElement.textContent = "You have not favorited any message yet."

    }

    // get aleatory message
    const randomIndex = Math.floor(Math.random() * favoriteMessages.length);
    const selectedMessage = favoriteMessages[randomIndex];

    return selectedMessage;
}


// update message in the screen
function showMessage() {

    const messageObj = getMessage();

    if (messageObj) {
        messageElement.textContent = messageObj.message;
        messageAuthorElement.textContent = messageObj.author;
    }

    if (localStorage.getItem('imagesEnabled') === 'true') {
        applyRandomBackground();
    }
}

function applyRandomBackground() {
    
    const randomNumber = Math.floor(Math.random() * 12) + 1;

    const imagePath = `url('./images/background/image-${randomNumber}.webp')`;

    const fullBackground = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${imagePath}`;

    section.style.backgroundImage = fullBackground;
    section.classList.add('with-background');
}

// debugger;
showMessage();

next.addEventListener('click', showMessage);

