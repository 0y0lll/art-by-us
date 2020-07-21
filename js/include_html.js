$(document).ready(function () {
    // console.log('2')

    // 모달
    $('#modals').load('../include/common/header_sub_modal.html')

    // 서브 헤더
    $('#header').load('../include/common/header_sub.html', function () {
        // main태그 내 첫번째 요소의 위치에 스크롤이 고정되는 이슈가 있어 추가
        // $('html').scrollTop(0);
    })

    // 서브 상단 타이틀 및 검색영역 - 사용자
    if ($('#pageNav').length > 0) {
        // console.log($(this))

        // 페이지별 검색 영역 삽입
        let search_area = $(this).find('#searchArea')
        let url = '../include/user/page_nav_search_area.html';

        if ($('#pageNav').hasClass('type-a')) {
            search_area.load(url + ' #search-type-a')
        } else if ($('#pageNav').hasClass('type-b')) {
            search_area.load(url + ' #search-type-b')
        } else if ($('#pageNav').hasClass('type-c')) {
            search_area.load(url + ' #search-type-c')
        }
    }

    // 서브 상단 검색된 키워드 - 사용자
    if ($('#pageNav #searchKeyword').length > 0) {
        if (!$('#searchKeyword').hasClass('search-total')) {
            $('#pageNav #searchKeyword').load('../include/user/page_nav_search_keyword.html')
        } else {
            $('#pageNav #searchKeyword').load('../include/user/page_nav_search_keyword.html #searchTotal')
        }
    }

    // 서브 광고 아이템 리스트 - 사용자
    $('#adItemList').load('../include/user/aditem_list.html', function () {
        let links = $(this).find('a');

        if ($(this).siblings('div#pageNav').hasClass('page-studio')) {
            links.attr('href', 'studio_view.html')
        } else if ($(this).siblings('div#pageNav').hasClass('page-class')) {
            links.attr('href', 'class_view.html')
        }
    })

    // 서브 검색결과 리스트 - 사용자
    // * #pageNav와 같은 클래스를 사용하면 getScript 작동안함
    if ($('#pageNav').hasClass('page-studio')) {
        $('#itemList').load('../include/user/item_list.html #itemListA', function () {
            let links = $(this).find('a');
            links.attr('href', 'studio_view.html')

            // 시안과 같은 개수로 표현하기 위함
            let clone = $(this).find('div.row').clone(true)
            $(this).find('div.row').after(clone)
        })
    } else if ($('#pageNav').hasClass('page-class')) {
        $('#itemList').load('../include/user/item_list.html #itemListA', function () {
            let links = $(this).find('a');
            links.attr('href', 'class_view.html')

            // 시안과 같은 개수로 표현하기 위함
            let clone = $(this).find('div.row').clone(true)
            $(this).find('div.row').after(clone)
        })
    } else if ($('#pageNav').hasClass('page-performance')) {
        $('#itemList').load('../include/user/item_list.html #itemListB', function () {
            let links = $(this).find('a');
            links.attr('href', 'performance_view.html')
        })
    } else if ($('#pageNav').hasClass('page-audition')) {
        $('#itemList').load('../include/user/item_list.html #itemListC', function () {
            let links = $(this).find('a');
            links.attr('href', 'audition_view.html')

            // 시안과 같은 개수로 표현하기 위함
            let clone = $(this).find('div.row').clone(true)
            $(this).find('div.row').after(clone)
        })
    } else if ($('#pageNav').hasClass('page-store')) {
        $('#itemList').load('../include/user/item_list.html #itemListC', function () {
            let links = $(this).find('a');
            links.attr('href', 'store_view.html')

            // 시안과 같은 개수로 표현하기 위함
            let clone = $(this).find('div.row').clone(true)
            $(this).find('div.row').after(clone)
        })
    }

    // 서브 view 2단 페이지 왼편 상단 슬라이드 - 사용자
    $('#viewTopSlide').load('../include/user/view_top_slide.html')

    // 서브 view 2단 페이지 왼편 상단 인트로 - 사용자
    $('#viewTopIntro').load('../include/user/view_top_intro.html')

    // 서브 view 2단 페이지 왼편 후기 및 질문 - 사용자
    $('.tab-content #review').load('../include/user/view_tab_board.html')

    // 예약 페이지 탭 - 사용자/호스트 공통
    $('#reservTab').load('../include/common/reserv_tab.html')

    // 게시판 게시글 검색바/리스트 - 사용자/호스트 공통
    $('#boardList').load('../include/common/board_list.html')

    // 게시판 게시글 - 사용자/호스트 공통
    $('#boardView').load('../include/common/board_view.html')

    // 통합 검색 리스트 : 아이디 중복으로 인해 클래스로 load함
    // 카테고리당 최대 2줄 출력 -> 상단 카테고리 클릭시 전체 출력
    // 기존 #itemListX는 리스트 상단에 검색결과 타이틀과 정렬 셀렉트박스가 있고,
    // 검색 결과 리스트는 한정된 리스트를 보여주기 때문에 새로 만듬
    if ($('#itemList').hasClass('search-total-list')) {
        $('#itemList').load('../include/user/item_list.html #itemListTotal', function () {
            // 카테고리별 리스트 출력
            // category-list-a : 작은 썸네일형              한 줄에 4개, 최대 2줄 출력(스튜디오, 클래스)
            if ($('#list-studio').length > 0 || $('#list-class').length > 0) {
                $('#list-studio, #list-class').load('../include/user/item_list.html .category-list-a')
            }

            // category-list-b : 큰 썸네일형                한 줄에 2개, 최대 1줄 출력(퍼포먼스)
            if ($('#list-performance').length > 0) {
                $('#list-performance').load('../include/user/item_list.html .category-list-b')
            }

            // category-list-c : 금액이 없는 작은 썸네일형  한 줄에 4개, 최대 2줄 출력(오디션, 스토어)
            if ($('#list-audition').length > 0 || $('#list-store').length > 0) {
                $('#list-audition, #list-store').load('../include/user/item_list.html .category-list-c')
            }
        })
    }

    // include_html을 불러오는 서브페이지 파일에서는 스크립트가 동작하지 않아 getScript 사용
    $.getScript('../js/custom.js');

    // 서브 푸터
    $('#footer').load('../include/common/footer_sub.html')
})