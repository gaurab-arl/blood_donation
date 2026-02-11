function showPage(page = 'home') {
  const loginPage = document.querySelector('#login');
  const homePage = document.querySelector('.home-page-switching');
  const registerPage = document.querySelector('#register-page');

  // Hide all sections first if they exist
  if (loginPage) loginPage.style.display = 'none';
  if (homePage) homePage.style.display = 'none';
  if (registerPage) registerPage.style.display = 'none';

  // Show the requested section
  if (page === 'login' && loginPage) {
    loginPage.style.display = 'block';
  } else if (page === 'home' && homePage) {
    homePage.style.display = 'block';
  } else if (page === 'register' && registerPage) {
    registerPage.style.display = 'block';
  }
}

if (document.querySelector('.home-page-switching')) {
  showPage('login');
}
