const save = document.querySelector("#saveConfiguration");
const remove = document.querySelector("#removeConfiguration");
const birthdayField = document.querySelector("#birthday");
const enableImagesField = document.querySelector("#enableImages");

save.addEventListener('click', (event) => {

    const dateValue = birthdayField.value;
    const isImagesEnabled = enableImagesField.checked;

    if (dateValue) {
        localStorage.setItem('birthday', dateValue);
    }


    localStorage.setItem('imagesEnabled', isImagesEnabled);

    save.classList.add('hidden');
    remove.classList.remove('hidden');


});

window.addEventListener('load', () => {
    // debugger;
    const savedDate = localStorage.getItem('birthday');
    const savedImagesStatus = localStorage.getItem('imagesEnabled');

    if (savedDate) {
        birthdayField.value = savedDate;
    }

    if (savedImagesStatus !== null) {
        enableImagesField.checked = (savedImagesStatus === 'true');
    }

    if (savedDate || savedImagesStatus !== null) {
        save.classList.add('hidden');
        remove.classList.remove('hidden');
    } else {
        save.classList.remove('hidden');
        remove.classList.add('hidden');
    }
})

remove.addEventListener('click', event => {
    // debugger;
    localStorage.removeItem('birthday');
    localStorage.removeItem('imagesEnabled');

    birthdayField.value = '';
    enableImagesField.checked = false;

    save.classList.remove('hidden');
    remove.classList.add('hidden');
})