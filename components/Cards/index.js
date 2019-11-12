// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function lambdaCards(a) {

	// ELEMENTS
	const card                          = document.createElement('div');
	const cardHeadline                  = document.createElement('div');
	const cardAuthor                    = document.createElement('div');
	const cardAuthorImgCt               = document.createElement('div');
	const cardAuthorImg                 = document.createElement('img');
	const cardBy                        = document.createElement('span');

	// CLASSES
	card.classList.add('card');
	cardHeadline.classList.add('headline');
	cardAuthor.classList.add('author');
	cardAuthorImgCt.classList.add('img-container');

	// APPENDS
	card.appendChild(cardHeadline);
	card.appendChild(cardAuthor);
	cardAuthor.appendChild(cardAuthorImgCt);
	cardAuthorImgCt.appendChild(cardAuthorImg);
	card.appendChild(cardBy);

	// CONTENT
	cardHeadline.textContent            = a.headline;
	cardAuthorImg.src                   = a.authorPhoto;
	cardBy.textContent                  = a.authorName;

	return card;
}

let cardsContainer                    = document.querySelector('.cards-container');

console.log('Promises: Cards',
	axios
		.get('https://lambda-times-backend.herokuapp.com/articles')
);

axios
	.get('https://lambda-times-backend.herokuapp.com/articles')
	.then(response => {
		const articles = response.data.articles;
		console.log('response: articles', articles);
		let arrArticles = Object.keys(articles).map(i => articles[i]);
		console.log('Array: articles', arrArticles);
		arrArticles.forEach(array => {
			array.forEach(article => {
				let ltArticles = lambdaCards(article);
				cardsContainer.appendChild(ltArticles);
				console.log(ltArticles);
			})
		})
	})
	.catch(error => {
		if (error.includes('Network Error')) {
			console.log('Network Error');
		}
		console.log('No Data Returned');
	});