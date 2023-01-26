// var headerTitle = document.getElementById("headerTitle");
// var header = document.getElementById("header");
// var sticky = header.offsetTop;
// var banner = document.getElementById("banner");



// var headerSize = 50
// document.getElementById("headerTitle").style.fontSize = `${headerSize}pt`




// document.addEventListener("scroll", (event) => {

//   if (window.scrollY < 80) {

//   yPos = window.scrollY / 3;
//   newSize = headerSize - yPos;

//   // console.log(newSize)

//   fontSize = `${newSize}pt`;

//   headerTitle.style.fontSize = `${newSize}pt`

//   }

// });




// function stickyFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// } 








// const body = document.querySelector("body");
// const navbar = document.querySelector(".navbar");
// const menuBtn = document.querySelector(".menu-btn");
// const cancelBtn = document.querySelector(".cancel-btn");
// menuBtn.onclick = ()=>{
//   navbar.classList.add("show");
//   menuBtn.classList.add("hide");
//   body.classList.add("disabled");
// }
// cancelBtn.onclick = ()=>{
//   body.classList.remove("disabled");
//   navbar.classList.remove("show");
//   menuBtn.classList.remove("hide");
// }
// window.onscroll = ()=>{
//   this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
// }