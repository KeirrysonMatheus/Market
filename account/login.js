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
   window.location.href = "../market/index.html";
  } else {
    alert("Verifique os dados e tente novamente");
  }
});


// 1. No error handling for when localStorage is empty or "user" key doesn't exist
// 2. The h1 creation and assignment is incorrect - textContent assignment returns a string, not the element
// 3. Using innerHTML to set the h1 content is unsafe and overwrites all page content
// 4. No input validation before checking credentials
// 5. Storing passwords in localStorage is not secure
// 6. First 'user' variable is declared but never used
