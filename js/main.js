const tabItem = document.querySelectorAll('.tabs__button-item');
const tabContent = document.querySelectorAll('.tabs__content-item');


tabItem.forEach(function (element) {
    element.addEventListener('click', open)
})

function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function (item) {
        item.classList.remove('tabs__button-item--active')
    })

    tabTarget.classList.add('tabs__button-item--active');

    tabContent.forEach(function (item) {
        item.classList.remove('tabs__content-item--active')
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

// MENU BUTTON
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active')
})

const swiper = new Swiper(".swiper", {
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
});
