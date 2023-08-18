const menu = document.querySelector(".humburger");
const nav = document.querySelector(".nav-menu");
const links= document.querySelectorAll('.nav-link')


menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  nav.classList.toggle('active')
})

links.forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('active')
    menu.classList.remove("active");
  }))

window.onscroll = () => {
    nav.classList.remove("active");
    menu.classList.remove("active");   
}