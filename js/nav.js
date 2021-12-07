// JavaScript Document
const navDiv = document.getElementById('navbar-container');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		links: {
			flexbox: {
				title:	"Flexbox",
				link:	"/Reference/html-css/flexbox.html",
				id:		"nav-flexbox"
			},
			selectors: {
				title:	"CSS Selectors",
				link:	"/Reference/html-css/selectors.html",
				id:		"nav-selectors"
			}
		}
	},
	navDesign: {
		title: "Design Principles",
		links: {
			qa_qc: {
				title:	"QA &amp; QC",
				link:	"/Reference/design/qa-qc.html",
				id:		"nav-qa-qc"
			}
		}
	}
};

let navContent = "";

function createNav () {
	for (const groupIndex in navItems) {
		const navGroup = navItems[groupIndex];
		navContent += "<h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted'>" + navGroup.title + "</h6>";
		navContent += "<ul class='nav flex-column mb-2'>";
		for (const linkIndex in navGroup.links) {
			const navLink = navGroup.links[linkIndex];
			navContent += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "' href='" + navLink.link + "'>" + navLink.title + "</a></li>";
		}
		navContent += "</ul>";
	}
}

createNav();

navDiv.innerHTML = navContent;