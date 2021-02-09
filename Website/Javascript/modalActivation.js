window.onload = showModal;

function showModal() {
    var modalInstance = document.getElementById("modal");

    if (modalInstance.style.display == "none") {
        console.log("setting display to block");
        modalInstance.style.display = "block";
    } else {
        modalInstance.style.display = "none";
        console.log("setting display to none");
    }
}