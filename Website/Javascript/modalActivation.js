
let modalArray = document.getElementsByClassName("modal");

function showModal(pModalIndex) {
    modalArray[pModalIndex].style.display = "block";
}

function closeModal(pModalIndex) {
    modalArray[pModalIndex].style.display = "none";
}