const form = document.querySelector('#form')
const pup = document.querySelector('.mail-info')
const sendForm = (el) => {
	const email = el.children[0].value

	if (email.trim() !== "") {
		el.children[0].value = ''
		pup.classList.add('visible')

		setTimeout(() => {
			pup.classList.remove('visible')
		}, 3000)
	}
	return
}

if (form) {
	form.addEventListener('submit', (el) => {
		el.preventDefault()
		sendForm(form)
	})
}

if (pup) {
	pup.addEventListener('click', (el) => {
		pup.classList.remove('visible')
	})
}