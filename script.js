let year = prompt("What year would you like to check?")

if (year % 4 === 0 && year % 100 !== 0) {
    console.log(`The year ${year} is a Leap year`);
} else if (year % 4 === 0 && year % 400) {
    console.log(`The year ${year} is a Leap year`);
} else {
    console.log(`The year ${year} is not a Leap year`);
}