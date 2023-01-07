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