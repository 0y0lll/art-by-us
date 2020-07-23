$(document).ready(function () {
    // 서브 사이드바
    $('#sideBar').load('../../include/admin/sidebar.html')

    // 서브 테이블 리스트
    // 회원관리, 정산관리에서 같은 테이블을 사용하나 항목이 다름(피그마 참조)
    // 정산관리 페이지는 상단에 날짜표시가 포함됨
    $('#tableListMember').load('../../include/admin/table_list.html #memberTable')
    $('#tableListCal').load('../../include/admin/table_list.html #calTable')

    // include_html을 불러오는 서브페이지 파일에서는 스크립트가 동작하지 않아 getScript 사용
    $.getScript('../../js/custom.js');
})