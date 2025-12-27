
  document.querySelectorAll('.container').forEach(section => {
    section.classList.remove('active');
  });

  // Show the requested page
  document.getElementById('home').classList.add('active');

 document.getElementById('login').style.display = 'none';


