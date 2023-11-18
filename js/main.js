$(document).ready(function(){

    // section_1_main_slide
    $('.section_1').slick({
        prevArrow: '.main_pager .bottom_nav li',
        nextArrow: '.main_pager .bottom_nav li',
        // appendDots: '.main_pager .bottom_nav li',
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true
    });
    
    // section_3_slide
    
    
    // map_api
    let mapContainer = document.getElementById('map'), 
        mapOption = { 
            center: new kakao.maps.LatLng(37.481032156483685, 126.88643021622362), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };
    
    let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    
    // 마커가 표시될 위치
    let markerPosition  = new kakao.maps.LatLng(37.481032156483685, 126.88643021622362); 
    
    // 마커 생성
    let marker = new kakao.maps.Marker({
        position: markerPosition
    });
    
    marker.setMap(map);
    
});
