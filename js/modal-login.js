
  // Get the modal element
  var modal = document.getElementById("loginModal");

  // Get the close button
  var closeBtn = document.getElementsByClassName("close")[0];

  // Get the login form element
  var loginForm = document.getElementById("loginForm");

  // Add event listener to open the modal when the video link is clicked
  document.querySelector(".popup-vimeo").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Show the modal
    modal.style.display = "block";
  });

  // Add event listener to close the modal when the close button is clicked
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Add event listener to close the modal when the user clicks outside the modal
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  // Add event listener to handle the login form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Perform the login authentication here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example authentication logic (replace with your own)
    if (username === "admin" && password === "password") {
      // Login successful, play the video
      modal.style.display = "none"; // Hide the modal
      var videoLink = document.querySelector(".popup-vimeo");
      var videoUrl = videoLink.getAttribute("href");
      window.location.href = videoUrl; // Redirect to the video URL
    } else {
      // Login failed, show the modal again
      alert("Invalid username or password. Please try again.");
    }
  });
