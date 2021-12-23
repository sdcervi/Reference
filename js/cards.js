// JavaScript Document
const cardsDiv = document.getElementById('cards-container');

const cardItems = {
	groupHTML: {
		title:	"HTML &amp; CSS",
		id:		"html-css",
		cards: {
			entities: {
				title:	"HTML Entities",
				copy:	"Special characters and how to encode&nbsp;them",
				link:	"./html-css/entities.html",
				image:	"./assets/homepage/entities.svg"
			},
			typography: {
				title:	"Typography",
				copy:	"Text flow, formatting, and&nbsp;readability",
				link:	"./html-css/typography.html",
				image:	"./assets/homepage/html-type.svg"
			},
			links: {
				title:	"Links",
				copy:	"Links, attributes and their values, and&nbsp;usage",
				link:	"./html-css/links.html",
				image:	"./assets/homepage/links.svg"
			},
			tables: {
				title:	"Tables",
				copy:	"Rows, data cells, headings, and&nbsp;formatting",
				link:	"./html-css/tables.html",
				image:	"./assets/homepage/tables.svg"
			},
			forms: {
				title:	"Forms",
				copy:	"Entering, validating, and submitting user&nbsp;data",
				link:	"./html-css/forms.html",
				image:	"./assets/homepage/forms.svg"
			},
			flexbox: {
				title:	"Flexbox",
				copy:	"Quick reference and examples for CSS flexbox&nbsp;usage",
				link:	"./html-css/flexbox.html",
				image:	"./assets/homepage/flexbox.svg"
			},
			selectors: {
				title:	"CSS Selectors",
				copy:	"Examples and usage for specificity, selectors, and&nbsp;inheritance",
				link:	"./html-css/selectors.html",
				image:	"./assets/homepage/selectors.svg"
			},
			metadata: {
				title:	"Metadata",
				copy:	"Page properties such as language, who wrote it, and whether to cache&nbsp;it",
				link:	"./html-css/metadata.html",
				image:	"./assets/homepage/metadata.svg"
			}
		}
	},
	groupJS: {
		title:	"Javascript",
		id:		"javascript",
		cards: {
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
			typography: {
				title:	"Typography",
				copy:	"Fonts, typefaces, special characters, and how they apply to web&nbsp;design",
				link:	"./design/typography.html",
				image:	"./assets/homepage/typography.svg"
			},
			copy: {
				title:	"Copywriting",
				copy:	"Principles, best practices, and common errors in&nbsp;copywriting",
				link:	"./design/copy.html",
				image:	"./assets/homepage/copy.svg"
			},
			color: {
				title:	"Color &amp; Color Theory",
				copy:	"The color wheel, choosing color palettes, and color&nbsp;theory",
				link:	"./design/color.html",
				image:	"./assets/homepage/color.svg"
			},
			images: {
				title:	"Images",
				copy:	"Image formats, use cases, and pros and&nbsp;cons",
				link:	"./design/images.html",
				image:	"./assets/homepage/images.svg"
			},
			animation: {
				title:	"Animation",
				copy:	"Transitional, deocrative, and functional&nbsp;animations",
				link:	"./design/animation.html",
				image:	"./assets/homepage/animation.gif"
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
			qa_qc: {
				title:	"QA &amp; QC Checklists",
				copy:	"Checklists for ensuring quality of design and&nbsp;content",
				link:	"./resources/qa-qc.html",
				image:	"./assets/homepage/qa-qc.svg"
			},
			statistics: {
				title:	"Statistics",
				copy:	"Current statistics on market share, from&nbsp;Statcounter.com",
				link:	"./resources/statistics.html",
				image:	"./assets/homepage/statistics.svg"
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

let cardContent = "";

function createCards () {
	for (const groupIndex in cardItems) {
		const cardGroup = cardItems[groupIndex];
		cardContent += "<section id='" + cardGroup.title + "'><h2 class='pb-1 pt-3'>" + cardGroup.title + "</h2>";
		cardContent += "<div class='row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 mb-4'>";
		for (const cardIndex in cardGroup.cards) {
			const cardData = cardGroup.cards[cardIndex];
			cardContent += "<div class='col'><div class='card h-100'><img src='" + cardData.image + "' class='card-img-top' alt=''><div class='card-body'><h5 class='card-title'>" + cardData.title + "</h5><p class='card-text'>" + cardData.copy + "</p></div><div class='card-footer text-center'><a href='" + cardData.link + "' class='btn btn-primary stretched-link'>View " + cardData.title +"</a></div></div></div>";
		}
		cardContent += "</div></section>";
	}
}

createCards();

cardsDiv.innerHTML = cardContent;