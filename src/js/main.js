const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.menu');
const allNavItems = document.querySelectorAll('.nav-mobile__item');
const navActive = document.querySelector('.nav-mobile--active')
const footerYear = document.querySelector('.footer__year');



const handleNav = () => {
	nav.classList.toggle('nav-mobile--active');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
			navBtn.classList.remove('opened');
		});
	});

	
		nav.addEventListener('click', () => {
			nav.classList.remove('nav-mobile--active');
			navBtn.classList.remove('opened');
		});
	};


	const handleCurrentYear = () => {
		const year = new Date().getFullYear();
		footerYear.innerText = year;
	};



navBtn.addEventListener('click', handleNav);

handleCurrentYear();