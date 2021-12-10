// JavaScript Document
const cardsDiv = document.getElementById('cards-container');

const cardItems = {
	groupHTML: {
		title:	"HTML &amp; CSS",
		id:		"html-css",
		cards: {
			flexbox: {
				title:	"Flexbox",
				copy:	"Quick reference and examples for CSS flexbox usage",
				link:	"./html-css/flexbox.html",
				image:	"./assets/flexbox.svg"
			},
			selectors: {
				title:	"CSS Selectors",
				copy:	"Examples and usage for specificity, selectors, and inheritance",
				link:	"./html-css/selectors.html",
				image:	"./assets/selectors.svg"
			}
		}
	},
	groupDesign: {
		title:	"Design Principles",
		id:		"design",
		cards: {
			typography: {
				title:	"Typography",
				copy:	"Fonts, typefaces, special characters, and how they apply to web design",
				link:	"./design/typography.html",
				image:	"./assets/typography.svg"
			},
			images: {
				title:	"Images",
				copy:	"Image formats, use cases, and pros and cons",
				link:	"./design/images.html",
				image:	"./assets/images.svg"
			}
		}
	},
	groupResources: {
		title:	"Resources",
		id:		"resources",
		cards: {
			qa_qc: {
				title:	"QA &amp; QC Checklists",
				copy:	"Checklists for ensuring quality of design and content",
				link:	"./resources/qa-qc.html",
				image:	"./assets/qa-qc.svg"
			},
			statistics: {
				title:	"Statistics",
				copy:	"Current statistics on market share, from Statcounter.com",
				link:	"./resources/statistics.html",
				image:	"./assets/statistics.svg"
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