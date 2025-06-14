const btn = document.getElementById('btn')
const msgShow = document.getElementsByClassName('msgShow')[0]
const Ad = document.querySelectorAll('.Ad')
Ad.forEach(ad => {
          ad.style.color = 'red'
          ad.style.visibility = 'hidden'
      })

const verify = (item , ad , other , another ) => {
    item.style.border = '1px solid red'
    ad.style.visibility = 'visible'
    other.style.border = ''
    another.style.border = ''
}


btn.addEventListener('click', (event) => {
      event.preventDefault()

      const name = document.getElementById('name')
      const email = document.getElementById('email')
      const password = document.getElementById('password')
      const adName = document.getElementById('adName')
      const adEmail = document.getElementById('adMail')
      const adPassword = document.getElementById('adPassword')

      if(name.value && email.value && password.value) {
        const userName = name.value
        const userEmail = email.value
        const userPassword = password.value
          const user = {
            Name: userName, 
            Email: userEmail,
            Password: userPassword
      }
          msgShow.style.visibility = 'visible'
          msgShow.innerHTML = '<p>Usuário cadastrado com sucesso!</p><a href="login.html">Clique aqui para ir para tela de login</a>'
          localStorage.setItem('user', JSON.stringify(user))
          adName.style.visibility = 'hidden'
          adEmail.style.visibility = 'hidden'
          adPassword.style.visibility = 'hidden'
      } else if(!name.value) {

        verify(name , adName , email , password)
        
      } else if(!email.value) {

        verify(email , adEmail , name, password)

      } else if(!password.value) {

        verify(password , adPassword, name, email)
        
      }
})
