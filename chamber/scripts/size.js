// Function to update heading based on screen size
function updateHeading() {
    var headingElement = document.getElementById('heading');
    var screenWidth = window.innerWidth;

    if (screenWidth >= 960) {
        headingElement.textContent = "Large";
    } else if (screenWidth >= 400) {
        headingElement.textContent = "Medium";
    } else {
        headingElement.textContent = "Small";
    }
}

// Call the function initially and add an event listener for window resize
updateHeading();
window.addEventListener('resize', updateHeading);
