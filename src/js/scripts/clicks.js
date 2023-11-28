function clickFullText() {
  if (document.querySelector('.js-dropdown-list')) {
    const dropdownLists = document.querySelectorAll('.js-dropdown-list');

    dropdownLists.forEach((dropdownList) => {
      const dropdownTitle = dropdownList.querySelector('.js-dropdown-title');
      const dropdownContent = dropdownList.querySelector('.js-dropdown-content');

      dropdownTitle.addEventListener('click', () => {
        const contentHeight = dropdownContent.scrollHeight;

        if (dropdownList.classList.contains('active')) {
          dropdownContent.style.height = '0px';
        } else {
          dropdownContent.style.height = `${contentHeight}px`;
        }

        dropdownList.classList.toggle('active');
      });
    });
  }
}

clickFullText();
