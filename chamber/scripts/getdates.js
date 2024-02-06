document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("copyrightYear").textContent = currentYear;
    var lastModifiedDate = new Date(document.lastModified);
    var options = { 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        hour: "numeric", 
        minute: "numeric", 
        second: "numeric" 
    };
    var formattedLastModifiedDate = lastModifiedDate.toLocaleString(undefined, options);
    var lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = "Last Modification: " + formattedLastModifiedDate;
});
