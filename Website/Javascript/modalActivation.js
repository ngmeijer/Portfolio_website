function showModal() {
    console.log("clicked modal button");
    var modalInstance = document.getElementById("modal");
    
    if(modalInstance == null){
        console.log("cannot find modal")
    }else{
        console.log("found modal!");
    }

    if (modalInstance.style.display == "none") {
        console.log("setting display to block");
        modalInstance.style.display = "block";
    } else {
        modalInstance.style.display = "none";
        console.log("setting display to none");
    }
}