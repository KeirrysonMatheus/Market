const user = JSON.parse(localStorage.getItem("user"))  
const accountName = document.getElementById('accountName')
if(user){
accountName.textContent = user.Name
}
