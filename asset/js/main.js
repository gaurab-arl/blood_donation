function showPage(page) {
  const loginPage = document.getElementById('login');
  const homePage = document.getElementById('home');
  
  if (page === 'login') {
    // Show login, hide home
    loginPage.style.display = 'block';
    homePage.style.display = 'none';
  } else {
    // For any other page (like 'home'), show home and hide login
    loginPage.style.display = 'none';
    homePage.style.display = 'block';
  }
}

let user = "home";
showPage(user);


