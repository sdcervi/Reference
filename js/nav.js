// JavaScript Document
const navDiv = document.getElementById('navbar-container');

navDiv.innerHTML = `
	<h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>Design Principles</h6>
	<ul class='nav flex-column mb-2'>
		<li class='nav-item'><a class='nav-link' id='nav-animation' href='/design/animations.html'>Animations</a></li>
	</ul>

	<h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>HTML &amp; CSS</h6>
	<ul class='nav flex-column mb-2'>
		<li class='nav-item'><a class='nav-link' id='nav-flexbox' href='/flexbox/index.html'>Flexbox</a></li>
	</ul>
`;