const numberOfDays = 6;
const options = {weekday: "long"}; // Intl.DateTimeFormat vs. short, etc

// BEGIN
const today = new Date();

let todaystring = new Intl.DateTimeFormat("en-US", options).format(today);
// console.log(todaystring);
document.getElementById("today").innerHTML = `Today is <strong>${todaystring}</strong>`;

// loop for
/*
for (let i = 1; i <= numberOfDays; i++) {
    const nextday = new Date();
    // console.log(nextday);
    nextday.setDate(today.getDate() + i);
    // console.log(nextday);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    // console.log(nextdaystring);
    const item = document.createElement("li");
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);
}
*/
// while
let iterator = 1;
while (iterator <= numberOfDays) {
    const nextday = new Date();
    nextday.setDate(today.getDate() + iterator);
    let nextdaystring = new Intl.DateTimeFormat("en-US", options).format(nextday);
    const item = document.createElement("li");
    item.textContent = nextdaystring;
    document.querySelector("ul").appendChild(item);

    iterator++;
}

