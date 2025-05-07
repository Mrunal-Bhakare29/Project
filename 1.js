// Get modal element
var modal = document.getElementById('modal');

// Get modal image and caption elements
var modalImg = document.getElementById('modal-image');
var captionText = document.getElementById('caption');

// Get all images with class 'grid-item'
var images = document.querySelectorAll('.grid-item');

// Add click event to each image
images.forEach(function(image) {
    image.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}