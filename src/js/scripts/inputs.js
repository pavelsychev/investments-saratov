function inputsDef() {
  if (document.querySelector('.input')) {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input) => {
      const inp = input.querySelector('input');
      if (inp.getAttribute('disabled') !== null) {
        input.classList.add('--disabled');
      } else {
        input.classList.remove('-disabled');
      }
    });

    inputs.forEach((input) => {
      const inp = input.querySelector('input');
      const inpBlock = input.querySelector('.input__input');

      inpBlock.addEventListener('click', () => inp.focus());

      inp.addEventListener('focus', () => input.classList.add('--focus'));
      inp.addEventListener('blur', () => input.classList.remove('--focus'));

      inp.addEventListener('input', () => {
        if (inp.value.length >= 1) {
          inp.classList.remove('--filled');
        }
      });
    });
  }
}

function textareaDef() {
  if (document.querySelector('.textarea')) {
    const textareas = document.querySelectorAll('.textarea');

    textareas.forEach((textarea) => {
      const textar = textarea.querySelector('textarea');
      if (textar.getAttribute('disabled') !== null) {
        textarea.classList.add('--disabled');
      } else {
        textarea.classList.remove('-disabled');
      }
    });

    textareas.forEach((textarea) => {
      const textar = textarea.querySelector('textarea');
      const inpBlock = textarea.querySelector('.textarea__textarea');

      inpBlock.addEventListener('click', () => textar.focus());

      textar.addEventListener('focus', () => textarea.classList.add('--focus'));
      textar.addEventListener('blur', () => textarea.classList.remove('--focus'));
    });
  }
}

inputsDef();
textareaDef();