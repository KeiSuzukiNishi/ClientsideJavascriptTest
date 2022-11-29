function emailValidation() {
    const form = document.getElementById('form');
    form.addEventListener('input', e => {
      //submitのときのやつ「e.preventDefault();」
      if(form.email.value !== form.email_confirm.value) {
        const element = document.createElement('p')
        element.innerText ="Eメールが一致しません"
        const error = document.getElementById('error')


        const contactLine = document.getElementsByClassName('contact_line')
        const tBody = (contactLine.parentElement);
        tBody.insertBefore(element, error); //ここがおかしいはずですが、何がだめか分かりません。


        element.classList.add("alert");
      } 
    });
  };
  
  window.onload = emailValidation;