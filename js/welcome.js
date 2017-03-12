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

function validateEmail(sEmail) {
  var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (filter.test(sEmail)) {
    return true;
  }
  return false;

}
$(document).ready(function () {

  if($('body').hasClass('home')){
    $('.menu .menu-button').click(function(){
      $('.menu').toggleClass('open');
    });
    home_fullpage_init();
    if($.cookie("subscribe-model") == 0 || $.cookie("subscribe-model") == null){
      setTimeout(function() {
        $('#registerModal').modal('show');
      }, 10000);
    }

    $('#moveUp').click(function(){
      $.fn.fullpage.moveSectionDown();
    });
  }

  $(document).on('click','#subscribe',function(event){

    var email =$("#email").val();
    var name = $("#name").val();
    if(!validateEmail(email) || name.trim() == ''){
      return;
    }
    $('#subscribe').button('loading');
    var url = "/subscribe";
    var data = {'email':email,'name':name};
    $.ajax({
      type: "POST",
      url: url,
      data: data,
      dataType: "text",
      cache: false,
      success:function(data){
        if(data == ''){
          $('.subscription-message').removeClass('hide');
          setTimeout(function() {
            $('#registerModal').modal('hide');
          }, 2000);
          $.cookie("subscribe-model", 1, { expires : 100000 });
        }else{
          alert(data);
        }
      }
    });
    event.preventDefault();
  });

  $('#newsletter-form').validator();
  /*$('#newsletter-form').on("submit", function (e) {
    e.preventDefault();
    $('#newsletter-form').validator();
  })*/
  /*$('#newsletter-form').validator().on('submit', function (e) {
    if (e.isDefaultPrevented()) {
      alert("The paragraph was clicked.");
    } else {
      e.preventDefault();
      $('#registerModal').modal('hide');
    }
  })*/
});


//# sourceMappingURL=welcome.js.map
