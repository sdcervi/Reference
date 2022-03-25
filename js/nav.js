// JavaScript Document
const navDiv = document.getElementById('navbar-container');
const navDivMbl = document.getElementById('navbar-container-mbl');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		links: {
			background: {
				title:	"Background",
				link:	"/Reference/html-css/background.html",
				id:		"nav-background"
			},
			box_model: {
				title:	"The Box Model",
				link:	"/Reference/html-css/box-model.html",
				id:		"nav-box-model"
			},
			css_grid: {
				title:	"CSS Grid",
				link:	"./html-css/css-grid.html",
				id:		"nav-css-grid"
			},
			selectors: {
				title:	"CSS Selectors",
				link:	"/Reference/html-css/selectors.html",
				id:		"nav-selectors"
			},
			display: {
				title:	"Display, Position &amp; Float",
				link:	"/Reference/html-css/display-position.html",
				id:		"nav-display-position"
			},
			embedded: {
				title:	"Embedded Video &amp; Audio",
				link:	"/Reference/html-css/embedded.html",
				id:		"nav-embedded"
			},
			flexbox: {
				title:	"Flexbox",
				link:	"/Reference/html-css/flexbox.html",
				id:		"nav-flexbox"
			},
			forms: {
				title:	"Forms",
				link:	"/Reference/html-css/forms.html",
				id:		"nav-forms"
			},
			entities: {
				title:	"HTML Entities",
				link:	"/Reference/html-css/entities.html",
				id:		"nav-entities"
			},
			links: {
				title:	"Links",
				link:	"/Reference/html-css/links.html",
				id:		"nav-links"
			},
			margin: {
				title:	"Margin, Padding &amp; Borders",
				link:	"/Reference/html-css/margin.html",
				id:		"nav-margin"
			},
			media_queries: {
				title:	"Media Queries &amp; Breakpoints",
				link:	"/Reference/html-css/media-queries.html",
				id:		"nav-media-queries"
			},
			metadata: {
				title:	"Metadata",
				link:	"/Reference/html-css/metadata.html",
				id:		"nav-metadata"
			},
			semantic: {
				title:	"Semantic HTML",
				link:	"/Reference/html-css/semantic.html",
				id:		"nav-semantic"
			},
			sticky: {
				title:	"Sticky Header &amp; Footer",
				link:	"/Reference/html-css/sticky.html",
				id:		"nav-sticky"
			},
			tables: {
				title:	"Tables",
				link:	"/Reference/html-css/tables.html",
				id:		"nav-tables"
			},
			typography: {
				title:	"Typography",
				link:	"/Reference/html-css/html-type.html",
				id:		"nav-html-type"
			}
		}
	},
	navJS: {
		title: "JavaScript",
		links: {
			logic: {
				title:	"Program Logic: Loops &amp; Conditionals",
				link:	"/Reference/javascript/program-logic.html",
				id:		"nav-program-logic"
			},
			time_date: {
				title:	"Time &amp; Date",
				link:	"/Reference/javascript/time-date.html",
				id:		"nav-time-date"
			},
			variables: {
				title:	"Variables &amp; Data Types",
				link:	"/Reference/javascript/variables.html",
				id:		"nav-variables"
			}
		}
	},
	navDesign: {
		title: "Design Principles",
		links: {
			animation: {
				title:	"Animation",
				link:	"/Reference/design/animation.html",
				id:		"nav-animation"
			},
			color: {
				title:	"Color &amp; Color Theory",
				link:	"/Reference/design/color-theory.html",
				id:		"nav-color-theory"
			},
			content: {
				title:	"Content Design",
				link:	"/Reference/design/content.html",
				id:		"nav-content"
			},
			copy: {
				title:	"Copywriting",
				link:	"/Reference/design/copy.html",
				id:		"nav-copy"
			},
			audience: {
				title:	"Identifying an Audience",
				link:	"/Reference/design/audience.html",
				id:		"nav-audience"
			},
			images: {
				title:	"Images",
				link:	"/Reference/design/images.html",
				id:		"nav-images"
			},
			seo: {
				title:	"SEO: Search Engine Optimization",
				link:	"/Reference/design/seo.html",
				id:		"nav-seo"
			},
			sitemap: {
				title:	"Sitemaps &amp; Wireframes",
				link:	"/Reference/design/sitemap.html",
				id:		"nav-sitemap"
			},
			typography: {
				title:	"Typography",
				link:	"/Reference/design/typography.html",
				id:		"nav-typography"
			},
			whitespace: {
				title:	"Whitespace",
				link:	"/Reference/design/whitespace.html",
				id:		"nav-whitespace"
			}
		}
	},
	navAccessibility: {
		title: "Accessibility",
		links: {
			color: {
				title:	"Color Accessibility",
				link:	"/Reference/accessibility/color.html",
				id:		"nav-color"
			}
		}
	},
	navResources: {
		title: "Resources",
		links: {
			design: {
				title:	"Design Resources",
				link:	"/Reference/resources/design-resources.html",
				id:		"nav-design-resources"
			},
			qa_qc: {
				title:	"QA &amp; QC Checklists",
				link:	"/Reference/resources/qa-qc.html",
				id:		"nav-qa-qc"
			},
			quotes: {
				title:	"Quotes",
				link:	"/Reference/resources/quotes.html",
				id:		"nav-quotes"
			},
			statistics: {
				title:	"Statistics",
				link:	"/Reference/resources/statistics.html",
				id:		"nav-statistics"
			},
			tips_tricks: {
				title:	"Tips &amp; Tricks",
				link:	"/Reference/resources/tips-tricks.html",
				id:		"nav-tips-tricks"
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
let navContentMbl = "";

function createNav () {
	for (const groupIndex in navItems) {
		const navGroup = navItems[groupIndex];
		const groupID = groupIndex.charAt(0).toUpperCase() + groupIndex.slice(1);
		navContent += "<div class='accordion-item'><h2 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 accordion-header' id='header" + groupID + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse" + groupID + "' aria-expanded='false' aria-controls='collapse" + groupID + "'>" + navGroup.title + "</button></h2>";
		navContent += "<div id='collapse" + groupID + "' class='accordion-collapse collapse' aria-labelledby='header" + groupID + "' data-bs-parent='#navbar-container'><div class='accordion-body'><ul class='nav'>";
		for (const linkIndex in navGroup.links) {
			const navLink = navGroup.links[linkIndex];
			navContent += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "' href='" + navLink.link + "'>" + navLink.title + "</a></li>";
		}
		navContent += "</ul></div></div></div>";
	}
}

function createNavMbl () {
	for (const groupIndex in navItems) {
		const navGroup = navItems[groupIndex];
		navContentMbl += "<div class='accordion-item'><h2 class='sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 accordion-header' id='navgroup-" + navGroup.title + "'><button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapse-" + groupIndex + "' aria-expanded='false' aria-controls='collapse-" + groupIndex + "'>" + navGroup.title + "</button></h2>";
		navContentMbl += "<div id='collapse-" + groupIndex + "' class='accordion-collapse collapse' aria-labelledby='navgroup-" + navGroup.title + "' data-bs-parent='#navbar-container'><div class='accordion-body'><ul class='nav'>";
		for (const linkIndex in navGroup.links) {
			const navLink = navGroup.links[linkIndex];
			navContentMbl += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "-mbl' href='" + navLink.link + "'>" + navLink.title + "</a></li>";
		}
		navContentMbl += "</ul></div></div></div>";
	}
}

createNav();
createNavMbl();

navContent += "<div class='copyright'>&copy;" + new Date().getFullYear() + " Stephanie Cervi<br><a href='/Reference/contact.html'>Report an error or contact me</a></div>";

navDiv.innerHTML = navContent;
navDivMbl.innerHTML = navContentMbl;

const currentPage = document.location.pathname;

let filename = currentPage.substring(currentPage.lastIndexOf('/')+1);
filename = filename.substring(0, filename.length - 5);
let navID = "nav-" + filename;

const navElement = document.getElementById(navID);

navElement.classList.add('active');

navElement.parentElement.parentElement.parentElement.parentElement.classList.add('show');
navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.classList.remove('collapsed');
navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.setAttribute("aria-expanded", "true");