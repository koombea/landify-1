const burger = document.querySelector(".js-burger-button")
const header = document.querySelector(".js-header")

//function for burger button click
burger.addEventListener('click', () => {
  header.classList.toggle("header--active");
})

