const user = JSON.parse(localStorage.getItem("user"))
console.log(user);
const btn = document.getElementById("btn");

const checkUser = (name, email, password) => {
  
  if (user.Name === name && user.Email === email && user.Password === password) {
    return true;
  } else {
    return false;
  }
};

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = checkUser(name, email, password);
  if (user) {
   window.location.href = "../index.html";
  } else {
    alert("Verifique os dados e tente novamente");
  }
});
