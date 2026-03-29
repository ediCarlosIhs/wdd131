let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name => name.charAt(0) === "B");

const pFilter = document.querySelector("#filter");

for (const name of namesB) {
    pFilter.textContent += `${name} `
}

const pMap = document.querySelector("#map");

const namesLength = names.map(name => name.length);
// console.log(namesLength);

for (const length of namesLength) {
    pMap.textContent += `${length} `;
}

const pReduce = document.querySelector("#reduce");

const averageStringLength = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(averageStringLength);

pReduce.textContent = averageStringLength;
