const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener("click", () => {

    if (input.value.trim() !== "") {

        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = "";
        input.focus();

    } else {
        alert("The input is empty");
        input.focus();
        return;
    }
});

function displayList(item) {

    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });

}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {

    // eformat the chapter parameter to get rid of the ❌ that is passed on the end of the chapter string when you called the deleteChapter function. Use string.slice() method to extract the last character.
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character ??????

    // Redefine the chaptersArray array using the array.filter method to return everything except the chapter to be removed.
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Call the setChapterList function to update the localStorage item.
    setChapterList();
}