const mobile_menu_btn = document.getElementById('mobile_menu_btn');
const mobile_menu = document.querySelector('.mobile_menu');

mobile_menu_btn.addEventListener('click', () => {
    mobile_menu.classList.toggle('active');
    console.log("check")
});

// swiper
