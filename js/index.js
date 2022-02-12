function toggleMenu() {
	document.querySelectorAll('.menu-bar').forEach(element =>
		element.addEventListener('click', () => {
			document.querySelector('.mobile-menu').classList.toggle('active')
		}),
	)
}

toggleMenu()

function introSectionObserver() {
	const header = document.querySelector('header')
	const introSection = document.querySelector('.divider')

	const options = {
		rootMargin: '0px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				header.classList.add('header-active')
			} else {
				header.classList.remove('header-active')
			}
		})
	}, options)

	observer.observe(introSection)
}
introSectionObserver()

function portfolioSectionObserver() {
	const portfolioNavlink = document.querySelector('#portfolio-link')
	const portfolioSection = document.querySelector('#portfolio')

	const options = {
		rootMargin: '-280px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				portfolioNavlink.classList.add('active-link')
			} else {
				portfolioNavlink.classList.remove('active-link')
			}
		})
	}, options)

	observer.observe(portfolioSection)
}
portfolioSectionObserver()

function aboutSectionObserver() {
	const aboutNavlink = document.querySelector('#about-link')
	const aboutSection = document.querySelector('#about')

	const options = {
		rootMargin: '-280px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				aboutNavlink.classList.add('active-link')
			} else {
				aboutNavlink.classList.remove('active-link')
			}
		})
	}, options)

	observer.observe(aboutSection)
}
aboutSectionObserver()

function contactSectionObserver() {
	const contactNavlink = document.querySelector('#contact-link')
	const contactSection = document.querySelector('#contact')

	const options = {
		rootMargin: '-280px',
	}

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				contactNavlink.classList.add('active-link')
			} else {
				contactNavlink.classList.remove('active-link')
			}
		})
	}, options)

	observer.observe(contactSection)
}
contactSectionObserver()

function toggleArrows() {
	const lists = Array.from(document.querySelectorAll('.lists'))
	const angleIcon = Array.from(document.querySelectorAll('.angle-icon'))

	const listZip = angleIcon.map((btn, index) => [btn, lists[index]])

	listZip.forEach(pair => {
    pair[1].style.display = 'block'

		pair[0].addEventListener('click', () => {
			if (pair[1].style.display == 'block' || pair[1].style.display == 'flex') {
				pair[1].style.display = 'none'
				pair[0].classList.add('rotate-angle-icon')
			} else if (window.innerWidth > 992) {
				pair[1].style.display = 'flex'
				pair[0].classList.remove('rotate-angle-icon')
			} else  {
				pair[1].style.display = 'block'
				pair[0].classList.remove('rotate-angle-icon')
      }
		})
	})
}
toggleArrows()
