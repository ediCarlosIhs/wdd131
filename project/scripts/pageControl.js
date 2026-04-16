const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {
    hamButton.classList.toggle('open');
    navigation.classList.toggle('open');
});