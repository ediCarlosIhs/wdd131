let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter(name => name.startsWith("B"));

debugger;
const pFilter = document.querySelector("#filter");

// for (const name of namesB) {
//     pFilter.textContent += `${name} `
// }
pFilter.textContent = namesB.join(" ");

const pFilterJoin = document.querySelector("#filterJoin");

pFilterJoin.innerHTML = names.filter(name => name.charAt(0) === "B").join(" ");


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
