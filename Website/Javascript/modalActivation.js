window.onload = showModal();

function showModal() {
    var x = document.getElementsByClassName("modal");
    console.log(x.length);
    if (x[2].style.display === "none") {
        x[2].style.display = "block";
    } else {
        x[2].style.display = "none";
    }
}

function disableModals(){

}

function clicked(event){
    alert(this.id);
}

function associateClassesAndClickHandler(){
    
}