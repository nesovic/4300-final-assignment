$(document).ready(function(){
 
  $('.ltracks').css('opacity', 0);
 
  $('.ltracks').waypoint(function() {
      $('.ltracks').addClass('fadeInLeft');
  }, { offset: '50%' });
 
});

$(document).ready(function(){
 
  $('.timer').css('opacity', 0);
 
  $('.timer').waypoint(function() {
      $('.ltracks').addClass('fadeInLeft');
  }, { offset: '50%' });
 
});