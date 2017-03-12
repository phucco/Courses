/**
 * Created by Nguyen Phuong Thanh on 11/25/2015.
 */
$(document).ready(function () {
  $("#demosMenu").change(function () {
    window.location.href = $(this).find("option:selected").attr("id") + '.html';
  });
  var scale = $(window).width()/1920;
  /*$('.section .intro .description').css({
   'transform': 'scale(' + scale + ')'
   });*/
  

  $('.home').find('[data-wow-delay]').each(function(index, el) {
    var delay = parseInt($(this).data('wowDelay'));
    $(this).css('animationDuration', delay);
  });
  $('.home').find('[data-wow-duration]').each(function(index, el) {
    var duration = parseInt($(this).data('wowDuration'));
    $(this).css('animationDuration', duration);
  });

  // Fullpage
  function home_fullpage_init(){
    $('#fullpage').fullpage({
      css3: true,
      navigation: true,
      navigationPosition: 'right',
      continuousVertical: false,
      loopHorizontal: false,
      fitToSection: true,
      easingcss3: 'ease-in-out',
      responsive: 320,
      afterLoad: function(anchorLink, index){
        $('#section_1').find('.wow').each(function(index, el) {
          var effect = $(this).data('wowType');
          $(this).addClass(effect + ' animated');
        });
      },
      onLeave: function(index, nextIndex, direction){
        // and disable follow nextIndex
        $('#section_' + index).find('.wow').each(function(index, el) {
          var effect = $(this).data('wowType');
          $(this).removeClass(effect + ' animated');
        });
        // and enable others
        $('#section_' + nextIndex).find('.wow').each(function(index, el) {
          var effect = $(this).data('wowType');
          $(this).addClass(effect + ' animated');
        });

        // Show/hide #footer
         if(nextIndex == 1 && index == 2){
           $('#header .logo').addClass('hidden');
           $('#header .social').removeClass('hidden');
         }
        else{
           $('#header .logo').removeClass('hidden');
           $('#header .social').addClass('hidden');
         }
      }
    });
  }

  $('#product-detail-slider .bx-viewport').css({
    'height': $('#product-detail-slider').width()
  })
  $('#product-detail-slider .slider_content .item').each(function(){
    $(this).css({
      'height': $('#product-detail-slider').width()
    })
    
    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 100) {

      } else {
        $('#backtoptop').removeClass('show');
      }
    })
  });
  $('#contact-form').validator();

});
//# sourceMappingURL=fs.js.map
