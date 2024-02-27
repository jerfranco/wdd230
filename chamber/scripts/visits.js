document.addEventListener("DOMContentLoaded", function() {
    var sidebarMessage = document.getElementById('sidebar-message');
    var lastVisit = localStorage.getItem('lastVisit');

    if (lastVisit) {
        var lastVisitDate = new Date(lastVisit);
        var currentDate = new Date();
        var daysSinceLastVisit = Math.floor((currentDate - lastVisitDate) / (1000 * 60 * 60 * 24));

        if (daysSinceLastVisit === 0) {
            sidebarMessage.textContent = "Welcome back! You visited us today.";
        } else {
            sidebarMessage.textContent = "Welcome back! It's been " + daysSinceLastVisit + " day(s) since your last visit.";
        }
    } else {
        sidebarMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem('lastVisit', new Date());
});
