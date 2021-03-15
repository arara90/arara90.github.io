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




//filedownload
const zalesiaDownload = document.getElementById("zalesia");
const downloadZal = () => {
    alert('heelo')
    // window.location.assign('https://github.com/arara90/images/raw/master/Lumos/findingway.png?raw=true');
}
zalesiaDownload.addEventListener("click", downloadZal);