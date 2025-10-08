// Modal functionality
function openModal(imageId) {
    // Display the modal
    document.getElementById('imageModal').style.display = "block";
    
    // Hide all modal contents first
    var modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => content.style.display = "none");

    // Show the selected modal content
    document.getElementById(imageId).style.display = "block";
}

function closeModal() {
    // Hide the modal when clicking the close button
    document.getElementById('imageModal').style.display = "none";

    // Hide all modal contents when closing
    var modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => content.style.display = "none");
}
