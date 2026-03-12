const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

const li = document.createElement("li");
const span = document.createElement("span");

const deleteButton = document.createElement("button");
deleteButton.setAttribute("aria-label", "Close");
deleteButton.setAttribute("id", "close-button");

let favoriteChapter = input.value;
input.value = "";

span.textContent = favoriteChapter;
deleteButton.textContent = "❌";

li.append(span);
li.append(deleteButton);

list.append(li);