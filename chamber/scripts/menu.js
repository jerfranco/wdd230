function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var navigation = document.querySelector('.navigation');

    if (navigation.style.display === 'none' || navigation.style.display === '') {
        navigation.style.display = 'block';
        menuToggle.innerHTML = '✕'; // Change the content to "x"
        menuToggle.style.color = 'red';
    } else {
        navigation.style.display = 'none';
        menuToggle.innerHTML = '☰'; // Change the content back to the hamburger icon
        menuToggle.style.color = 'black';
    }
}

window.addEventListener('resize', function () {
    var navigation = document.querySelector('.navigation');
    var menuToggle = document.querySelector('.menu-toggle');

    if (window.innerWidth > 518) {
        navigation.style.display = 'block';
        menuToggle.innerHTML = '☰';
        menuToggle.style.color = 'black';
    } else {
        navigation.style.display = 'none';
        menuToggle.innerHTML = '☰';
        menuToggle.style.color = 'black';
    }
});