const burger = document.querySelector(".js-burger-button")
const header = document.querySelector(".js-header")
const stickyHeader = document.querySelector(".js-sticky")
let textEditable = document.querySelectorAll(".js-edit")
let saveButton = document.querySelector(".js-saveBtn")

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


//function for press ctrl k / cmd k :

function presskeys(e){
  var evtobj=window.event? event : e
  if (evtobj.altKey == 75 || evtobj.ctrlKey == 75  || evtobj.shiftKey == 75 ||  evtobj.metaKey == 75 ) {
    contentEdit(true);
    toggleBtn(true);
  }
}

document.onkeypress=presskeys

// function for save toggle button:

function toggleBtn(show) {
  if (saveButton.style.display === "show") {
    saveButton.style.display = "block";
  } else {
    saveButton.style.display = "none";
  }
}


// function for selects the text to edit:

function contentEdit() {
  document.querySelectorAll('.js-edit').contentEditable = 'true'; 
}


