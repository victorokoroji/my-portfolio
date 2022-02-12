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
	const languageList = document.querySelector('.language-list')
	const angleIcon = document.querySelector('#angle-icon')
	const languages = document.querySelector('.languages')
	document.querySelector('#angle-icon').addEventListener('click', () => {
		if (languageList.style.display == 'block') {
			languageList.style.display = 'none'
			angleIcon.classList.add('angle-icon')
			languages.style.borderBottom = '1px solid var(--light-pale-blue)'
		} else {
			languageList.style.display = 'block'
			angleIcon.classList.remove('angle-icon')
			languages.style.borderBottom = 'initial'
		}
	})
}
toggleArrows()
