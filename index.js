jQuery(document).ready(function($) {
    $('#style_it').on('click', function(){
      $('#styled_video')[0].play();
      $('#styled_video_container').addClass('style_it');
    });
    $('#stop_style_it').on('click', function(){
      $('#styled_video_container').removeClass('style_it');
      $('#styled_video')[0].pause();
    });
  });