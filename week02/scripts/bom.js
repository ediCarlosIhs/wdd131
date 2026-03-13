const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        const span = document.createElement("span");
        
        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("aria-label", "Close");
        deleteButton.setAttribute("id", "close-button");
        
        let favoriteChapter = input.value;
        input.value = "";
        
        span.textContent = favoriteChapter;
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", () => {
            list.removeChild(li);
            // li.remove();
            input.focus();
        });
        
        li.append(span);
        li.append(deleteButton);

        list.append(li);

        input.focus();


    } else {
        alert("The input is empty");
        input.focus();
        return;
    }
});