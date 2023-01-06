const rightMenu = document.querySelector('.right-menu');
const openMenu = document.querySelector('.open-menu')
const closeBtn = document.querySelector('.right-menu');
console.log(openMenu);
openMenu.addEventListener('click', () => {
    rightMenu.classList.add('open-right-menu')

})
closeBtn.addEventListener('click', () => {
    rightMenu.classList.remove('open-right-menu')
})