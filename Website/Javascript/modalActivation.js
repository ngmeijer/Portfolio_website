
let modalArray = document.getElementsByClassName("modal");
let modalActive = false;

function showModal(pModalIndex) {
    if (modalActive == false) {
        modalArray[pModalIndex].style.display = "block";
        modalArray[pModalIndex].style
        modalActive = true;
    }
}

function closeModal(pModalIndex) {
    modalArray[pModalIndex].style.display = "none";
    modalActive = false;
}