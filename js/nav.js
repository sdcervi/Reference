// JavaScript Document
const navDiv = document.getElementById('navbar-container');
const navDivMbl = document.getElementById('navbar-container-mbl');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		links: {
			box_model: {
				title:	"The Box Model",
				link:	"/Reference/html-css/box-model.html",
				id:		"nav-box-model"
			},
			semantic: {
				title:	"Semantic HTML",
				link:	"/Reference/html-css/semantic.html",
				id:		"nav-semantic"
			},
			entities: {
				title:	"HTML Entities",
				link:	"/Reference/html-css/entities.html",
				id:		"nav-entities"
			},
			typography: {
				title:	"Typography",
				link:	"/Reference/html-css/typography.html",
				id:		"nav-html-type"
			},
			links: {
				title:	"Links",
				link:	"/Reference/html-css/links.html",
				id:		"nav-links"
			},
			tables: {
				title:	"Tables",
				link:	"/Reference/html-css/tables.html",
				id:		"nav-tables"
			},
			background: {
				title:	"Background",
				link:	"/Reference/html-css/background.html",
				id:		"nav-background"
			},
			embedded: {
				title:	"Embedded Content",
				link:	"/Reference/html-css/embedded.html",
				id:		"nav-embedded"
			},
			forms: {
				title:	"Forms",
				link:	"/Reference/html-css/forms.html",
				id:		"nav-forms"
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
			},
			display: {
				title:	"Display, Position &amp; Float",
				link:	"/Reference/html-css/display-position.html",
				id:		"nav-display"
			},
			metadata: {
				title:	"Metadata",
				link:	"/Reference/html-css/metadata.html",
				id:		"nav-metadata"
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
			tips_tricks: {
				title:	"Tips &amp; Tricks",
				link:	"/Reference/resources/tips-tricks.html",
				id:		"nav-tips-tricks"
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

//navContent += "<div class='copyright'>&copy;" + new Date().getFullYear() + " Stephanie Cervi</div>";

navDiv.innerHTML = navContent;
navDivMbl.innerHTML = navContent;