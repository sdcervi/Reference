// JavaScript Document
const navDiv = document.getElementById('navbar-container');
const navDivMbl = document.getElementById('navbar-container-mbl');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		id: "html-css",
		links: {
			background: {		title:	"Background",								link:	"html-css/background.html",
								copy:	"Background images, colors, positioning, and sizing",							image:	"./assets/homepage/background.svg"			},
			box_model: {		title:	"The Box Model",							link:	"html-css/box-model.html",
								copy:	"Margin, padding, borders, and how they interact",								image:	"./assets/homepage/box-model.svg"			},
			css_functions: {	title:	"CSS Functions",							link:	"html-css/css-functions.html",
								copy:	"Reusable predefined functions built into CSS",									image:	"./assets/homepage/functions.svg"			},
			css_grid: {			title:	"CSS Grid",									link:	"html-css/css-grid.html",	
								copy:	"Properties, capabilities, and how to use CSS Grid as a layout tool",			image:	"./assets/homepage/css-grid.svg"			},
			selectors: {		title:	"CSS Selectors",							link:	"html-css/selectors.html",
								copy:	"Examples and usage for specificity, selectors, and&nbsp;inheritance",			image:	"./assets/homepage/selectors.svg"			},
			transitions: {		title:	"CSS Transitions &amp; Transforms",			link:	"html-css/transitions.html",
								copy:	"Animations, state changes, acceleration curves, and other alterations",		image:	"./assets/homepage/transitions.svg"			},
			css_variables: {	title:	"CSS Variables",							link:	"html-css/css-variables.html",
								copy:	"Variables allow for easier repeated property-value management",				image:	"./assets/homepage/css-variables.svg"		},
			cursor: {			title:	"Cursors",									link:	"html-css/cursor.html",
								copy:	"The various options for mouse pointer symbols and when to use them",			image:	"./assets/homepage/cursor.svg"				},
			display: {			title:	"Display, Position &amp; Float",			link:	"html-css/display-position.html",
								copy:	"Controlling the flow, positioning, and layering of elements in the page",		image:	"./assets/homepage/display-position.svg"	},
			embedded: {			title:	"Embedded Video &amp; Audio",				link:	"html-css/embedded.html",
								copy:	"Displaying video and audio files in an interactive player",					image:	"./assets/homepage/embedded.svg"			},
			flexbox: {			title:	"Flexbox",									link:	"html-css/flexbox.html",
								copy:	"Quick reference and examples for CSS flexbox&nbsp;usage",						image:	"./assets/homepage/flexbox.svg"				},
			forms: {			title:	"Forms",									link:	"html-css/forms.html",
								copy:	"Entering, validating, and submitting user&nbsp;data",							image:	"./assets/homepage/forms.svg"				},
			entities: {			title:	"HTML Entities",							link:	"html-css/entities.html",
								copy:	"Special characters and how to encode&nbsp;them",								image:	"./assets/homepage/entities.svg"			},
			images: {			title:	"Images",									link:	"html-css/images-in-html.html",
								copy:	"Image formats, responsive capabilities, and how they work with HTML",			image:	"./assets/homepage/images.svg"				},
			links: {			title:	"Links",									link:	"html-css/links.html",
								copy:	"Links, attributes and their values, and&nbsp;usage",							image:	"./assets/homepage/links.svg"				},
			margin: {			title:	"Margin, Padding &amp; Borders",			link:	"html-css/margin.html",
								copy:	"Sizing, collapsing, and properties of margin, padding, and borders",			image:	"./assets/homepage/margin.svg"				},
			media_queries: {	title:	"Media Queries &amp; Breakpoints",			link:	"html-css/media-queries.html",
								copy:	"Targeting CSS rules based on device screen size, orientation, and more",		image:	"./assets/homepage/media-queries.svg"		},
			metadata: {			title:	"Metadata",									link:	"html-css/metadata.html",
								copy:	"Page properties such as language, who wrote it, and whether to cache&nbsp;it",	image:	"./assets/homepage/metadata.svg"			},
			semantic: {			title:	"Semantic HTML",							link:	"html-css/semantic.html",
								copy:	"Elements named according to their purpose in the page",						image:	"./assets/homepage/semantic.svg"			},
			sticky: {			title:	"Sticky Header &amp; Footer",				link:	"html-css/sticky.html",	
								copy:	"Fixed navbar, sticky header blocks, and sticky footer",						image:	"./assets/homepage/sticky.svg"				},
			tables: {			title:	"Tables",									link:	"html-css/tables.html",
								copy:	"Rows, data cells, headings, and&nbsp;formatting",								image:	"./assets/homepage/tables.svg"				},
			typography: {		title:	"Typography",								link:	"html-css/html-type.html",
								copy:	"Text flow, formatting, and&nbsp;readability",									image:	"./assets/homepage/html-type.svg"			}
		}
	},
	navJS: {
		title: "JavaScript",
		id:		"javascript",
		links: {
			error_handling: {	title:	"Error handling",							link:	"javascript/error-handling.html",
								copy:	"Setting up effective error handling and recovery",								image:	"./assets/homepage/error-handling.svg"		},
			functions: {		title:	"Functions",								link:	"javascript/functions.html",
								copy:	"Reusable blocks of code used to manipulate data",								image:	"./assets/homepage/functions.svg"			},
			integration: {		title:	"Integrating JavaScript and HTML",			link:	"javascript/integration.html",
								copy:	"Loading JavaScript into an HTML page for interactivity",						image:	"./assets/homepage/integration.svg"			},
			localstorage: {		title:	"localStorage",								link:	"javascript/localstorage.html",
								copy:	"Storing and retrieving data between user sessions",							image:	"./assets/homepage/localstorage.svg"		},
			logic: {			title:	"Program Logic: Loops &amp; Conditionals",	link:	"javascript/program-logic.html",
								copy:	"Loops, conditionals, and other logical operators",								image:	"./assets/homepage/program-logic.svg"		},
			math: {				title:	"Math Built-In Object",						link:	"javascript/math.html",
								copy:	"Properties and methods of the <code>Math</code> object",						image:	"./assets/homepage/math.svg"				},
			regex: {			title:	"Regular Expressions",						link:	"javascript/regex.html",
								copy:	"Define patterns and parameters for strings of characters",						image:	"./assets/homepage/regex.svg"				},
			time_date: {		title:	"Time &amp; Date",							link:	"javascript/time-date.html",
								copy:	"Displaying time and date with&nbsp;Javascript",								image:	"./assets/homepage/time-date.svg"			},
			variables: {		title:	"Variables &amp; Data Types",				link:	"javascript/variables.html",
								copy:	"Variable types, usage, and manipulation",										image:	"./assets/homepage/variables.svg"			}
		}
	},
	navDesign: {
		title: "Design Principles",
		id:		"design",
		links: {
			animation: {		title:	"Animation",								link:	"design/animation.html",
								copy:	"Transitional, deocrative, and functional&nbsp;animations",						image:	"./assets/homepage/animation.gif"			},
			color: {			title:	"Color &amp; Color Theory",					link:	"design/color-theory.html",
								copy:	"The color wheel, choosing color palettes, and color&nbsp;theory",				image:	"./assets/homepage/color.svg"				},
			content: {			title:	"Content Design",							link:	"design/content.html",
								copy:	"Visual hierarchy, grouping, information flow, and navigation",					image:	"./assets/homepage/content.svg"				},
			copy: {				title:	"Copywriting",								link:	"design/copy.html",
								copy:	"Principles, best practices, and common errors in&nbsp;copywriting",			image:	"./assets/homepage/copy.svg"				},
			audience: {			title:	"Identifying an Audience",					link:	"design/audience.html",	
								copy:	"Coming up with use cases, scenarios, and stories",								image:	"./assets/homepage/audience.svg"			},
			images: {			title:	"Images",									link:	"design/images.html",
								copy:	"Image formats, use cases, and pros and&nbsp;cons",								image:	"./assets/homepage/images.svg"				},
			seo: {				title:	"SEO: Search Engine Optimization",			link:	"design/seo.html",
								copy:	"Techniques to improve rankings in search results",								image:	"./assets/homepage/seo.svg"					},
			sitemap: {			title:	"Sitemaps &amp; Wireframes",				link:	"design/sitemap.html",
								copy:	"Setting up information hierarchy and page structure",							image:	"./assets/homepage/sitemap.svg"				},
			typography: {		title:	"Typography",								link:	"design/typography.html",
								copy:	"Fonts, typefaces, special characters, and how they apply to web&nbsp;design",	image:	"./assets/homepage/typography.svg"			},
			whitespace: {		title:	"Whitespace",								link:	"design/whitespace.html",
								copy:	"Negative space, balanced design, and how to let your designs breathe",			image:	"./assets/homepage/whitespace.svg"			}
		}
	},
	navAccessibility: {
		title: "Accessibility",
		id:		"accessibility",
		links: {
			basics: {			title:	"Accessibility Basics",						link:	"accessibility/basics.html",
								copy:	"Principles and basic concepts of accessibility",								image:	"./assets/homepage/acc-basics.svg"			},
			aria: {				title:	"ARIA Standards, Roles &amp; Attributes",	link:	"accessibility/aria.html",
								copy:	"Accessible Rich Internet Applications and accessibiltiy standards",			image:	"./assets/homepage/acc-aria.svg"			},
			color: {			title:	"Color Accessibility",						link:	"accessibility/color.html",	
								copy:	"Colorblind accessibility and safe color&nbsp;palettes",						image:	"./assets/homepage/acc-color.svg"			}
		}
	},
	navSketchUp: {
		title: "SketchUp",
		id:		"sketchup",
		links: {
			features: {			title:	"2D &amp; 3D Features",						link:	"sketchup/features.html",
								copy:	"Creating and editing 2D &amp; 3D features",									image:	"./assets/homepage/sketchup-features.webp"			},
			lighting: {			title:	"Lighting &amp; Shadows",					link:	"sketchup/lighting.html",
								copy:	"Setting and controlling lighting and shadows",									image:	"./assets/homepage/sketchup-lighting.webp"			}
		}
	},
	navResources: {
		title: "Resources",
		id:		"resources",
		links: {
			design: {			title:	"Design Resources",							link:	"resources/design-resources.html",
								copy:	"Documentation, guides, tutorials, tools, and testing",							image:	"./assets/homepage/design-resources.svg"	},
			qa_qc: {			title:	"QA &amp; QC Checklists",					link:	"resources/qa-qc.html",
								copy:	"Checklists for ensuring quality of design and&nbsp;content",					image:	"./assets/homepage/qa-qc.svg"				},
			quotes: {			title:	"Quotes",									link:	"resources/quotes.html",
								copy:	"Useful, thought-provoking, and informative quotes",							image:	"./assets/homepage/quotes.svg"				},
			statistics: {		title:	"Statistics",								link:	"resources/statistics.html",
								copy:	"Current statistics on market share, from&nbsp;Statcounter.com",				image:	"./assets/homepage/statistics.svg"			},
			tips_tricks: {		title:	"Tips &amp; Tricks",						link:	"resources/tips-tricks.html",
								copy:	"Tips and tricks for software and systems",										image:	"./assets/homepage/tips-tricks.svg"			},
			troubleshooting: {	title:	"Troubleshooting",							link:	"resources/troubleshooting.html",
								copy:	"Glitches, common errors, and their workarounds and&nbsp;fixes",				image:	"./assets/homepage/troubleshooting.svg"		}
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
			navContent += "<li class='nav-item'><a class='nav-link' id='nav-" + navGroup.id + "-" + linkIndex.replace(/_/g, '-') + "' href='/Reference/" + navLink.link + "'>" + navLink.title + "</a></li>";
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
			navContentMbl += "<li class='nav-item'><a class='nav-link' id='nav-" + navGroup.id + "-" + linkIndex.replace(/_/g, '-') + "-mbl' href='/Reference/" + navLink.link + "'>" + navLink.title + "</a></li>";
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
let filepath = currentPage.split('/');
let groupname = filepath[filepath.length-2];
let filename = currentPage.substring(currentPage.lastIndexOf('/')+1);
filename = filename.substring(0, filename.length - 5);
let navID = `nav-${groupname}-${filename}`;

if (navID != 'nav-index' && navID != 'nav-' && filename != 'index' && filename != 'search' && filename != 'contact') {
	const navElement = document.getElementById(navID);

	navElement.classList.add('active');

	navElement.parentElement.parentElement.parentElement.parentElement.classList.add('show');
	navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.classList.remove('collapsed');
	navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.setAttribute("aria-expanded", "true");
} else {
	document.getElementById('nav-home').classList.add('active');
}

// Add search bar
const mobileNav = document.getElementById('navbar-container-mbl');
const mobileNavParent = mobileNav.parentNode;
const nav = document.getElementById('navbar-container');
const navParent = nav.parentNode;

const searchBar = document.createElement('div');
searchBar.classList.add('searchbar');
searchBar.innerHTML = `<div class="gcse-search"></div>`;

const searchBarMbl = document.createElement('div');
searchBarMbl.classList.add('searchbar');
searchBarMbl.innerHTML = `<div class="gcse-search"></div>`;

navParent.insertBefore(searchBar, nav.parentNode.children[0]);
mobileNavParent.insertBefore(searchBarMbl, mobileNav);