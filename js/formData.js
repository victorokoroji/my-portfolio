function preserveData() {
	const form = document.querySelector('#form')
	let formData = new FormData(form)
	let existingUser = JSON.parse(localStorage.getItem('userData'))
	let userData = existingUser[0]

	for (let [name, value] of formData) {
		document.querySelector(`#form input[name="${name}"], #form textarea[name="${name}"]`).value =
			userData[name]
	}
}
let existingUser = JSON.parse(localStorage.getItem('userData'))
existingUser !== null ? preserveData() : {}
