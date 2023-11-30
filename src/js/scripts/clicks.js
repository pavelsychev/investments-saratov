function clickFullText() {
  if (document.querySelector('.js-dropdown-list')) {
    const dropdownLists = document.querySelectorAll('.js-dropdown-list');

    dropdownLists.forEach((dropdownList) => {
      const dropdownTitle = dropdownList.querySelector('.js-dropdown-title');
      const dropdownContent = dropdownList.querySelector('.js-dropdown-content');

      if (
        (dropdownList.classList.contains('footer__list') && window.innerWidth < 768) ||
        !dropdownList.classList.contains('footer__list')
      ) {
        dropdownTitle.addEventListener('click', () => {
          const contentHeight = dropdownContent.scrollHeight;

          if (dropdownList.classList.contains('active')) {
            dropdownContent.style.height = '0px';
          } else {
            dropdownContent.style.height = `${contentHeight}px`;
          }

          dropdownList.classList.toggle('active');
        });
      }
    });
  }
}

function addActiveFirstStepsOnLoad() {
  const dropdownLists = document.querySelectorAll('.js-dropdown-list');

  let isFind = false;
  dropdownLists.forEach((dropdownList) => {
    if (dropdownList.classList.contains('steps-investor__item') && !isFind) {
      const dropdownContent = dropdownList.querySelector('.js-dropdown-content');
      const contentHeight = dropdownContent.scrollHeight;
      dropdownContent.style.height = `${contentHeight}px`;
      dropdownList.classList.add('active');
      isFind = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addActiveFirstStepsOnLoad();
  clickFullText();
});
