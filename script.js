const formWithSteps = function(selector) {
	const form = document.querySelector(selector)
	let currentStep = 1

	const steps = form.querySelectorAll('[data-step-id]')

	const nextStep = () => {
		if (!isLastStep()) {
			currentStep++
			updateForm()
		}
	}

	const prevStep = () => {
		if (currentStep != 1) {
			currentStep--
			updateForm()
		}
	}

	const isLastStep = () => {
		return (currentStep == steps.length / 2)
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
			if(e.target.dataset.formBtn == 'next' || e.target.closest('[data-form-btn="next"]')) {
				nextStep()
			}
			if(e.target.dataset.formBtn == 'prev' || e.target.closest('[data-form-btn="prev"]')) {
				prevStep()
			}
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {

	let form = formWithSteps('.js-discount-form')
	form()
	
})