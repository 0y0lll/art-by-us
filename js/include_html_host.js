$(document).ready(function () {
    // console.log('2')

    // 서브 헤더
    $('#header').load('../include/common/header_host_sub.html', function () {
        // main태그 요소 위치에 스크롤 이동하는 이슈가 있어 추가
        // $('html').scrollTop(0);
    })
    // 서브 푸터
    $('#footer').load('../include/common/footer_host_sub.html')
})