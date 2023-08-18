const nameField= document.querySelectorAll('.nameField')
const signupBtn = document.getElementById("signupBtn");
const signBtn = document.getElementById("signinBtn");
const title = document.getElementById("title");

signBtn.addEventListener('click', () => {
  nameField.forEach(field=> field.style.maxHeight = '0')
  title.innerHTML = "Sign In"
  signBtn.classList.remove('disable')
  signupBtn.classList.add("disable");
})

signupBtn.addEventListener("click", () => {
  nameField.forEach((field) => (field.style.maxHeight = "60px"));
  title.innerHTML = "Sign Up";
  signBtn.classList.add("disable");
  signupBtn.classList.remove("disable");
});


function formHandle() {
  const name = document.myform.name.value
  const password = document.myform.password.value

  if (name === null || name === "") {
    alert('Name will not empty')
    return false;
  }

  else if (password.lenght < 6) {
    alert('Password must have atleast six character')
  }
  return false
}





