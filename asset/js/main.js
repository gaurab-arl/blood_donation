// ==================== Global Variables ====================
let currentUser = null; // "admin" or username of user
let currentRole = "";   // "admin" or "user"

// ==================== Page Navigation ====================
function showPage(pageId) {
  if (!currentUser && pageId !== 'login') {
    alert("Please login first!");
    return;
  }

  // Hide all containers
  document.querySelectorAll('.container').forEach(section => {
    section.classList.remove('active');
  });

  // Show the requested page
  document.getElementById(pageId).classList.add('active');

}

// ==================== Navigation Menu ====================
function updateNavMenu() {
  const adminLink = document.querySelector('nav a[onclick="showPage(\'admin\')"]');
  if (currentRole === "admin") {
    adminLink.style.display = "block";
  } else {
    adminLink.style.display = "none";
  }
}

// ==================== Login Functionality ====================
function login(event) {
  event.preventDefault();

  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  // Admin check
  if (username === "admin" && password === "1234") {
    currentUser = "admin";
    currentRole = "admin";
    alert("Admin Login Successful!");
  } else if (username.trim() !== "") {
    currentUser = username;
    currentRole = "user";
    alert(`User login successful! Welcome, ${username}`);
  } else {
    alert("Please enter a valid username.");
    return;
  }

  // Hide the login page
  document.getElementById('login').style.display = 'none';

  showPage("home");
  updateNavMenu();
}


