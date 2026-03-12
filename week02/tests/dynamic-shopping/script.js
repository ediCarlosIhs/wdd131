const ul = document.querySelector("ul");
const input = document.querySelector('input');
const button = document.querySelector("button");

function addItem(event) {
    event.preventDefault();

    item = input.value;
    input.value = "";

    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = item;
    button.textContent = "Delete";

    ul.appendChild(li);

    button.addEventListener("click", () => {
        ul.removeChild(li);
    });
    
    input.focus();
}

function removeItem(event) {
    event.preventDefault();

    item = event.target.parentElement;

    item.remove();
    
}

button.addEventListener("click", addItem);