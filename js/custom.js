const projectBtn = document.getElementById("work1");
const customModal = document.querySelector(".custom-modal");
const closeBtn = document.querySelector(".modal-close-button")

const openModal = () =>{
    customModal.classList.remove('hidden');
}

const closeModal = () =>{
    customModal.classList.add('hidden');
}

projectBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);



