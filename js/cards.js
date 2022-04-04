// JavaScript Document
const cardsDiv = document.getElementById('cards-container');

let cardContent = "<h2>Quick links</h2><nav class='quick-links'><ul>";

function createCards () {
	for (const groupIndex in navItems) {
		const cardGroup = navItems[groupIndex];
		cardContent += "<li><a href='#" + cardGroup.id + "'>" + cardGroup.title + "</a></li>";
	}
	cardContent += "</ul></nav>";
	for (const groupIndex in navItems) {
		const cardGroup = navItems[groupIndex];
		cardContent += "<section id='" + cardGroup.id + "'><h2 class='pb-1 pt-3'>" + cardGroup.title + "</h2>";
		cardContent += "<div class='row row-cols-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-4 mb-4'>";
		for (const cardIndex in cardGroup.links) {
			const cardData = cardGroup.links[cardIndex];
			cardContent += "<div class='col'><div class='card h-100'><img src='" + cardData.image + "' class='card-img-top' alt=''><div class='card-body'><h5 class='card-title'>" + cardData.title + "</h5><p class='card-text'>" + cardData.copy + "</p></div><div class='card-footer text-center'><a href='./" + cardData.link + "' class='btn btn-primary stretched-link'>Read now</a></div></div></div>";
		}
		cardContent += "</div></section>";
	}
}

createCards();

cardsDiv.innerHTML = cardContent;