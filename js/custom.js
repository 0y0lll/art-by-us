$(function () {
    // console.log('1')
    $('html').scrollTop(0);

    // index slick slide
    $('.main-item-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<button type="button" class="btn slide-prev"><span class="slide-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></button>',
        nextArrow: '<button type="button" class="btn slide-next"><span class="slide-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
              }
            }
        ]
    });

    // sub-nav hover : pc
    $('.sub-nav .nav-item .nav-link').hover(function () {
        let id = $(this).attr('id');
        let menu = $('.sub-nav-menu .' + id);

        menu.siblings('div').hide();
        menu.show();

        $(menu).mouseleave(function () {
            $(menu).hide()
        })
    })
})

// wishlist btn
function addWishList(obj) {
    let icon = $(obj).find('i');
    if (icon.hasClass('far fa-heart')) {
        $(icon).attr('class', 'fas fa-heart text-red');
    } else {
        $(icon).attr('class', 'far fa-heart');
    }
}