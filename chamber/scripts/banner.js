document.addEventListener("DOMContentLoaded", function() {
  const banner = document.getElementById("banner");
  const closeBtn = document.getElementById("closeBanner");

  // Function to check if today is Monday, Wednesday, or Friday
  function isWeekday() {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    return today === 1 || today === 3 || today === 5; // Monday = 1, Wednesday = 3, Friday = 5
  }

  // Display the banner if it's a weekday
  if (isWeekday()) {
    banner.style.display = "block";
  }

  // Event listener to close the banner
  closeBtn.addEventListener("click", function() {
    banner.style.display = "none";
  });
});
