const form = document.querySelector('#form')
const EMAIL_INVALID =
	'Sorry!, form was not submitted. Your email should be in lowercase e.g abc@gmail.com'

form.addEventListener('submit', e => {
	e.preventDefault()

	let emailValid = validateEmail(form.elements['email'], EMAIL_INVALID)

	if (emailValid) {
		form.submit()
	}
})

function displayMessage(input, message, type) {
	// input.parentNode.querySelector('small').innerText = message;
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

function hasValue(input, message) {
	if (input.value.trim() === '') {
		return showError(input, message)
	}
	return showSuccess(input)
}

function validateEmail(input, invalidMsg) {
	const email = input.value.trim()
	if (email !== email.toLowerCase()) {
		return showError(input, invalidMsg)
	}
	return true
}
