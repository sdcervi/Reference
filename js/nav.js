// JavaScript Document
const navDiv = document.getElementById('navbar-container');
const navDivMbl = document.getElementById('navbar-container-mbl');

const navItems = {
	navHTML: {
		title:	"HTML &amp; CSS",
		id: "html-css",
		links: {
			background: {		title:	"Background",								link:	"html-css/background.html",			id:		"nav-background",
								copy:	"Background images, colors, positioning, and sizing",							image:	"./assets/homepage/background.svg"			},
			box_model: {		title:	"The Box Model",							link:	"html-css/box-model.html",			id:		"nav-box-model",
								copy:	"Margin, padding, borders, and how they interact",								image:	"./assets/homepage/box-model.svg"			},
			css_functions: {	title:	"CSS Functions",							link:	"./html-css/css-functions.html",	id:		"nav-css-functions",
								copy:	"Reusable predefined functions built into CSS",									image:	"./assets/homepage/functions.svg"			},
			css_grid: {			title:	"CSS Grid",									link:	"./html-css/css-grid.html",			id:		"nav-css-grid",
								copy:	"Properties, capabilities, and how to use CSS Grid as a layout tool",			image:	"./assets/homepage/css-grid.svg"			},
			selectors: {		title:	"CSS Selectors",							link:	"html-css/selectors.html",			id:		"nav-selectors",
								copy:	"Examples and usage for specificity, selectors, and&nbsp;inheritance",			image:	"./assets/homepage/selectors.svg"			},
			transitions: {		title:	"CSS Transitions &amp; Transforms",			link:	"html-css/transitions.html",		id:		"nav-transitions",
								copy:	"Animations, state changes, acceleration curves, and other alterations",		image:	"./assets/homepage/transitions.svg"			},
			css_variables: {	title:	"CSS Variables",							link:	"html-css/css-variables.html",		id:		"nav-css-variables",
								copy:	"Variables allow for easier repeated property-value management",				image:	"./assets/homepage/css-variables.svg"		},
			cursor: {			title:	"Cursors",									link:	"html-css/cursor.html",				id:		"nav-cursor",
								copy:	"The various options for mouse pointer symbols and when to use them",			image:	"./assets/homepage/cursor.svg"				},
			display: {			title:	"Display, Position &amp; Float",			link:	"html-css/display-position.html",	id:		"nav-display-position",
								copy:	"Controlling the flow, positioning, and layering of elements in the page",		image:	"./assets/homepage/display-position.svg"	},
			embedded: {			title:	"Embedded Video &amp; Audio",				link:	"html-css/embedded.html",			id:		"nav-embedded",
								copy:	"Displaying video and audio files in an interactive player",					image:	"./assets/homepage/embedded.svg"			},
			flexbox: {			title:	"Flexbox",									link:	"html-css/flexbox.html",			id:		"nav-flexbox",
								copy:	"Quick reference and examples for CSS flexbox&nbsp;usage",						image:	"./assets/homepage/flexbox.svg"				},
			forms: {			title:	"Forms",									link:	"html-css/forms.html",				id:		"nav-forms",
								copy:	"Entering, validating, and submitting user&nbsp;data",							image:	"./assets/homepage/forms.svg"				},
			entities: {			title:	"HTML Entities",							link:	"html-css/entities.html",			id:		"nav-entities",
								copy:	"Special characters and how to encode&nbsp;them",								image:	"./assets/homepage/entities.svg"			},
			links: {			title:	"Links",									link:	"html-css/links.html",				id:		"nav-links",
								copy:	"Links, attributes and their values, and&nbsp;usage",							image:	"./assets/homepage/links.svg"				},
			margin: {			title:	"Margin, Padding &amp; Borders",			link:	"html-css/margin.html",				id:		"nav-margin",
								copy:	"Sizing, collapsing, and properties of margin, padding, and borders",			image:	"./assets/homepage/margin.svg"				},
			media_queries: {	title:	"Media Queries &amp; Breakpoints",			link:	"html-css/media-queries.html",		id:		"nav-media-queries",
								copy:	"Targeting CSS rules based on device screen size, orientation, and more",		image:	"./assets/homepage/media-queries.svg"		},
			metadata: {			title:	"Metadata",									link:	"html-css/metadata.html",			id:		"nav-metadata",
								copy:	"Page properties such as language, who wrote it, and whether to cache&nbsp;it",	image:	"./assets/homepage/metadata.svg"			},
			semantic: {			title:	"Semantic HTML",							link:	"html-css/semantic.html",			id:		"nav-semantic",
								copy:	"Elements named according to their purpose in the page",						image:	"./assets/homepage/semantic.svg"			},
			sticky: {			title:	"Sticky Header &amp; Footer",				link:	"html-css/sticky.html",				id:		"nav-sticky",
								copy:	"Fixed navbar, sticky header blocks, and sticky footer",						image:	"./assets/homepage/sticky.svg"				},
			tables: {			title:	"Tables",									link:	"html-css/tables.html",				id:		"nav-tables",
								copy:	"Rows, data cells, headings, and&nbsp;formatting",								image:	"./assets/homepage/tables.svg"				},
			typography: {		title:	"Typography",								link:	"html-css/html-type.html",			id:		"nav-html-type",
								copy:	"Text flow, formatting, and&nbsp;readability",									image:	"./assets/homepage/html-type.svg"			}
		}
	},
	navJS: {
		title: "JavaScript",
		id:		"javascript",
		links: {
			functions: {		title:	"Functions",								link:	"javascript/functions.html",		id:		"nav-functions",
								copy:	"Reusable blocks of code used to manipulate data",								image:	"./assets/homepage/functions.svg"			},
			integration: {		title:	"Integrating JavaScript and HTML",			link:	"javascript/integration.html",		id:		"nav-integration",
								copy:	"Loading JavaScript into an HTML page for interactivity",						image:	"./assets/homepage/integration.svg"			},
			logic: {			title:	"Program Logic: Loops &amp; Conditionals",	link:	"javascript/program-logic.html",	id:		"nav-program-logic",
								copy:	"Loops, conditionals, and other logical operators",								image:	"./assets/homepage/program-logic.svg"		},
			math: {				title:	"Math Built-In Object",						link:	"javascript/math.html",				id:		"nav-math",
								copy:	"Properties and methods of the <code>Math</code> object",						image:	"./assets/homepage/math.svg"				},
			regex: {			title:	"Regular Expressions",						link:	"javascript/regex.html",			id:		"nav-regex",
								copy:	"Define patterns and parameters for strings of characters",						image:	"./assets/homepage/regex.svg"				},
			time_date: {		title:	"Time &amp; Date",							link:	"javascript/time-date.html",		id:		"nav-time-date",
								copy:	"Displaying time and date with&nbsp;Javascript",								image:	"./assets/homepage/time-date.svg"			},
			variables: {		title:	"Variables &amp; Data Types",				link:	"javascript/variables.html",		id:		"nav-variables",
								copy:	"Variable types, usage, and manipulation",										image:	"./assets/homepage/variables.svg"			}
		}
	},
	navDesign: {
		title: "Design Principles",
		id:		"design",
		links: {
			animation: {		title:	"Animation",								link:	"design/animation.html",			id:		"nav-animation",
								copy:	"Transitional, deocrative, and functional&nbsp;animations",						image:	"./assets/homepage/animation.gif"			},
			color: {			title:	"Color &amp; Color Theory",					link:	"design/color-theory.html",			id:		"nav-color-theory",
								copy:	"The color wheel, choosing color palettes, and color&nbsp;theory",				image:	"./assets/homepage/color.svg"				},
			content: {			title:	"Content Design",							link:	"design/content.html",				id:		"nav-content",
								copy:	"Visual hierarchy, grouping, information flow, and navigation",					image:	"./assets/homepage/content.svg"				},
			copy: {				title:	"Copywriting",								link:	"design/copy.html",					id:		"nav-copy",
								copy:	"Principles, best practices, and common errors in&nbsp;copywriting",			image:	"./assets/homepage/copy.svg"				},
			audience: {			title:	"Identifying an Audience",					link:	"design/audience.html",				id:		"nav-audience",
								copy:	"Coming up with use cases, scenarios, and stories",								image:	"./assets/homepage/audience.svg"			},
			images: {			title:	"Images",									link:	"design/images.html",				id:		"nav-images",
								copy:	"Image formats, use cases, and pros and&nbsp;cons",								image:	"./assets/homepage/images.svg"				},
			seo: {				title:	"SEO: Search Engine Optimization",			link:	"design/seo.html",					id:		"nav-seo",
								copy:	"Techniques to improve rankings in search results",								image:	"./assets/homepage/seo.svg"					},
			sitemap: {			title:	"Sitemaps &amp; Wireframes",				link:	"design/sitemap.html",				id:		"nav-sitemap",
								copy:	"Setting up information hierarchy and page structure",							image:	"./assets/homepage/sitemap.svg"				},
			typography: {		title:	"Typography",								link:	"design/typography.html",			id:		"nav-typography",
								copy:	"Fonts, typefaces, special characters, and how they apply to web&nbsp;design",	image:	"./assets/homepage/typography.svg"			},
			whitespace: {		title:	"Whitespace",								link:	"design/whitespace.html",			id:		"nav-whitespace",
								copy:	"Negative space, balanced design, and how to let your designs breathe",			image:	"./assets/homepage/whitespace.svg"			}
		}
	},
	navAccessibility: {
		title: "Accessibility",
		id:		"accessibility",
		links: {
			basics: {			title:	"Accessibility Basics",						link:	"accessibility/basics.html",		id:		"nav-basics",
								copy:	"Principles and basic concepts of accessibility",								image:	"./assets/homepage/acc-basics.svg"			},
			aria: {				title:	"ARIA Standards, Roles &amp; Attributes",	link:	"accessibility/aria.html",			id:		"nav-aria",
								copy:	"Accessible Rich Internet Applications and accessibiltiy standards",			image:	"./assets/homepage/acc-aria.svg"			},
			color: {			title:	"Color Accessibility",						link:	"accessibility/color.html",			id:		"nav-color",
								copy:	"Colorblind accessibility and safe color&nbsp;palettes",						image:	"./assets/homepage/acc-color.svg"			}
		}
	},
	navResources: {
		title: "Resources",
		id:		"resources",
		links: {
			design: {			title:	"Design Resources",							link:	"resources/design-resources.html",	id:		"nav-design-resources",
								copy:	"Documentation, guides, tutorials, tools, and testing",							image:	"./assets/homepage/design-resources.svg"	},
			qa_qc: {			title:	"QA &amp; QC Checklists",					link:	"resources/qa-qc.html",				id:		"nav-qa-qc",
								copy:	"Checklists for ensuring quality of design and&nbsp;content",					image:	"./assets/homepage/qa-qc.svg"				},
			quotes: {			title:	"Quotes",									link:	"resources/quotes.html",			id:		"nav-quotes",
								copy:	"Useful, thought-provoking, and informative quotes",							image:	"./assets/homepage/quotes.svg"				},
			statistics: {		title:	"Statistics",								link:	"resources/statistics.html",		id:		"nav-statistics",
								copy:	"Current statistics on market share, from&nbsp;Statcounter.com",				image:	"./assets/homepage/statistics.svg"			},
			tips_tricks: {		title:	"Tips &amp; Tricks",						link:	"resources/tips-tricks.html",		id:		"nav-tips-tricks",
								copy:	"Tips and tricks for software and systems",										image:	"./assets/homepage/tips-tricks.svg"			},
			troubleshooting: {	title:	"Troubleshooting",							link:	"resources/troubleshooting.html",	id:		"nav-troubleshooting",
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
			navContent += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "' href='/Reference/" + navLink.link + "'>" + navLink.title + "</a></li>";
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
			navContentMbl += "<li class='nav-item'><a class='nav-link' id='" + navLink.id + "-mbl' href='/Reference/" + navLink.link + "'>" + navLink.title + "</a></li>";
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

if (navID != 'nav-index') {
	const navElement = document.getElementById(navID);

	navElement.classList.add('active');

	navElement.parentElement.parentElement.parentElement.parentElement.classList.add('show');
	navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.classList.remove('collapsed');
	navElement.parentElement.parentElement.parentElement.parentElement.previousSibling.firstChild.setAttribute("aria-expanded", "true");
} else {
	document.getElementById('nav-home').classList.add('active');
}