document.addEventListener('DOMContentLoaded', () => {

	const formWithSteps = function(selector) {
		const form = document.querySelector(selector)
		let currentStep = 1

		const steps = form.querySelectorAll('[data-step-id]')
	
		const nextStep = () => {
			currentStep++
			updateForm()
		}

		const preStep = () => {
			currentStep--
			updateForm()
		}

		const updateForm = () => {
			steps.forEach(el => {
				if(el.dataset.stepId != currentStep && el.classList.contains('active')) {
					el.classList.remove('active')
				} else if(el.dataset.stepId == currentStep) {
					el.classList.add('active')
				}
			})
		}
	
		return () => {
			form.addEventListener('click', (e) => {
				if(e.target.dataset.formBtn == 'next') {
					nextStep()
				}
				if(e.target.dataset.formBtn == 'pre') {
					preStep()
				}
			})
		}
	}
	
	let form = formWithSteps('.js-septic-problems-form')
	form()
	
})