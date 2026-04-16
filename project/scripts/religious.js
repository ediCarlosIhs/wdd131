import { religiousMessages } from '../assets/messages/religiousMessages.js';

const STORAGE_KEY = 'viewedMessages';
const showImages = localStorage.getItem('imagesEnabled');

const messageElement = document.querySelector('.message');
const messageAuthorElement = document.querySelector('.message__author');
const next = document.querySelector("#nextMessage");
const favorite = document.querySelector("#favorite");
const section = document.querySelector(".messages-container");

// get messages
function getMessage() {

    // get the indice list of viewed messages
    let religiousViewedIndices = JSON.parse(localStorage.getItem('religiousViewedIndices')) || [];
    // debugger;

    // filter the unseen messages
    const availableMessages = religiousMessages.filter((_, index) => !religiousViewedIndices.includes(index));

    if (availableMessages.length === 0) {
        console.log("All messages were seen.");
        messageElement.textContent = "All Religious messages were seen. Click the link again to restart."
        
        religiousViewedIndices = [];
        localStorage.setItem('religiousViewedIndices', JSON.stringify(religiousViewedIndices));
        return null;
    }

    // get aleatory message
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];

    // get selected message indice
    const originalIndex = religiousMessages.indexOf(selectedMessage);
    religiousViewedIndices.push(originalIndex);
    localStorage.setItem('viewedMessages', JSON.stringify(religiousViewedIndices));

    return selectedMessage;
}

function getMessagesByMoment(messagesArray, storageKey) {

    // get already seem indices
    let viewedIndices = JSON.parse(localStorage.getItem(storageKey)) || [];

    // reset if all messages were seen
    if (viewedIndices.length >= messagesArray.length) {
        viewedIndices = [];
    }

    // get indice by the moment (destine)
    const now = Date.now();
    const seconds = Math.floor((now / 1000) % 60);
    let targetIndex = (seconds * 7 + now) % messagesArray.length;

    // linear Probing
    while (viewedIndices.includes(targetIndex)) {
        targetIndex = (targetIndex + 1) % messagesArray.length;
    }

    viewedIndices.push(targetIndex);
    localStorage.setItem(storageKey, JSON.stringify(viewedIndices));

    return messagesArray[targetIndex];
}

function applyRandomBackground() {
    
    const randomNumber = Math.floor(Math.random() * 12) + 1;

    const imagePath = `url('./images/background/image-${randomNumber}.webp')`;

    const fullBackground = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${imagePath}`;

    section.style.backgroundImage = fullBackground;
    section.classList.add('with-background');
}

if (showImages === 'true') {
    applyRandomBackground();
}

// update message in the screen
function updateMessage() {

    const messageObj = getMessagesByMoment(religiousMessages, STORAGE_KEY);

    if (messageObj) {
        messageElement.textContent = messageObj.message;
        messageAuthorElement.textContent = messageObj.author;
    }
}

// debugger;
updateMessage();

next.addEventListener('click', updateMessage);

favorite.addEventListener('click', () => {

    let favoriteMessages = JSON.parse(localStorage.getItem('favoriteMessages')) || [];

    let message = messageElement.textContent;
    let author = messageAuthorElement.textContent;

    const msgObj = {
        message: message,
        author: author
    }

    favoriteMessages.push(msgObj);

    localStorage.setItem('favoriteMessages', JSON.stringify(favoriteMessages));

});

