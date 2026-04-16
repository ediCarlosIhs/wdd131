import { generalMessages } from '../assets/messages/generalMessages.js';

const STORAGE_KEY = 'viewedMessages';

const showImages = localStorage.getItem('imagesEnabled');

const messageElement = document.querySelector('.message');
const messageAuthorElement = document.querySelector('.message__author');
const next = document.querySelector("#nextMessage");
const favorite = document.querySelector("#favorite");
const section = document.querySelector(".messages-container");


// section.style.backgroundImage = `url('./images/background/image-01.jpg')`;
// section.classList.add('with-background');

// get messages
function getMessage() {

    // get the indice list of viewed messages
    let viewedIndices = JSON.parse(localStorage.getItem('viewedMessages')) || [];
    // debugger;

    // filter the unseen messages
    const availableMessages = generalMessages.filter((_, index) => !viewedIndices.includes(index));

    if (availableMessages.length === 0) {
        console.log("All messages were seen.");
        messageElement.textContent = "All general messages were seen. Click the link again to restart."
        
        viewedIndices = [];
        localStorage.setItem('viewedMessages', JSON.stringify(viewedIndices));
        return null;
    }

    // get aleatory message
    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];

    // get selected message indice
    const originalIndex = generalMessages.indexOf(selectedMessage);
    viewedIndices.push(originalIndex);
    localStorage.setItem('viewedMessages', JSON.stringify(viewedIndices));

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

// update message in the screen
function updateMessage() {

    const messageObj = getMessagesByMoment(generalMessages, STORAGE_KEY);

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

