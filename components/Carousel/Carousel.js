/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const images = [
	'./assets/carousel/mountains.jpeg',
	'./assets/carousel/computer.jpeg',
	'./assets/carousel/trees.jpeg',
	'./assets/carousel/turntable.jpeg'
];

function lambdaCarousel(a) {

	// CLASSES
	const carousel                            = document.createElement('div');
	const clLeftButton                        = document.createElement('div');
	const clImage                             = document.createElement('img');
	const clRightButton                       = document.createElement('div');

	// CLASSES
	carousel.classList.add('carousel');
	clLeftButton.classList.add('left-button');
	clRightButton.classList.add('right-button');

	// APPENDS
	carousel.appendChild(clLeftButton);
	carousel.appendChild(clImage);
	carousel.appendChild(clRightButton);

	// CONTENT
	clLeftButton.textContent                  = `<`;
	clRightButton.textContent                 = `>`;
	// clImage.src                               = a;

	images.forEach(a => {
		console.log('Images', a);
		clImage.src                             = a;
	});

	return carousel;
}

console.log(lambdaCarousel(images));
// console.log('Images', images);

let carouselContainer                       = document.querySelector('.carousel-container');
carouselContainer.appendChild(lambdaCarousel(images));
//
// images.forEach(image =>{
// 	let newCarousel = lambdaCarousel(image);
// 	console.log('Carousel', newCarousel);
// })