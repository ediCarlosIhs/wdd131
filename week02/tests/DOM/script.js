const link = document.querySelector("a");

link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web development knowledge."
);

const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// sect.appendChild(linkPara);

// sect.removeChild(linkPara);
linkPara.remove();

// First way to add style to an element
// para.style.background = "black";
// para.style.color = "white";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

para.classList.add("highlight");