
// Close button functionality
const closeButton = document.querySelector('.close-button');
const videoContainer = document.querySelector('.video-container');
const videoIframe = videoContainer.querySelector('iframe');
const playButton = document.querySelector('.play-button');


closeButton.addEventListener('click', () => {
  const loginModal = document.getElementById('login-modal');
  loginModal.style.display = 'none';
  // Stop the video by removing the iframe src
  videoIframe.src = '';
  videoContainer.style.display = 'none';
  playButton.style.display = 'block';
});


// revised code on 2023-10-26
  function showLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.style.display = 'block';
  }
  
  function authenticate(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Add your authentication logic here
    const isAuthenticated = authenticateUser(username, password);
    
    if (isAuthenticated) {
      showVideo();
    } else {
      alert('Invalid username or password');
      //console.log("Invalid username or password")
    }
  }
  
  

  function showVideo() {
    const loginModal = document.getElementById('login-modal');
    const videoContainer = document.querySelector('.video-container');    

    playButton.style.display = 'none';
    loginModal.style.display = 'none';
    videoContainer.style.display = 'block';

    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
  }
  

  function closeLoginModal() {
    const loginModal = document.getElementById('login-modal');
    loginModal.style.display = 'none';
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
  }

  
  function authenticateUser(username, password) {
    // Add your authentication logic here
    // Example: check against a hardcoded username and password
    const validUsername = 'admin';
    const validPassword = 'password';
  
    return username === validUsername && password === validPassword;
  }

  
