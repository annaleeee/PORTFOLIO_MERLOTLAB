$(document).ready(function(){

    // section_1_main_slide
    $('.section_1').slick({
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        fade: true
    });
    
    $('.bottom_nav li').click(function(){
        let slideIndex = $(this).data('slide-index');
        $('.section_1').slick('slickGoTo', slideIndex);
    });

    // section_3_slide
    let slider = document.querySelector(".slide_mask"); 
    let innerSlider = document.querySelector(".slide_wrap");
    let pressed = false; // 클릭 상태 체크
    let startx;
    let x;

    slider.addEventListener("mousedown", e => {
        pressed = true;
        startx = e.offsetX - innerSlider.offsetLeft;
        slider.style.cursor = "grabbing";
    });

    slider.addEventListener("mouseenter", () => {
        slider.style.cursor = "grab";
    });
      
    slider.addEventListener("mouseup", () => {
        slider.style.cursor = "grab";
    });
    
    window.addEventListener("mouseup", () => {
        pressed = false;
    });
    
    function checkboundary() { // slider의 시작점과 끝점을 체크하여 boundary가 초과하지 않도록 해주는 함수
        let outer = slider.getBoundingClientRect();
        let inner = innerSlider.getBoundingClientRect();
      
        if (parseInt(innerSlider.style.left) > 0) {
          innerSlider.style.left = "0px"
        } else if (Number(innerSlider.style.left.replace("px", ""))< inner.width * -1){
            // 모바일일경우 * -1.25
          innerSlider.style.left = `-${inner.width}px`
        }
    };

    slider.addEventListener("mousemove", e => {
        if (!pressed) return
        e.preventDefault();
        x = e.offsetX;
      
        innerSlider.style.left = `${x - startx}px`;
        checkboundary();

    });

    
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
