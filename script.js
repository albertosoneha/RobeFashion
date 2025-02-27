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
//mobile submenu
const submenu = document.querySelectorAll('.sub-trigger');
    submenu.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle() {
        submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
         
        if (this.classList != 'expand') {
            this.classList.toggle('expand')
        }
    }
 

// Tabbed 
var tabbedNav = new Swiper('.tabs', {
    slidesPerView: false,
    centeredSlides: true,
    slidePerGroup: false,
    spaceBetween: 20,
})

var theTab = new Swiper('.tabs-box', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav
    },
}) 