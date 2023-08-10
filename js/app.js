document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-burger').addEventListener('click', ()=> {
        document.querySelector('.menu-burger').classList.toggle('menu-burger--active');
        document.querySelector('.header-menu').classList.toggle('d-none');
        document.querySelector('.header-menu').classList.toggle('menu--active');
        document.querySelector('.header-menu__list').classList.toggle('header-menu__list--active');
    });



    // document.querySelector('.schedule__btn-1').addEventListener('click', ()=> {
    //     document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
    //     document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
    //     document.querySelector('.schedule__btn-1').classList.add('schedule__btn--active');
    //     document.querySelector('.schedule__block-1').classList.remove('d-none');
    // });

    // document.querySelector('.schedule__btn-2').addEventListener('click', ()=> {
    //     document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
    //     document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
    //     document.querySelector('.schedule__btn-2').classList.add('schedule__btn--active');
    //     document.querySelector('.schedule__block-2').classList.remove('d-none');
    // });

    // document.querySelector('.schedule__btn-1').addEventListener('click', ()=> {
    //     document.querySelectorAll('.schedule__btn').forEach(el => el.classList.remove('schedule__btn--active'));
    //     document.querySelectorAll('.schedule__block').forEach(el => el.classList.add('d-none'));
    //     document.querySelector('.schedule__btn-1').classList.add('schedule__btn--active');
    //     document.querySelector('.schedule__block-1').classList.remove('d-none');
    // });

    // document.addEventListener('click', (event) => {
    //     if(event.target.matches('.btn-js')) {
    //         console.log('myModal');
    //         openModal('#myModal');
    //     }
    // });

    const swiper1 = new Swiper('.feedback__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
        },
        pagination: {
            el: ".feedback__pagination",
            clickable: true,
        },
         // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prev-1',
            prevEl: '.swiper-button-next-1',
        },
    });
    const swiper2 = new Swiper('.sf__slider', {
        initialSlide: 1,
        speed: 400,
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        
        navigation: {
            nextEl: '.swiper-button-prev-2',
            prevEl: '.swiper-button-next-2',
        },
        pagination: {
            el: ".sf__pagination",
            clickable: true,
        },
    });
});

window.addEventListener('scroll', function() {
    var header = document.querySelector('.sticky-header');
    var scrollPos = window.scrollY;
  
    if (scrollPos > 0) { // если прокрутка вниз
      header.classList.add('visible'); // добавляем класс "visible"
    } else { // если прокрутка вверх
      header.classList.remove('visible'); // удаляем класс "visible"
    }
  });


// async function closeModal(selector) {
//     let myModalEl = document.querySelector(selector);
//     let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
//     modal.hide();
// }
// async function openModal(selector) {
//     let myModalEl = document.querySelector(selector);
//     let modal = bootstrap.Modal.getOrCreateInstance(myModalEl);
//     modal.show();
// }

