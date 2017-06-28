$(function(){
  var picChosen = $('#struct').attr('picChosen');
  var element = $('#struct').children().get((picChosen - 1));
  element = $(element);
  element.addClass('picChosen');

  $('.circle').click(function(){
    var currentElement = $(this);
    var parent = $('#struct');
    var pic = parent.children().index(currentElement) + 1;

    if(pic === 1){
      $('#presentation .picDisplay img').attr('src', 'images/webDev.png');
      $('#presentation .picDisplay h3').text('Web Developer');
      $('#presentation .picDisplay p').text('I love to build beautiful and functional websites to make information sharing better');
    }
    else if(pic === 2){
      $('#presentation .picDisplay img').attr('src', 'images/softDev.png');
      $('#presentation .picDisplay h3').text('Software Developer');
      $('#presentation .picDisplay p').text('I believe in giving people new experiences through the software they use every day');
    }

    $('#struct').attr('picChosen', 'pic');
    $('#struct').children().removeClass('picChosen');
    $(this).addClass('picChosen');
  });

  $('#navActivator').click(function(){
    if($('nav').attr('style') === 'display: block'){
      $('nav').attr('style', 'display: none');
    }
    else{
      $('nav').attr('style', 'display: block');
    }
  });
  $('.projDisplay  img').hover(function(){
    $(this).addClass('hoverShadow');
    $(this).siblings('h3').attr('style', 'display: block;');
    $(this).siblings('p').attr('style', 'display: block;');
  });
  $('.projDisplay img').mouseout(function(){
    $(this).removeClass('hoverShadow');
    $(this).siblings('p').attr('style', '');
    $(this).siblings('h3').attr('style', '');
  });
});
