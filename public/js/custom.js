
// website loder//
$(window).on("load", function () {
  // will first fade out the loading animation
  $(".loader-inner").fadeOut();
  // will fade out the whole DIV that covers the website.
  $(".container2").fadeOut("slow");
});


// search script
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


$(".modalLi li").click(function(){
  $(this).addClass("active")
  $('.modalLi li').not(this).removeClass("active");
  $(".modalContent").addClass("hide")
})
$(".details").click(function(){
  $(".detailsModal").removeClass("hide")
})
$(".about").click(function(){
  $(".aboutmodal").removeClass("hide")
})
$(".chain").click(function(){
  $(".chainmodal").removeClass("hide")
})
$(".protection").click(function(){
  $(".protectionmodal").removeClass("hide")
})
$(".modalContent .closeButton").click(function(){
 
  $(this).parent().addClass("hide")
})


// slider code
$('.slickone').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: false,
  speed: 300,
  centerMode: true,
  centerPadding: "270px",
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1441,
      settings: {
        centerPadding: "110px"
      }
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        centerPadding: "110px"
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "10px"
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "10px"
      }
    }
  ]
});






$(document).ready(function(){

  $('.fund-row').each(function(){
  var highestBox = 0;
  
  $(this).find('.contant-text').each(function(){
  if($(this).height() > highestBox){
  highestBox = $(this).height();
  }
  })
  
  $(this).find('.contant-text').height(highestBox);
  });
  
  
  });