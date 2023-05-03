//-------------- Prealoading --------------//
  $(document).ready(function() {
    // start the loading page
    $("body").css("overflow","auto");
    $(window).load(function()
    {
    // to hide the section 
    $(".thebig-loading").fadeOut(1000);
    })
});

$('.carousel').carousel({
  interval: 3000,
})

// Scroll to top

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});




// add scrolled calss to menu //
$(window).scroll(function () {
  var navbar = $('.navbar');
   $(window).scrollTop() >= 100 ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');

});


//------------- Owl Carousel ------------//
  $(document).ready(function() {
    $('#client-logos').owlCarousel({
      loop:true,
      margin:15,
      nav:false,
      dots:false,
      dotsEach:false,
      autoplay: true,
      autoplaySpeed: 600,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:4
          },
          1000:{
              items:6
          }
      },
    });

    $('#video-demo').owlCarousel({
        autoplaySpeed: 600, //Set AutoPlay to 3 seconds
        autoplay: true,
        nav:true,
        margin:15,
        items : 3,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      },
    });
    $('#properity').owlCarousel({
        autoplaySpeed: 600, //Set AutoPlay to 3 seconds
        autoplay: true,
        nav:true,
        dots:false,
        margin:15,
        items : 2,
        responsive:{
          0:{
                     nav:true,
              items:1
          },
          600:{
                     nav:true,
              items:1
          },
          1000:{
                     nav:true,
              items:2
          }
      },
    });
  });
  $(document).ready(function() {
    $('#masterplan-carousel').owlCarousel({
    //   loop:true,
    
      items:1,
      nav:true,
      dots:true,
      dotsEach:false,
    });

    $('#video-demo').owlCarousel({
        autoplaySpeed: 600, //Set AutoPlay to 3 seconds
        autoplay: true,
        nav:true,
        margin:15,
        items : 3,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      },
    });
    $('#properity').owlCarousel({
        autoplaySpeed: 600, //Set AutoPlay to 3 seconds
        autoplay: true,
        nav:true,
        dots:false,
        margin:15,
        items : 2,
        responsive:{
          0:{
                     nav:true,
              items:1
          },
          600:{
                     nav:true,
              items:1
          },
          1000:{
                     nav:true,
              items:2
          }
      },
    });
  });







//-------------- Ease Scroll to ID --------------
  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (1200) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1200, function(){
    
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });



//------------- fixed menu on scroll ------------
  $(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 50;
    if (yOffset > breakpoint){
      $(".menu").addClass('scroll');
    }else{
      $(".menu").removeClass('scroll');
    }

  });

  $(window).scroll(function(event){

    var yOffset = window.pageYOffset;
    var breakpoint = 50;
    if (yOffset > breakpoint){
      $(".responsive-menu").addClass('scroll');
    }else{
      $(".responsive-menu").removeClass('scroll');
    }

  });




//------------- Responsive menu  ------------
    function openNav() {
        document.getElementById("mySidenav").style.width = "320px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

//---- Counter ---//
$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {
    duration: 5000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  

});
//------------- File Input Style ------------
$("[type=file]").on("change", function(){
  // Name of file and placeholder
  var file = this.files[0].name;
  var dflt = $(this).attr("placeholder");
  if($(this).val()!=""){
    $(this).next().text(file);
  } else {
    $(this).next().text(dflt);
  }
});



let masterPlanWrapper = document.getElementById('master-plan-wrapper')

let MasterCloseBtn = document.getElementById('master-close-btn')
let masterOpenBtn = document.getElementById('master-open-btn')

if(masterPlanWrapper){

console.log(masterPlanWrapper)
}
if(MasterCloseBtn){
MasterCloseBtn.addEventListener('click', ()=>{
masterPlanWrapper.style.display= "none"
})
}

if(masterOpenBtn){
masterOpenBtn.addEventListener('click', ()=>{
masterPlanWrapper.style.display= "block"
})

}





// ---------- test ----------------




