let url = new URL(window.location);
let params  = url.searchParams;

// Remove this when you are done inspecting parameters in the console

document.querySelector('#first').textContent = params.get("fname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent = params.get("fruitSelect1");
document.querySelector('#fruit2').textContent = params.get("fruitSelect2");
document.querySelector('#fruit3').textContent = params.get("fruitSelect3");
document.querySelector('#totalCalories').textContent = params.get("totalCalories");
// document.querySelector('#special').textContent = params.get("special");
// document.querySelector('#yourgender').textContent = params.get("gender");

let specialInstructions = params.get("special");
if (specialInstructions && specialInstructions.trim() !== "") {
    document.querySelector('#special').textContent = specialInstructions;
} else {
    document.querySelector('#special').textContent = "No special instructions";
}
const urlParams = new URLSearchParams(window.location.search);
const totalCalories = urlParams.get('totalCalories');

// Display the total calories on the page
document.getElementById('totalCalories').textContent = totalCalories;

