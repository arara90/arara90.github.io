//elements
const customModal = document.querySelector(".custom-modal");
const closeBtn = document.querySelector(".modal-close-button")
const projectBtn1 = document.getElementById("work1");
const projectBtn2 = document.getElementById("work2");
const projectBtn3 = document.getElementById("work3");
const projectBtn4 = document.getElementById("work4");

//modal
const openModal=()=>customModal.classList.remove('hidden');
const closeModal=()=>customModal.classList.add('hidden');

//EventListener
closeBtn.addEventListener("click", closeModal);
projectBtn1.addEventListener("click", openModal);
projectBtn2.addEventListener("click", openModal);
projectBtn3.addEventListener("click", openModal);
projectBtn4.addEventListener("click", openModal);




