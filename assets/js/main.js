(function ($)
  { "use strict"
  

/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(250).fadeOut('slow');
      $('body').delay(250).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };



    // index-2
    $('.slider-item-active').slick({
      slidesToShow: 1,
      loop:true,
      infinite: true,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor:'.slider-nav'
    });
    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      loop:true,
      arrows: false,
      infinite: true,
      asNavFor: '.slider-item-active',
      dots: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      centerMode: true,
      focusOnSelect: true,
      centerPadding:0,
    });



/* 4. Testimonial Active*/
var testimonial = $('.h1-testimonial-active');
if(testimonial.length){
testimonial.slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    loop:true,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ti-arrow-top-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ti-arrow-top-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots:false
        }
      }
    ]
  });
}


/* 5. Gallery Active */
var client_list = $('.instagram-active');
if(client_list.length){
  client_list.owlCarousel({
    slidesToShow: 5,
    slidesToScroll: 1,
    loop: true,
    autoplay:true,
    speed: 3000,
    smartSpeed:2000,
    nav: false,
    dots: false,
    margin: 0,

    autoplayHoverPause: true,
    responsive : {
      0 : {
        nav: false,
        items: 2,
      },
      768 : {
        nav: false,
        items: 5,
      }
    }
  });
}


/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


// 12 Pop Up Img
    var popUp = $('.single_gallery_part, .img-pop-up');
      if(popUp.length){
        popUp.magnificPopup({
          type: 'image',
          gallery:{
            enabled:true
          }
        });
      }
// 12 Pop Up Video
    var popUp = $('.popup-video');
    if(popUp.length){
      popUp.magnificPopup({
        type: 'iframe'
      });
    }

/* 13. counterUp*/
    $('.counter').counterUp({
      delay: 10,
      time: 3000
    });

/* 14. Datepicker */
  $('#datepicker1').datepicker();

// 15. Time Picker
  $('#timepicker').timepicker();

//16. Overlay
  $(".snake").snakeify({
    speed: 200
  });


//17.  Progress barfiller

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();

  
  //17. hamburger Menu
  $('.hamburger').on('click', function() {
    $(this).toggleClass('is-active');
    $(this).next().toggleClass('nav-menu-show')
  });


  $(function(){
    $('.more-btn').click(function(){
      $(this).css('display', 'none')
      $('.more-btn2').css('display', 'inline-block')
    })

    $('.more-btn2').click(function(){
      $(this).css('display', 'none')
    })
  });

})(jQuery);

// 우편번호 검색
function findAddr(){
	new daum.Postcode({
        oncomplete: function(data) {
        	
        	console.log(data);
        	
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var jibunAddr = data.jibunAddress; // 지번 주소 변수
            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('member_post').value = data.zonecode;
            if(roadAddr !== ''){
                document.getElementById("member_addr").value = roadAddr;
            } 
            else if(jibunAddr !== ''){
                document.getElementById("member_addr").value = jibunAddr;
            }
        }
    }).open();
}

// 이메일
$("select[name=sel_email]").on("change", function(){
  var $addr = $(this).closest(".form").find("input[name=email_addr]");
  if ($(this).val() == "etc") {
      $addr.val('');
      $addr.prop("readonly",false);

  } else {
      $addr.val($(this).val());
      $addr.prop("readonly",true);
  }
});

// 모달
$(function(){
  $('.send-info').click(function(){
    alert('이메일이 전송되었습니다.')
    css('display', none)
  })
});