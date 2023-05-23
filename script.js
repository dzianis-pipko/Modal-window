'use strict';
const showModalWindow = document.querySelectorAll('.show-modal-window');
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const closeModalWindow = document.querySelector('.close-modal-window');

const openModalWindow = () => {
	modalWindow.classList.remove('hidden');
	overlay.classList.remove('hidden');
}

const closeModal = () => {
	modalWindow.classList.add('hidden');
	overlay.classList.add('hidden');
}

const closeModalWithKeydown = (e) => {
	if(e.key === 'Escape' && !modalWindow.classList.contains('hidden')){
		closeModal();
	}
}

for(let i = 0; i < showModalWindow.length; i++){
	showModalWindow[i].addEventListener('click', openModalWindow);
}

closeModalWindow.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalWithKeydown)