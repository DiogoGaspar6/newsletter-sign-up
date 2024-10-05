let error = document.createElement('div')
error.classList.add('error')


function subscribe(){
  let email = document.getElementById('email').value
  let label = document.querySelector('.label')
  let input = document.querySelector('.input')
  if (email == '' || !email.includes('@')) {
    error.innerHTML = `Valid email required`
    input.classList.add('input-error')
    label.appendChild(error)
  }else{
    input.classList.remove('input-error')
    if(label.contains(error)){
      label.removeChild(error)
    }
    if(confirm(`[CONFIRMAÇÃO] Tem a certeza que quer subscrever com este email: ${email}`)){
      window.location.href = 'message.html'
      localStorage.setItem('email', email)
    }
  }
  console.log(email);
}