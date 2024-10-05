let email = localStorage.getItem('email')

document.addEventListener('DOMContentLoaded', () => {
  if(email){
    let message = document.querySelector('.message')
    let text = document.createElement('p')
    text.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription.`
    message.appendChild(text)
  }else{
    alert('[ERROR] Nao foi encontrado nenhum email voltando para a pagina inicial!')
    window.location.href = 'index.html'
  }
})


function dissmiss(){
  if(confirm('[ATENÇÃO] Tem a certeza que deseja volta?')){
    window.location.href = 'index.html'
    localStorage.removeItem('email')
  }
}

