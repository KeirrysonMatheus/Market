const user = localStorage.getItem("user").toString();
console.log(user);
const btn = document.getElementById("btn");

const checkUser = (name, email, password) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user[0] === name && user[1] === email && user[2] === password) {
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
    const h1 = document.createElement('h1').textContent = "Logado com sucesso";
    document.body.innerHTML = h1;
  } else {
    alert("Verifique os dados e tente novamente");
  }
});
