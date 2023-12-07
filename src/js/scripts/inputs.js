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

      if (inpBlock) {
        inpBlock.addEventListener('click', () => inp.focus());

        inp.addEventListener('focus', () => input.classList.add('--focus'));
        inp.addEventListener('blur', () => input.classList.remove('--focus'));
      }
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

function inputFilesAction() {
  if (document.querySelectorAll('.input-file input[type=file]')) {
    const inputFiles = document.querySelectorAll('.input-file');

    inputFiles.forEach((inputFile) => {
      const input = inputFile.querySelector('input');
      const span = inputFile.querySelector('span');

      input.addEventListener('change', function () {
        const fileName = this.files[0].name;
        span.innerHTML = fileName;
      });
    });
  }
}

function changeVisibleInputPassword() {
  if (document.querySelector('.input--password')) {
    const inputs = document.querySelectorAll('.input--password');

    inputs.forEach((input) => {
      const btn = input.querySelector('button');
      const inp = input.querySelector('input');

      btn.addEventListener('click', (event) => {
        btn.classList.toggle('--active');

        if (event.currentTarget.classList.contains('--active')) {
          inp.setAttribute('type', 'text');
        } else {
          inp.setAttribute('type', 'password');
        }
      });
    });
  }
}

function setPhoneMask() {
  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  if (phoneInputs) {
    phoneInputs.forEach((phoneInput) => {
      const im = new Inputmask('+7 (999) 999-99-99');
      im.mask(phoneInput);
    });
  }
}

function setMailMask() {
  const mailnputs = document.querySelectorAll('input[type="email"]');

  if (mailnputs) {
    mailnputs.forEach((mailInput) => {
      Inputmask('email').mask(mailInput);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  inputsDef();
  textareaDef();
  inputFilesAction();
  changeVisibleInputPassword();
  setPhoneMask();
  setMailMask();
});
