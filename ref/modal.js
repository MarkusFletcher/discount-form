/**
 * Вызов окна
 * const newModal = modal('text или html')
 * newModal()
 * 
 * или
 * modal('text или html')
 */
function modal(content) {
	const template = 
		`<div class="modal">
			<svg class="modal__close js-modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
			</svg>
			<p class="modal__content">${content}</p>
		</div>
		<style>
			.overlay {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .5);
				z-index: 220;
				transition: .3s all;
			}
			
			.modal {
				width: 100%;
				max-width: 500px;
				position: fixed;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 230; /* Должен быть выше чем у подложки*/
				box-shadow: 0 3px 10px -.5px rgba(0, 0, 0, .2); 
				text-align: center;
				padding: 30px;
				border-radius: 3px;
				background-color: #fff;
				transition: 0.3s all;
				color: #333;
			}
			
			.modal__close {
				width: 15px;
				height: 15px;
				position: absolute;
				top: 20px;
				right: 20px;
				fill: #444;
				cursor: pointer;
			}
		</style>`

	let modal = document.createElement('div')

	modal.className = "js-overlay-modal overlay";
	modal.innerHTML = template
	document.body.append(modal)
	return modal.addEventListener('click', (e) => {
		if(e.target.classList.contains('js-modal-close') || e.target.classList.contains('js-overlay-modal')) {
			modal.remove()
		}
	})
}