const form = document.querySelector('#form')
const EMAIL_INVALID =
	'Sorry!, form was not submitted. Your email should be in lowercase e.g abc@gmail.com'

function displayMessage(input, message, type) {
	document.querySelector('small').innerText = message
	input.className = type ? 'success' : 'error'
	return type
}

function showError(input, message) {
	return displayMessage(input, message, false)
}

function showSuccess(input) {
	return displayMessage(input, '', true)
}

function validateEmail(input, invalidMsg) {
	const email = input.value.trim()
	if (email !== email.toLowerCase()) {
		return showError(input, invalidMsg)
	}
	showSuccess(input)
	return true
}

function saveData() {
	const form = document.querySelector('#form')
	let formData = new FormData(form)

	let existingUser = localStorage.getItem('userData')
	existingUser = existingUser === null ? [] : JSON.parse(existingUser)

	console.log(existingUser)
	let currentUser = {}

	for (const [key, value] of formData) {
		currentUser[key] = value
	}
	existingUser[0] = currentUser
	localStorage.setItem('userData', JSON.stringify(existingUser))
}

form.addEventListener('submit', e => {
	e.preventDefault()
	const emailValid = validateEmail(form.elements.email, EMAIL_INVALID)

	if (emailValid) {
		saveData()
		form.submit()
	}
})
