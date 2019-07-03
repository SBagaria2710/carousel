

invoke = (clicked_id) => {
    document.getElementById("para").innerHTML = "Paragragh Changed.";
    document.getElementById(clicked_id).disabled = true;
}

enlargeImage = (superParentID) => {
    let imageUrl = document.getElementById(superParentID).style.backgroundImage;
    let filePath = stripURL(imageUrl);
    console.log(filePath);
    let modal = document.getElementById("modal-container");
    let modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = filePath;  
}

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
closeModal = () => {
    document.getElementById("modal-container").style.display = "none";
    // document.getElementById("modalImage").src = ""
}
// When the user clicks on <span> (x), close the modal


stripURL = (url) => {
    return (url.substring(5, 20));
}