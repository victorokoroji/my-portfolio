const formData = {
	name: '',
	email: '',
	description: '',
}

function fillDatas() {
	let storageData = localStorage.getItem('form-data')
	storageData = JSON.parse(storageData)
	document.getElementById('name').value = storageData.name
	document.getElementById('email').value = storageData.email
	document.getElementById('description').value = storageData.description
}

function populateDatas() {
	formData.name = document.getElementById('name').value
	formData.email = document.getElementById('email').value
	formData.description = document.getElementById('description').value
	localStorage.setItem('form-data', JSON.stringify(formData))
	fillDatas()
}

const inputList = []
inputList.push(document.getElementById('input-name'))
inputList.push(document.getElementById('input-email'))
inputList.push(document.getElementById('input-desc'))

inputList.forEach(value => {
	value.onchange = function trig() {
		populateDatas()
	}
})

if (!localStorage.getItem('form-data')) {
	populateDatas()
} else {
	fillDatas()
}
