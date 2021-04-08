const burger = document.querySelector(".js-burger-button")
const header = document.querySelector(".js-header")
const stickyHeader = document.querySelector(".js-sticky")
let textEditable = document.querySelectorAll(".js-edit")
let editButton = document.querySelector(".js-editBtn");
toggleBtn(false);

editButton.addEventListener('click', () => {
  contentEdit(false);
  toggleBtn(false);
})


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

document.addEventListener("keypress", function(e) {
  if ((e.ctrlKey || e.metaKey) && (e.keyCode == 11 || e.keyCode == 75)) {
    handleEditable(true);
    toggleBtn(true)
  }
});


// function for hide and show toggle button:

function toggleBtn(show) {
  if (show) {
    editButton.style.display = "block";
  } else {
    editButton.style.display = "none";
  }
}


// function for selects the text to edit:

function handleEditable() {
  document.querySelectorAll('.js-edit').forEach((ele) => {
    ele.contentEditable = true;
  })
}


