const roleRadios = document.querySelectorAll('input[name="role"]');
const weightField = document.querySelector('[name="weight"]');

roleRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    weightField.parentElement.style.display =
      (radio.value === 'donor' || radio.value === 'both')
      ? 'block'
      : 'none';
  });
});
