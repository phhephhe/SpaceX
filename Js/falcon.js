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
//   numbers
const launches = document.querySelector('.launches');
const landings = document.querySelector('.landings');
const reflights = document.querySelector('.reflights');

function increaseFast(item,final) {
    let num = 0;
    const interval = setInterval(function() {
      num++;
      console.log(num);
      document.querySelector(item).innerHTML = num;
      if (num >= final) {
        clearInterval(interval);
      }
    }, 1);
  };

increaseFast('.launches',194);
increaseFast('.landings',152);
increaseFast('.reflights',131);
   
      

      