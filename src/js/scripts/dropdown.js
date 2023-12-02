document.addEventListener('DOMContentLoaded', () => {
  const isdropdownMult = (elem) => {
    if (elem.classList.contains('dropdown-mult')) {
      return true;
    }
    return false;
  };

  const dropdowns = document.querySelectorAll('.js-dropdown');

  if (dropdowns) {
    dropdowns.forEach((dropdown) => {
      const inner = dropdown.querySelector('.js-dropdown-inner');
      const title = dropdown.querySelector('.js-dropdown-value');
      const labels = dropdown.querySelectorAll('.js-dropdown-item label');

      inner.addEventListener('click', () => {
        if (dropdown.classList.contains('--active')) {
          dropdown.classList.remove('--active');
        } else {
          dropdown.classList.add('--active');
        }
      });

      for (let index = 0; index < labels.length; index += 1) {
        labels[index].addEventListener('click', (e) => {
          if (title) {
            title.textContent = e.target.textContent;
            dropdown.classList.add('--filled');
          }
          if (!isdropdownMult(dropdown)) {
            dropdown.classList.remove('--active');
          }
        });
      }

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.js-dropdown')) {
          dropdown.classList.remove('--active');
        }
      });
    });
  }
});
