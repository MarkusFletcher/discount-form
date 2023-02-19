const formWithSteps = function(formSelector, overlaySelector, openBtnSelector, closeBtnSelector) {
	const form = document.querySelector(`.${formSelector}`)
	const overlay = document.querySelector(`.${overlaySelector}`)
	let currentStep = 1

	const steps = form.querySelectorAll('[data-step-id]')

	const openForm = () => {
		overlay.classList.remove('hidden')
	}

	const closeForm = () => {
		overlay.classList.add('hidden')
	}

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
		document.addEventListener('click', (e) => {
			if(e.target.dataset.formBtn == 'next' || e.target.closest('[data-form-btn="next"]')) {
				nextStep()
			}
			if(e.target.dataset.formBtn == 'prev' || e.target.closest('[data-form-btn="prev"]')) {
				prevStep()
			}
			if(e.target.classList.contains(closeBtnSelector) || e.target.closest(`.${closeBtnSelector}`) || e.target.classList.contains(overlaySelector)) {
				closeForm()
			}
			if(e.target.classList.contains(openBtnSelector) || e.target.closest(`.${openBtnSelector}`)) {
				openForm()
			}
		})
	}
}

document.addEventListener('DOMContentLoaded', () => {

	let form = formWithSteps('js-discount-form', 'js-overlay-modal', 'js-open-discount-form', 'js-close-discount-form')
	form()
	
})