
$(function() {
  $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь

  });

  // Инициализация прокрутки слайдера
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });
  $('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
     $(this).removeClass('active');
    })
    .jcarouselPagination();

$("select").selectbox();
});
