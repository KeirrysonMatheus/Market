const user = JSON.parse(localStorage.getItem("user"))
if(user){
    const data = document.getElementsByClassName('data')
    data[0].innerHTML = user.Name
    data[1].innerHTML = user.Email
}
