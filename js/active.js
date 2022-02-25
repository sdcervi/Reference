const currentPage = document.location.pathname;

let filename = currentPage.substring(currentPage.lastIndexOf('/')+1);
filename = filename.substring(0, filename.length - 5);
let navID = "nav-" + filename;

const navElement = document.getElementById(navID);

navElement.classList.add('active');
navElement.parentElement.parentElement.parentElement.parentElement.classList.add('show');
navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.classList.remove('collapsed');
navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.setAttribute("aria-expanded", "true");