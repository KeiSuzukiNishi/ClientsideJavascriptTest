function emailValidation() {
  const form = document.getElementById('form');
  const emailComfirmField = document.getElementById('email_confirm');
  const element = document.createElement('p');
  const message = document.createTextNode("Eメールが一致しません");
  const contentField = document.getElementById('content_field');
  element.appendChild(message);
  emailComfirmField.addEventListener('input', e => {
      if(form.email.value !== form.email_confirm.value) {
        contentField.parentNode.insertBefore(element, contentField);
        element.classList.add("alert");
        emailComfirmField.classList.add("alert_bg");
      } else {
        element.parentNode.removeChild(element);
        element.classList.remove("alert");
        emailComfirmField.classList.remove("alert_bg");
      }
    });
  };
  
  window.onload = emailValidation;

