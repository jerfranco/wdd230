function getLastModifiedDate() {
    // Get the last modified date of the document
    const lastModified = new Date(document.lastModified);

    // Format the last modified date and time as desired (e.g., January 1, 2022, 12:00:00 PM)
    const formattedDateTime = lastModified.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true // Display in 12-hour format
    });

    return formattedDateTime;
  }

  // Update the content of the span element with the last modified date and time
  document.getElementById('lastModified').textContent = 'Last modified: ' + getLastModifiedDate();