const btn = document.getElementById('btn')
const msgShow = document.getElementsByClassName('msgShow')[0]
const Ad = document.querySelectorAll('.Ad')
Ad.forEach(ad => {
          ad.style.color = 'red'
          ad.style.visibility = 'hidden'
      })

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
          const user = [userName, userEmail, userPassword]
          msgShow.style.visibility = 'visible'
          localStorage.setItem('user', JSON.stringify(user))
          adName.style.visibility = 'hidden'
          adEmail.style.visibility = 'hidden'
          adPassword.style.visibility = 'hidden'
      } else if(!name.value) {
          name.style.border = '1px solid red'
          adName.style.visibility = 'visible'
          email.style.border = ''
          password.style.border = ''
      } else if(!email.value) {
          email.style.border = '1px solid red'
          adEmail.style.visibility = 'visible'
          name.style.border = ''
          password.style.border = ''
      } else if(!password.value) {
          password.style.border = '1px solid red'
          adPassword.style.visibility = 'visible'
          name.style.border = ''
          email.style.border = ''
      }
})