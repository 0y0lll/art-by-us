$(function () {
    // console.log('1')

    // index slick slide
    if ($('.main-item-slide').length > 0) {
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
    }

    // 서브 드랍메뉴
    $('.sub-nav .nav-item .nav-link').hover(function () {
        let id = $(this).attr('id');
        let menu = $('.sub-nav-menu .' + id);

        menu.siblings('div').hide();
        menu.show();

        $(menu).mouseleave(function () {
            $(menu).hide()
        })
    })

    // 지역 선택 드롭메뉴
    $('#locationInput').click( function () {
        $(this).siblings('#locationList').toggleClass('d-none');
    })

    // 검색 영역 날짜 선택 datepicker - 드롭다운
    if ($('#datePickerDrop').length > 0) {
        $('#datePickerDrop').datepicker({
            language: 'ko',
            // multipleDatesSeparator: ' ~ ',
            range: false,
            // timepicker: true,    // timeslide
            navTitles: {
                days: '<span class="font-weight-bold mr-2">M</span> MM, <i>yyyy</i>'
            },
            prevHtml: '<i class="fas fa-chevron-left"></i>',
            nextHtml: '<i class="fas fa-chevron-right"></i>',
            onShow: function () {
                // datepicker width를 날짜 input width에 맞춤
                let box_width = $('#datePickerDrop').outerWidth();
                $('.datepicker.-from-bottom-').outerWidth(box_width);

                // studio페이지 시간 설정 영역 추가
                let timePicker = '';
                if ($('#pageNav').hasClass('page-studio')) {
                    timePicker = '<div class="mx-4 py-lg-4 py-3 border-top datepicker-timepicker">' +
                                        '<div class="row">' +
                                            '<div class="col-6 custom-inputs">' +
                                                '<p class="mb-lg-3 mb-2">시작시간</p>' +
                                                '<select name="" id="" class="form-control">' +
                                                    '<option value="08:00">08:00</option>' +
                                                    '<option value="09:00">09:00</option>' +
                                                    '<option value="10:00">10:00</option>' +
                                                '</select>' +
                                            '</div>' +
                                            '<div class="col-6 custom-inputs">' +
                                                '<p class="mb-lg-3 mb-2">종료시간</p>' +
                                                '<select name="" id="" class="form-control">' +
                                                    '<option value="13:00">13:00</option>' +
                                                    '<option value="14:00">14:00</option>' +
                                                    '<option value="15:00">15:00</option>' +
                                                '</select>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';
                }

                if ($('.datepicker .btn').length > 0) {
                    return false;
                } else {
                    let btn = '<button type="button" class="btn btn-block py-3 border-0 rounded-0 font-weight-light bg-yellow">검색</button>';
                    $('.datepicker')
                        .append(timePicker)
                        .append(btn);
                }
            }
        })
    }

    // studio view 페이지 datepicker - 인ㅇ라인
    if ($('#datePickerInline').length > 0) {
        $('#datePickerInline').datepicker({
            language: 'ko',
            // multipleDatesSeparator: ' ~ ',
            // range: true,
            // multipleDates: true,
            navTitles: {
                days: '<span class="font-weight-bold mr-2">M</span> MM, <i>yyyy</i>'
            },
            prevHtml: '<i class="fas fa-chevron-left"></i>',
            nextHtml: '<i class="fas fa-chevron-right"></i>',
        })
    }

    // view 페이지 별점
    if ($('.tab-content #review').length > 0) {
        $('.star-rating').starRating({
            initialRating: 3.5,
            disableAfterRate: false,
            strokeWidth: 0,
            useGradient: false,
            emptyColor: '#f1f1f1',
            activeColor: '#ffde3b',
            ratedColor: '#ffde3b',
            hoverColor: '#ffde3b',
            onHover: function(currentIndex, currentRating, $el){
              $('.live-rating').text(currentIndex);
            },
            onLeave: function(currentIndex, currentRating, $el){
              $('.live-rating').text(currentRating);
            }
        })
    }

    // 인원수 감소
    $('#decreaseQuantity').click( function(e) {
        e.preventDefault();
        var stat = $('#numberUpDown').val();
        var num = parseInt(stat, 10);
        num--;

        if (num <= 0) {
            num = 1;
        }
        $('#numberUpDown').val(num);
    })
    // 인원수 증가
    $('#increaseQuantity').click( function(e) {
        e.preventDefault();
        var stat = $('#numberUpDown').val();
        var num = parseInt(stat, 10);
        num++;

        if (num > 100) {
            num = 100;
        }
        $('#numberUpDown').val(num);
    })

    // 인풋 활성/비활성
    $('#order_def').on('change', function () {
        if ($(this).prop('checked') === true) {
            $(this).parent().prev().find('input[type=text]').removeAttr('disabled');
        } else {
            $(this).parent().prev().find('input[type=text]').attr('disabled', 'disabled');
        }
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