// JavaScript Document
const cardsDiv = document.getElementById('cards-container');

const cardItems = {
	groupHTML: {
		title:	"HTML &amp; CSS",
		id:		"html-css",
		cards: {
			background: {
				title:	"Background",
				copy:	"Background images, colors, positioning, and sizing",
				link:	"./html-css/background.html",
				image:	"./assets/homepage/background.svg"
			},
			box_model: {
				title:	"The Box Model",
				copy:	"Margin, padding, borders, and how they interact",
				link:	"./html-css/box-model.html",
				image:	"./assets/homepage/box-model.svg"
			},
			css_grid: {
				title:	"CSS Grid",
				copy:	"Properties, capabilities, and how to use CSS Grid as a layout tool",
				link:	"./html-css/css-grid.html",
				image:	"./assets/homepage/css-grid.svg"
			},
			selectors: {
				title:	"CSS Selectors",
				copy:	"Examples and usage for specificity, selectors, and&nbsp;inheritance",
				link:	"./html-css/selectors.html",
				image:	"./assets/homepage/selectors.svg"
			},
			display: {
				title:	"Display, Position &amp; Float",
				copy:	"Controlling the flow, positioning, and layering of elements in the page",
				link:	"./html-css/display-position.html",
				image:	"./assets/homepage/display-position.svg"
			},
			embedded: {
				title:	"Embedded Video &amp; Audio",
				copy:	"Displaying video and audio files in an interactive player",
				link:	"./html-css/embedded.html",
				image:	"./assets/homepage/embedded.svg"
			},
			flexbox: {
				title:	"Flexbox",
				copy:	"Quick reference and examples for CSS flexbox&nbsp;usage",
				link:	"./html-css/flexbox.html",
				image:	"./assets/homepage/flexbox.svg"
			},
			forms: {
				title:	"Forms",
				copy:	"Entering, validating, and submitting user&nbsp;data",
				link:	"./html-css/forms.html",
				image:	"./assets/homepage/forms.svg"
			},
			entities: {
				title:	"HTML Entities",
				copy:	"Special characters and how to encode&nbsp;them",
				link:	"./html-css/entities.html",
				image:	"./assets/homepage/entities.svg"
			},
			links: {
				title:	"Links",
				copy:	"Links, attributes and their values, and&nbsp;usage",
				link:	"./html-css/links.html",
				image:	"./assets/homepage/links.svg"
			},
			margin: {
				title:	"Margin, Padding &amp; Borders",
				copy:	"Sizing, collapsing, and properties of margin, padding, and borders",
				link:	"./html-css/margin.html",
				image:	"./assets/homepage/margin.svg"
			},
			media_queries: {
				title:	"Media Queries &amp; Breakpoints",
				copy:	"Targeting CSS rules based on device screen size, orientation, and more",
				link:	"./html-css/media-queries.html",
				image:	"./assets/homepage/media-queries.svg"
			},
			metadata: {
				title:	"Metadata",
				copy:	"Page properties such as language, who wrote it, and whether to cache&nbsp;it",
				link:	"./html-css/metadata.html",
				image:	"./assets/homepage/metadata.svg"
			},
			semantic: {
				title:	"Semantic HTML",
				copy:	"Elements named according to their purpose in the page",
				link:	"./html-css/semantic.html",
				image:	"./assets/homepage/semantic.svg"
			},
			tables: {
				title:	"Tables",
				copy:	"Rows, data cells, headings, and&nbsp;formatting",
				link:	"./html-css/tables.html",
				image:	"./assets/homepage/tables.svg"
			},
			typography: {
				title:	"Typography",
				copy:	"Text flow, formatting, and&nbsp;readability",
				link:	"./html-css/html-type.html",
				image:	"./assets/homepage/html-type.svg"
			}
		}
	},
	groupJS: {
		title:	"Javascript",
		id:		"javascript",
		cards: {
			variables: {
				title:	"Variables",
				copy:	"Variable types, usage, and manipulation",
				link:	"./javascript/variables.html",
				image:	"./assets/homepage/variables.svg"
			},
			time_date: {
				title:	"Time &amp; Date",
				copy:	"Displaying time and date with&nbsp;Javascript",
				link:	"./javascript/time-date.html",
				image:	"./assets/homepage/time-date.svg"
			}
		}
	},
	groupDesign: {
		title:	"Design Principles",
		id:		"design",
		cards: {
			animation: {
				title:	"Animation",
				copy:	"Transitional, deocrative, and functional&nbsp;animations",
				link:	"./design/animation.html",
				image:	"./assets/homepage/animation.gif"
			},
			color: {
				title:	"Color &amp; Color Theory",
				copy:	"The color wheel, choosing color palettes, and color&nbsp;theory",
				link:	"./design/color-theory.html",
				image:	"./assets/homepage/color.svg"
			},
			content: {
				title:	"Content Design",
				copy:	"Visual hierarchy, grouping, information flow, and navigation",
				link:	"./design/content.html",
				image:	"./assets/homepage/content.svg"
			},
			copy: {
				title:	"Copywriting",
				copy:	"Principles, best practices, and common errors in&nbsp;copywriting",
				link:	"./design/copy.html",
				image:	"./assets/homepage/copy.svg"
			},
			audience: {
				title:	"Identifying an Audience",
				copy:	"Coming up with use cases, scenarios, and stories",
				link:	"./design/audience.html",
				image:	"./assets/homepage/audience.svg"
			},
			images: {
				title:	"Images",
				copy:	"Image formats, use cases, and pros and&nbsp;cons",
				link:	"./design/images.html",
				image:	"./assets/homepage/images.svg"
			},
			seo: {
				title:	"SEO",
				copy:	"Techniques to improve rankings in search results",
				link:	"./design/seo.html",
				image:	"./assets/homepage/seo.svg"
			},
			sitemap: {
				title:	"Sitemaps &amp; Wireframes",
				copy:	"Setting up information hierarchy and page structure",
				link:	"./design/sitemap.html",
				image:	"./assets/homepage/sitemap.svg"
			},
			typography: {
				title:	"Typography",
				copy:	"Fonts, typefaces, special characters, and how they apply to web&nbsp;design",
				link:	"./design/typography.html",
				image:	"./assets/homepage/typography.svg"
			},
			whitespace: {
				title:	"whitespace",
				copy:	"Negative space, balanced design, and how to let your designs breathe",
				link:	"./design/whitespace.html",
				image:	"./assets/homepage/whitespace.svg"
			}
		}
	},
	groupAccessibility: {
		title:	"Accessibility",
		id:		"accessibility",
		cards: {
			color: {
				title:	"Color Accessibility",
				copy:	"Colorblind accessibility and safe color&nbsp;palettes",
				link:	"./accessibility/color.html",
				image:	"./assets/homepage/acc-color.svg"
			}
		}
	},
	groupResources: {
		title:	"Resources",
		id:		"resources",
		cards: {
			design: {
				title:	"Design Resources",
				copy:	"Documentation, guides, tutorials, tools, and testing",
				link:	"./resources/design-resources.html",
				image:	"./assets/homepage/design-resources.svg"
			},
			qa_qc: {
				title:	"QA &amp; QC Checklists",
				copy:	"Checklists for ensuring quality of design and&nbsp;content",
				link:	"./resources/qa-qc.html",
				image:	"./assets/homepage/qa-qc.svg"
			},
			quotes: {
				title:	"Quotes",
				copy:	"Useful, thought-provoking, and informative quotes",
				link:	"./resources/quotes.html",
				image:	"./assets/homepage/quotes.svg"
			},
			statistics: {
				title:	"Statistics",
				copy:	"Current statistics on market share, from&nbsp;Statcounter.com",
				link:	"./resources/statistics.html",
				image:	"./assets/homepage/statistics.svg"
			},
			tips_tricks: {
				title:	"Tips &amp; Tricks",
				copy:	"Tips and tricks for software and systems",
				link:	"./resources/tips-tricks.html",
				image:	"./assets/homepage/tips-tricks.svg"
			},
			troubleshooting: {
				title:	"Troubleshooting",
				copy:	"Glitches, common errors, and their workarounds and&nbsp;fixes",
				link:	"./resources/troubleshooting.html",
				image:	"./assets/homepage/troubleshooting.svg"
			}
		}
	}
};

let cardContent = "<h2>Quick links</h2><nav class='quick-links'><ul>";

function createCards () {
	for (const groupIndex in cardItems) {
		const cardGroup = cardItems[groupIndex];
		cardContent += "<li><a href='#" + cardGroup.id + "'>" + cardGroup.title + "</a></li>";
	}
	cardContent += "</ul></nav>";
	for (const groupIndex in cardItems) {
		const cardGroup = cardItems[groupIndex];
		cardContent += "<section id='" + cardGroup.id + "'><h2 class='pb-1 pt-3'>" + cardGroup.title + "</h2>";
		cardContent += "<div class='row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 mb-4'>";
		for (const cardIndex in cardGroup.cards) {
			const cardData = cardGroup.cards[cardIndex];
			cardContent += "<div class='col'><div class='card h-100'><img src='" + cardData.image + "' class='card-img-top' alt=''><div class='card-body'><h5 class='card-title'>" + cardData.title + "</h5><p class='card-text'>" + cardData.copy + "</p></div><div class='card-footer text-center'><a href='" + cardData.link + "' class='btn btn-primary stretched-link'>Read now</a></div></div></div>";
		}
		cardContent += "</div></section>";
	}
}

createCards();

cardsDiv.innerHTML = cardContent;