let url = new URL(window.location);
let params  = url.searchParams;

// Remove this when you are done inspecting parameters in the console

document.querySelector('#first').textContent = params.get("fname");
document.querySelector('#email').textContent = params.get("email");
document.querySelector('#phone').textContent = params.get("phone");
document.querySelector('#fruit1').textContent = params.get("fruitSelect1");
document.querySelector('#fruit2').textContent = params.get("fruitSelect2");
document.querySelector('#fruit3').textContent = params.get("fruitSelect3");


// document.querySelector('#special').textContent = params.get("special");
// document.querySelector('#yourgender').textContent = params.get("gender");

let specialInstructions = params.get("special");
if (specialInstructions && specialInstructions.trim() !== "") {
    document.querySelector('#special').textContent = specialInstructions;
} else {
    document.querySelector('#special').textContent = "No special instructions";
}
const urlParams = new URLSearchParams(window.location.search);


const selectedFruit = params.get("fruitSelect1");
// fetch('./data/fruits.json')
//   .then(response => response.json())
//   .then(data => {
//     // Retrieve the calorie value based on the selected fruit
//     const calorieValue = data[selectedFruit];

//     // Display the calorie value in the HTML element
//     document.querySelector('#fruit1a').textContent = `${selectedFruit}: ${calorieValue} calories`;
//   })
//   .catch(error => console.error('Error loading JSON file:', error));

// fetch('./data/fruits.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(fruitsData => {
//         const selectedFruitName = params.get("fruitSelect1");
//         const selectedFruit = fruitsData.find(fruit => fruit.name === selectedFruitName);

//         if (selectedFruit) {
//             document.querySelector('#fruit1a').textContent = selectedFruit.name;
//             document.querySelector('#fruit1Calories').textContent = selectedFruit.nutritions.calories;
//         } else {
//             document.querySelector('#fruit1a').textContent = "Unknown fruit";
//             document.querySelector('#fruit1Calories').textContent = "Unknown calories";
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching fruits data:', error);
//     });

// fetch('./data/fruits.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(fruitsData => {
//         const selectedFruitNames = [params.get("fruitSelect1"), params.get("fruitSelect2"), params.get("fruitSelect3")];

//         selectedFruitNames.forEach((selectedFruitName, index) => {
//             const selectedFruit = fruitsData.find(fruit => fruit.name === selectedFruitName);
//             const fruitElementId = `fruit${index + 1}a`;
//             const caloriesElementId = `fruit${index + 1}Calories`;

//             if (selectedFruit) {
//                 document.querySelector(`#${fruitElementId}`).textContent = selectedFruit.name;
//                 document.querySelector(`#${caloriesElementId}`).textContent = selectedFruit.nutritions.calories;
//             } else {
//                 document.querySelector(`#${fruitElementId}`).textContent = "Unknown fruit";
//                 document.querySelector(`#${caloriesElementId}`).textContent = "Unknown calories";
//             }
//         });
//     })
//     .catch(error => {
//         console.error('Error fetching fruits data:', error);
//     });

// JavaScript
// fetch('./data/fruits.json')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return response.json();
//     })
//     .then(fruitsData => {
//         const selectedFruitNames = [params.get("fruitSelect1"), params.get("fruitSelect2"), params.get("fruitSelect3")];
//         let totalCalories = 0;

//         selectedFruitNames.forEach((selectedFruitName, index) => {
//             const selectedFruit = fruitsData.find(fruit => fruit.name === selectedFruitName);
//             const fruitElementId = `fruit${index + 1}a`;
//             const caloriesElementId = `fruit${index + 1}Calories`;

//             if (selectedFruit) {
//                 document.querySelector(`#${fruitElementId}`).textContent = selectedFruit.name;
//                 document.querySelector(`#${caloriesElementId}`).textContent = selectedFruit.nutritions.calories;
//                 totalCalories += selectedFruit.nutritions.calories;
//             } else {
//                 document.querySelector(`#${fruitElementId}`).textContent = "Unknown fruit";
//                 document.querySelector(`#${caloriesElementId}`).textContent = "Unknown calories";
//             }
//         });

//         // Display total calories
//         document.querySelector('#totalCalories').textContent = totalCalories;
//     })
//     .catch(error => {
//         console.error('Error fetching fruits data:', error);
//     });

// JavaScript
fetch('./data/fruits.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(fruitsData => {
        const selectedFruitNames = [params.get("fruitSelect1"), params.get("fruitSelect2"), params.get("fruitSelect3")];
        let totalCalories = 0;
        let totalCarbohydrates = 0;
        let totalProtein = 0;
        let totalFat = 0;
        let totalSugar = 0;

        selectedFruitNames.forEach(selectedFruitName => {
            const selectedFruit = fruitsData.find(fruit => fruit.name === selectedFruitName);

            if (selectedFruit) {
                totalCalories += selectedFruit.nutritions.calories;
                totalCarbohydrates += selectedFruit.nutritions.carbohydrates;
                totalProtein += selectedFruit.nutritions.protein;
                totalFat += selectedFruit.nutritions.fat;
                totalSugar += selectedFruit.nutritions.sugar;
            }
        });

        // Display total calories
        document.querySelector('#totalCalories').textContent = totalCalories.toFixed(1);
        document.querySelector('#totalCarbohydrates').textContent = totalCarbohydrates.toFixed(1);
        document.querySelector('#totalProtein').textContent = totalProtein.toFixed(1);
        document.querySelector('#totalFat').textContent = totalFat.toFixed(1);
        document.querySelector('#totalSugar').textContent = totalSugar.toFixed(1);
    })
    .catch(error => {
        console.error('Error fetching fruits data:', error);
    });
// JavaScript
const currentDate = new Date();

// Get the month, day, and year
const month = currentDate.toLocaleString('default', { month: 'long' });
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Display the current date
document.querySelector('#currentDate').textContent = `${month} ${day}, ${year}`;
