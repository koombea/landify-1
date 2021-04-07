const burger = document.querySelector(".js-burger-button")
const header = document.querySelector(".js-header")
const stickyHeader = document.querySelector(".js-sticky")

//function for burger button click
burger.addEventListener('click', () => {
  header.classList.toggle("header--active");
})

// function for header sticky

window.onscroll = function() {myFunction()};

const sticky = stickyHeader.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    stickyHeader.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


function headerResize() {

  if (screen.width >= 1024) {
    const headerActiveElements = document.getElementsByClassName('header--active');
    if (headerActiveElements.length > 0) {
      header.classList.remove("header--active");
    }
  }   
}

window.addEventListener('resize',headerResize);

//function for cmd k

// document.addEventListener('keypress', logKey);

// function logKey(e) {
//   console.log(` ${e.code}`);
// }

function detectspecialkeys(e){
  var evtobj=window.event? event : e
  if (evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey ||  evtobj.cmdKey)
      alert("you pressed one of the 'Alt', 'Ctrl', or 'Shift' keys")
}
document.onkeypress=detectspecialkeys