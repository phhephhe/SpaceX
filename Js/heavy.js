const rightMenu = document.querySelector('.right-menu');
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn');
const blurOverlay = document.getElementById("blur-overlay");

openBtn.addEventListener('click', () => {
    rightMenu.classList.add('open-right-menu')
    blurOverlay.style.display = "block";
})
closeBtn.addEventListener('click', () => {
    rightMenu.classList.remove('open-right-menu')
    blurOverlay.style.display = "none";
})
blurOverlay.addEventListener("click", function() {
    rightMenu.classList.remove('open-right-menu')
    blurOverlay.style.display = "none";
  });
  window.addEventListener("scroll", function() {
    rightMenu.classList.remove('open-right-menu')
    blurOverlay.style.display = "none";
  });

//   slider

let index = 0;
let images = [];

images[0] = "images/slide1.jpeg"
images[1] = "../images/slide2.jpeg"
images[2] = "../images/slide3.jpeg"
images[3] = "../images/slide4.jpeg"
images[4] = "../images/slide5.jpeg"
// document.slide.src = 
function changeImg() {
    document.slide.src = images[index];
    
    if (index < images.length - 1) {
        index++;
    }else{
        index = 0;
    }
    
    setTimeout(() => {
        changeImg();
    }, 2000);
}
window.onload = changeImg();