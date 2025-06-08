const user = JSON.parse(localStorage.getItem("user"))  
const accountName = document.getElementById('accountName')
if(user){
accountName.innerHTML = `<span id="accountName">${user.Name}</span>`
}
