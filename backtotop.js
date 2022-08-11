jQuery(document).ready(function($){
  var offset = 600,
  offset_opacity = 1200,
  scroll_top_duration = 500,
  $back_to_top = $('.cd-top');

  $(window).scroll(function(){
  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
  if( $(this).scrollTop() > offset_opacity ) {
  $back_to_top.addClass('cd-fade-out');
  }
  });

  $back_to_top.on('click', function(event){
  event.preventDefault();
  $('body,html').animate({
  scrollTop: 0 ,
  }, scroll_top_duration
  );
  });
  });

// gallery
  jQuery(document).ready(function($){
    var  scroll_top_duration = 400,
    $back_to_top = $('.nav-gallery');

    $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
    scrollTop: 1450 ,
    }, scroll_top_duration
    );
    });
    });
    // gallery mobile
  jQuery(document).ready(function($){
    var  scroll_top_duration = 400,
    $back_to_top = $('.nav-gallery-m');

    $back_to_top.on('click', function(event){
    event.preventDefault();
    $('body,html').animate({
    scrollTop: 1660,
    }, scroll_top_duration
    );
    });
    });
    //NEWS
    jQuery(document).ready(function($){
      var  scroll_top_duration = 400,
      $back_to_top = $('.nav-news');

      $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
      scrollTop: 800 ,
      }, scroll_top_duration
      );
      });
      });
         //NEWS-MOBILE
    jQuery(document).ready(function($){
      var  scroll_top_duration = 400,
      $back_to_top = $('.nav-news-m');

      $back_to_top.on('click', function(event){
      event.preventDefault();
      $('body,html').animate({
      scrollTop: 900 ,
      }, scroll_top_duration
      );
      });
      });
      // MORE
      jQuery(document).ready(function($){
        var  scroll_top_duration = 400,
        $back_to_top = $('.nav-content');

        $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
        scrollTop: 2230 ,
        }, scroll_top_duration
        );
        });
        });
           // MORE-MOBILE
      jQuery(document).ready(function($){
        var  scroll_top_duration = 400,
        $back_to_top = $('.nav-content-m');

        $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
        scrollTop: 2350 ,
        }, scroll_top_duration
        );
        });
        });


        //MOBILE
        var menubtn = document.querySelector('#menu_btn')
        var subnav = document.querySelector('.left-box-m')
        var home =document.querySelector('.nav-home-m')
        var news = document.querySelector('.nav-news-m')
        var gallery = document.querySelector('.nav-gallery-m')
        var content = document.querySelector('.nav-content-m')

        menubtn.onclick =function(){
        subnav.classList.toggle("hide")
        }

        home.onclick = function(){
          subnav.classList.remove("hide")
        }
        news.onclick = function(){
          subnav.classList.remove("hide")
        }
        gallery.onclick = function(){
          subnav.classList.remove("hide")
        }
        content.onclick = function(){
          subnav.classList.remove("hide")
        }