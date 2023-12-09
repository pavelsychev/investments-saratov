const header = document.querySelector('.header');

const scrollHeader = () => {
  window.onscroll = () => {
    if (window.pageYOffset > 6) {
      header.classList.remove('header--transparent');
    } else {
      header.classList.add('header--transparent');
    }
  };
};

const scrollHeaderLoad = () => {
  if (window.pageYOffset >= 6) {
    header.classList.remove('header--transparent');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('main')) {
    scrollHeaderLoad();
    scrollHeader();
  } else {
    header.classList.remove('header--transparent');
  }
});
