// ==================== Global Variables ====================
let currentUser = null; // "admin" or username of user
let currentRole = "";   // "admin" or "user"

// ==================== Page Navigation ====================
function showPage(pageId) {
  if (!currentUser && pageId !== 'login') {
    alert("Please login first!");
    return;
  }
  if (pageId === 'admin' && currentRole !== 'admin') {
    alert("Only Admin can access this page!");
    return;
  }

  // Hide all containers
  document.querySelectorAll('.container').forEach(section => {
    section.classList.remove('active');
  });

  // Show the requested page
  document.getElementById(pageId).classList.add('active');

  if (pageId === 'admin') loadDonors();
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

// ==================== Donor Management ====================
function loadDonors() {
  const donors = JSON.parse(localStorage.getItem('donors')) || [];
  const tbody = document.querySelector('#donorTable tbody');
  tbody.innerHTML = '';

  donors.forEach(d => {
    const row = `<tr>
      <td>${d.userType}</td>
      <td>${d.name}</td>
      <td>${d.age}</td>
      <td>${d.blood}</td>
      <td>${d.phone}</td>
      <td>${d.location}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}

function clearDonors() {
  if (confirm("Are you sure you want to clear all donor records?")) {
    localStorage.removeItem('donors');
    alert("All donor records have been cleared.");
    location.reload();
  }
}

// ==================== Blood Availability Check ====================
function checkBloodAvailability() {
  const bloodType = document.getElementById("searchBlood").value;
  const donors = JSON.parse(localStorage.getItem('donors')) || [];
  const available = donors.filter(d => d.blood === bloodType);

  const container = document.getElementById("availableDonors");
  if (available.length === 0) {
    container.innerHTML = "<p>No donors available for this blood type.</p>";
  } else {
    let html = "<h3>Available Donors:</h3><ul>";
    available.forEach(d => {
      html += `<li>${d.name} (${d.userType}) - ${d.location} - ${d.phone}</li>`;
    });
    html += "</ul>";
    container.innerHTML = html;
  }
}

// ==================== Registration Form ====================
function saveData(event) {
  event.preventDefault();

  const userType = document.getElementById("userType").value;
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const blood = document.getElementById("blood").value;
  const phone = document.getElementById("phone").value;
  const location = document.getElementById("location").value;

  const donor = { userType, name, age, blood, phone, location };

  let donors = JSON.parse(localStorage.getItem('donors')) || [];
  donors.push(donor);
  localStorage.setItem('donors', JSON.stringify(donors));

  alert("Registration successful!");
  event.target.reset();
}

// ==================== Smooth Scrolling for Anchor Links ====================
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
