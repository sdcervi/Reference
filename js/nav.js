// JavaScript Document
const navDiv = document.getElementById('navbar-container');
const navDivMbl = document.getElementById('navbar-container-mbl');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		links: {
			entities: {
				title:	"HTML Entities",
				link:	"/Reference/html-css/entities.html",
				id:		"nav-entities"
			},
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
	navJS: {
		title: "JavaScript",
		links: {
			time_date: {
				title:	"Time &amp; Date",
				link:	"/Reference/javascript/time-date.html",
				id:		"nav-time-date"
			}
		}
	},
	navDesign: {
		title: "Design Principles",
		links: {
			typography: {
				title:	"Typography",
				link:	"/Reference/design/typography.html",
				id:		"nav-typography"
			},
			copy: {
				title:	"Copywriting",
				link:	"/Reference/design/copy.html",
				id:		"nav-copy"
			},
			color: {
				title:	"Color &amp; Color Theory",
				link:	"/Reference/design/color.html",
				id:		"nav-color"
			},
			images: {
				title:	"Images",
				link:	"/Reference/design/images.html",
				id:		"nav-images"
			},
			animation: {
				title:	"Animation",
				link:	"/Reference/design/animation.html",
				id:		"nav-animation"
			}
		}
	},
	navAccessibility: {
		title: "Accessibility",
		links: {
			color: {
				title:	"Color Accessibility",
				link:	"/Reference/accessibility/color.html",
				id:		"nav-acc-color"
			}
		}
	},
	navResources: {
		title: "Resources",
		links: {
			qa_qc: {
				title:	"QA &amp; QC",
				link:	"/Reference/resources/qa-qc.html",
				id:		"nav-qa-qc"
			},
			statistics: {
				title:	"Statistics",
				link:	"/Reference/resources/statistics.html",
				id:		"nav-statistics"
			},
			troubleshooting: {
				title:	"Troubleshooting",
				link:	"/Reference/resources/troubleshooting.html",
				id:		"nav-troubleshooting"
			}
		}
	}
};

let navContent = "";

function createNav () {
	for (const groupIndex in navItems) {
		const navGroup = navItems[groupIndex];
		navContent += "<h6 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1'>" + navGroup.title + "</h6>";
		navContent += "<ul class='nav flex-column mb-2'>";
		for (const linkIndex in navGroup.links) {
			const navLink = navGroup.links[linkIndex];
			navContent += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "' href='" + navLink.link + "'>" + navLink.title + "</a></li>";
		}
		navContent += "</ul>";
	}
}

createNav();

navContent += "<div class='copyright'>&copy;" + new Date().getFullYear() + " Stephanie Cervi</div>";

navDiv.innerHTML = navContent;
navDivMbl.innerHTML = navContent;