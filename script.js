console.log("Script Running");


const shift = (sprite, col) => (col <= 7 ? sprite.style.setProperty("grid-column", col) : null);

let pepperoni_step = 1;
let veggie_step = 1;
let bbq_step = 1;

let more = true;

// Query selectors for all buttons and scooters go here

const pepperoniButton = document.querySelector("#pepperoni-button");
const veggieButton = document.querySelector("#veggie-button");
const bbqButton = document.querySelector("#bbq-button");

const pepperoniScooter = document.querySelector("#pepperoni-scooter");
const veggieScooter = document.querySelector("#veggie-scooter");
const bbqScooter = document.querySelector("#bbq-scooter");

const win = document.querySelector("#winner")


// Write the function that moves the pepperoni scooter forward

function pepperoniFn() {
    if (more) {
        pepperoni_step += 1;
        shift(pepperoniScooter, pepperoni_step)
        wil(pepperoni_step, "pepperoni")
    }
}

function veggieFn() {
    if (more) {
        veggie_step += 1;
        shift(veggieScooter, veggie_step)
        wil(veggie_step, "Veggie")
    }
}

function bbqFn() {
    if (more) {
        bbq_step += 1;
        shift(bbqScooter, bbq_step)
        wil(bbq_step, "BBQ")
    }
}

function wil(step, w) {
    if (step >= 7) {
        win.innerHTML = "<p>" + w + " wins GG!</p>";
        more = false;
    }
}

pepperoniButton.addEventListener("click", pepperoniFn)
veggieButton.addEventListener("click", veggieFn)
bbqButton.addEventListener("click", bbqFn)

// Increase the pepperoni position
// Call the helper function to update the scooter position
// Call the winner check function



// Write the function that moves the veggie scooter forward



// Write the function that moves the bbq scooter forward



// Write a function that checks if a scooter reached column 7
// If so, display the winner message
// Disable all buttons when a winner is found



// Add event listeners for each button
// Each button should trigger its own movement function
