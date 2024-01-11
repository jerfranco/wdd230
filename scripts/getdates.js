document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    var currentYear = new Date().getFullYear();
    // Display the current year in the copyrightYear span
    document.getElementById("copyrightYear").textContent = currentYear;

    // Get the last modified date of the document
    var lastModifiedDate = new Date(document.lastModified);
    
    // Format the last modified date to display only the time
    var options = { hour: "numeric", minute: "numeric", second: "numeric" };
    var formattedLastModifiedDate = lastModifiedDate.toLocaleTimeString(undefined, options);

    // Display the formatted last modified date in the lastModified span
    var lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = "Last Modification: " + formattedLastModifiedDate;
});
