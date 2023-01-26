const slides = document.querySelectorAll("#gallery picture");

// var header = document.getElementById("header");
var gallery = document.querySelector("div.landinggallery");


var arr = [2, 7.2, 11, 15.5, 20, 28];
offsets = [];

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}




// console.log(arr);
// shuffleArray(arr);
// console.log(arr);

function imageHover(source) {

}

function thumb(source) {
    source.style='mix-blend-mode:normal';
}

function thumbOut(source) {
    source.style='mix-blend-mode:screen';
}


window.addEventListener("load", (event) => {
    moveGallery()
});

function moveGallery() {
    const slides = document.querySelectorAll("div.gallerypic");

    var gallery = document.querySelector("div.landinggallery");



    var heightStep = (gallery.offsetHeight - 300) / slides.length

    // console.log(gallery.offsetHeight)

    for (i = 0; i < slides.length; i++) {
        value = Math.round((i * heightStep) + 16)
        offsets.push(value)
    }

    shuffleArray(offsets)
    

    slides.forEach((slide, index) => {
        // console.log(offsets[index])
        slide.style.transform = `translateY(${offsets[index]}px)`;
    });
}