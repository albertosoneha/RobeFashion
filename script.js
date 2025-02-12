const menuTrigger = document.querySelectorAll('[data-open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closeTrigger = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < menuTrigger.length; i++) {
    const closeMenu = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active')
    }

    menuTrigger[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })
   
    closeTrigger[i].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}