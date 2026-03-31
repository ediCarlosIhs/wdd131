const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const templesList = document.querySelector("#templesList");
const h1 = document.querySelector("h1");

const homeLink = document.querySelector("#allTemples");
const oldLink = document.querySelector("#oldTemples");
const newLink = document.querySelector("#newTemples");
const largeLink = document.querySelector("#largeTemples");
const smallLink = document.querySelector("#smallTemples");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "images/temples/temple-01.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "images/temples/temple-02.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "images/temples/temple-03.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "images/temples/temple-04.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "images/temples/temple-05.jpg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "images/temples/temple-06.jpg"
  },
  {
    templeName: "Mexico City",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "images/temples/temple-07.jpg"
  },
  {
    templeName: "Belém Brazil",
    location: "Belém-PA, Brazil",
    dedicated: "2022, November, 20",
    area: 28675,
    imageUrl:
    "images/temples/temple-08.webp"
  },
  {
    templeName: "Brasília Brazil",
    location: "Brasilia-DF, Brazil",
    dedicated: "2020, September, 26",
    area: 25000,
    imageUrl:
    "images/temples/temple-09.webp"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas-SP, Brazil",
    dedicated: "1998, May, 1",
    area: 48100,
    imageUrl:
    "images/temples/temple-10.webp"
  },
  // Add more temple objects here...
];

hamButton.addEventListener("click", () => {

    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

function createCard(filteredTemples) {
  templesList.innerHTML = "";

  filteredTemples.forEach(temple => {


  
    const card = document.createElement("div");
    card.classList.add("temple-card");
  
    const h2 = document.createElement("h2");
    h2.textContent = temple.templeName;
  
    const templeInformations = document.createElement("div");
    templeInformations.classList.add("temple-informations");

    let location = temple.location.split(",");
    location = `${location.at(0)}, ${location.at(-1)}`;

    let dedication = temple.dedicated.split(",");
    dedication = `${dedication.at(1)}, ${dedication.at(0)}`

    templeInformations.innerHTML = `<ul>
      <li>
          <span class="data-label">Location: </span>
          <span class="data-information">${location}</span>
      </li>
      <li>
          <span class="data-label">Dedicated: </span>
          <span class="data-information">${dedication}</span>
      </li>
      <li>
          <span class="data-label">Size: </span>
          <span class="data-information">${temple.area} sq fit</span>
      </li>
    </ul>`
  
    const picture = document.createElement("picture");
    picture.innerHTML = `<img src=${temple.imageUrl} alt=An image of ${temple.templeName} loading="lazy" width="400" height="250">`
  
    card.appendChild(h2);
  
    card.appendChild(templeInformations);
  
    card.appendChild(picture);
  
    templesList.appendChild(card);
  });

}

createCard(temples);

function removeActiveClass() {
  const activeElement = document.querySelector(".active");
  if (activeElement) {
    activeElement.classList.remove("active");
  }
}

homeLink.addEventListener("click", (event) => {

  h1.textContent = "Home";

  hamButton.classList.remove("open");
  navigation.classList.remove("open");

  removeActiveClass()
  event.target.classList.add("active");

  createCard(temples);
});

oldLink.addEventListener("click", (event) => {

  h1.textContent = "Old Temples";

  hamButton.classList.remove("open");
  navigation.classList.remove("open");

  removeActiveClass()
  event.target.classList.add("active");

  const oldTemples = temples.filter(temple => {
    let templeDedication = parseInt(temple.dedicated.split(",")[0]);
    return templeDedication < 1900;
  });
  // debugger;
  createCard(oldTemples);
});

newLink.addEventListener("click", (event) => {

  h1.textContent = "New Temples";

  hamButton.classList.remove("open");
  navigation.classList.remove("open");

  removeActiveClass()
  event.target.classList.add("active");

  const newTemples = temples.filter(temple => {
    let templeDedication = parseInt(temple.dedicated.split(",")[0]);
    return templeDedication > 2000;
  });
  // debugger;
  createCard(newTemples);
});

largeLink.addEventListener("click", (event) => {

  h1.textContent = "Large Temples";

  hamButton.classList.remove("open");
  navigation.classList.remove("open");

  removeActiveClass()
  event.target.classList.add("active");

  const largeTemples = temples.filter(temple => {
    let area = temple.area;
    return area > 90000;
  });
  // debugger;
  createCard(largeTemples);
});

smallLink.addEventListener("click", (event) => {

  h1.textContent = "Small Temples";

  hamButton.classList.remove("open");
  navigation.classList.remove("open");

  removeActiveClass()
  event.target.classList.add("active");

  const smallTemples = temples.filter(temple => {
    let area = temple.area;
    return area < 10000;
  });
  // debugger;
  createCard(smallTemples);
});