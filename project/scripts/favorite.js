const messageElement = document.querySelector('.message');
const messageAuthorElement = document.querySelector('.message__author');
const next = document.querySelector("#nextMessage");

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
}

// debugger;
showMessage();

next.addEventListener('click', showMessage);

