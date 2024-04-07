fetch('./data/fruits.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch data from the file');
        }
        return response.json();
    })
    .then(data => {
        // Populate each select dropdown with fruit options
        populateSelect('fruitSelect1', data);
        populateSelect('fruitSelect2', data);
        populateSelect('fruitSelect3', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Function to populate a select dropdown with fruit options
function populateSelect(selectId, fruits) {
    const selectElement = document.getElementById(selectId);

    // Iterate through the list of fruits and add them as options
    fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.name;
        option.textContent = fruit.name;
        selectElement.appendChild(option);
    });
}


// // Function to calculate total calories based on selected fruits
// function calculateTotalCalories() {
//     // Get selected fruits
//     const fruitSelect1 = document.getElementById('fruitSelect1').value;
//     const fruitSelect2 = document.getElementById('fruitSelect2').value;
//     const fruitSelect3 = document.getElementById('fruitSelect3').value;

//     // Find the selected fruits in the fruits data
//     const selectedFruits = fruitsData.filter(fruit => [fruitSelect1, fruitSelect2, fruitSelect3].includes(fruit.name));

//     // Calculate total calories
//     let totalCalories = 0;
//     selectedFruits.forEach(fruit => {
//         totalCalories += fruit.nutritions.calories;
//     });

//     return totalCalories;
// }

// // Event listener for the change event on select elements
// document.getElementById('fruitSelect1').addEventListener('change', updateTotalCalories);
// document.getElementById('fruitSelect2').addEventListener('change', updateTotalCalories);
// document.getElementById('fruitSelect3').addEventListener('change', updateTotalCalories);

// // Function to update the total calories when fruit selections change
// function updateTotalCalories() {
//     // Calculate total calories
//     const totalCalories = calculateTotalCalories();

//     // Display total calories on the page
//     document.getElementById('totalCalories').textContent = totalCalories;
// }

