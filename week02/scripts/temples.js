const year = document.querySelector("#currentyear");
const today = new Date();

const lastModified = document.querySelector("#lastModified");

year.textContent = `${today.getFullYear()}`

// code to get date in brazilian format
const lastModifiedString = document.lastModified;

const lastModifiedDate = new Date(lastModifiedString);

const formattedDate = lastModifiedDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

lastModified.textContent = `Last Modification (day/month/year): ${formattedDate}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});