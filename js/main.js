$(function name(params) {
    // для того чтобы плейсхолдер гас когда нажимаешь
    $(document).ready(function () {
        $('input,textarea').focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'))
            $(this).attr('placeholder', '');
        });
        $('input,textarea').blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    });

    $('.menu__btn').on('click', function () {
        $('.menu__items').toggleClass('menu__items--active');
    
        /*$('.header__logo').toggleClass('menu__list--active');
        $('.intro__btn').toggleClass('menu__list--active');*/
    });

    // $('.price__link').on('click', function () {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('active-modal');
    // });

    // $('.modal__button').on('click', function () {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass('close');
    // });




    // $('.modal__button').on('click', function () {
    //     $('modal').toggleClass('close');

    //     /*$('.header__logo').toggleClass('menu__list--active');
    //     $('.intro__btn').toggleClass('menu__list--active');*/
    // });




    (function () {
        if (typeof WebFont != 'undefined') {
            WebFontConfig = {
                custom: {
                    families: ['Montserrat']
                },
                active: function () {
                    $('select, :checkbox, :radio').trigger('refresh');
                }
            };
            WebFont.load(WebFontConfig);
        }
    })();

    // проверить нужно ли
    setTimeout(function () {
        $('select,filter-selects__sort').styler();
    }, 100)


    /*	$(".menu a").on("click", function (event) {
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({
                scrollTop: top
            }, 1500);
        });

        /*для закрыть меню*/
    /*
              $('.menu__btn').on('click', function () {
                  $('.menu__items').toggleClass('menu__items--active');
              });
              $('.menu__btn').on('click', function () {
                  $('.menu__btn').toggleClass('active');
              });
           
            $('.home__slider').slick({
                dots: true,
                arrows: false,
                 responsive: [


                     {
                         breakpoint: 1150,
                         settings: {
                             slidesToShow: 4,
                         }
                     },
                     {
                         breakpoint: 1000,
                         settings: {
                             slidesToShow: 3,
                         }
                     },
                     {
                         breakpoint: 620,
                         settings: {
                             slidesToShow: 2,
                             slidesToScroll: 2,
                         }
                     },
                 ]
            });
           
           
           */


});

/*открывать форму*/
const modalWindow = document.querySelector('.modal');
const modalWindow2 = document.querySelector('.modal--scout');
const modalWindow3 = document.querySelector('.modal--leader');

const buttonModal = document.querySelector('.price__button--operator');
const buttonModal2 = document.querySelector('.price__button--scout');
const buttonModal3 = document.querySelector('.price__button--leader');

/*addEventListenerпрослушиватель событий по нажатию левой кнопкой мышы*/
buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active-modal'); /*добовляем класс*/
});

buttonModal2.addEventListener('click', () => {
    modalWindow2.classList.add('active-modal'); /*добовляем класс*/
});

buttonModal3.addEventListener('click', () => {
    modalWindow3.classList.add('active-modal'); /*добовляем класс*/
});

/*закрытие окна*/
modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModal) {
        modalWindow.classList.remove('active-modal');
    }
    /*добовляем класс*/
});

modalWindow2.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModal) {
        modalWindow2.classList.remove('active-modal');
    }
    /*добовляем класс*/
});

modalWindow3.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner'); /*если клик в любое место кроме .modal__inner то окно закрывается */
    if (!isModal) {
        modalWindow3.classList.remove('active-modal');
    }
    /*добовляем класс*/
});
// скрипт который убирает полосу при скроле
// $(function () {
//     let header = $('.menu');

//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 1) {
//             header.addClass('header-fixed');
//         } else {
//             header.removeClass('header-fixed');
//         }
//     });
// });
// кнопка для адаптива
