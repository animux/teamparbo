// $(document).ready(() => {
// 	$('.sidenav').sidenav({
// 		draggable: true,
// 		inDuration: 250,
// 		outDuration: 200,
// 		preventScrolling: false
// 	});

// 	$('.carousel').carousel({
// 		fullWidth: true,
// 		indicators: true,
// 		duration: 200,
// 		noWrap: true
// 	});
// });

document.addEventListener('DOMContentLoaded', () => {
	let sidenavElem = document.querySelectorAll('.sidenav');
	let sidenavInstances = M.Sidenav.init(sidenavElem, {
		draggable: true,
		inDuration: 250,
		outDuration: 200,
		preventScrolling: false
	});

	// let slideElems = document.querySelectorAll('.slider');
	// let slideInstances = M.Slider.init(slideElems, {
	// 	height: 800,
	// 	duration: 1000,
	// 	interval: 5000,
	// 	indicators: false
	// });

	let carouselElem = document.querySelectorAll('.carousel');
	let carouselInstances = M.Carousel.init(carouselElem, {
		fullWidth: true,
		indicators: true,
		duration: 200
	});

	// let changeCarouselImage = new Promise((resolve, reject) => {
	// 	setInterval(() => {
	// 		M.Carousel.getInstance(document.querySelector('.carousel')).next();
	// 	}, 5000);
	// 	resolve('{section_two: image_slide=success}');
	// });

	// changeCarouselImage.then(() => {
	// 	M.Carousel.getInstance(document.querySelector('.carousel')).set(1)
	// 	changeCarouselImage;
	// }).catch(console.error);
});

setInterval(() => {
	$('.carousel').carousel('next');
}, 5000)