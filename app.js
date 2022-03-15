// Variables
const form = document.querySelector('.lorem-form');
const amount = document.getElementById('amount');
const lorem = document.querySelector('.lorem-text');

// Événements
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const value = Number(amount.value);
	const random = Math.floor(Math.random() * text.length);
	// Inutile avec min max et value en props
	if (isNaN(value) || value <= 0 || value > 9 || value === 1){
		// 1 paragraphe
		lorem.innerHTML = `<p class="result">${ text[random] }</p>`;
	} else {
		// Plusieurs paragraphes
		let tempText = text.slice(0,value);
		tempText = tempText.map((para) => {
			return `<p class="result">${ para }</p>`;
		}).join('');
		lorem.innerHTML = tempText;
	}
});