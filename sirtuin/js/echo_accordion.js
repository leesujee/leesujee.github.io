


$(function () {
  $('.accordion ul').hide();
  $('.accordion p').on('click', function () {
    $('.accordion p').not($(this)).next('ul').slideUp().removeClass('active');
    $(this).next('ul').slideToggle().toggleClass('active');
  });
});


$(function () {
  //.accordionの中のp要素がクリックされたら
  $('.accordion p').click(function () {

    //クリックされた.accordionの中のp要素以外の.accordionの中のp要素に隣接する.accordionの中の.innerを閉じる
    $('.accordion p').not($(this)).next('.accordion .inner').slideUp();

    /*矢印の向きを変更*/
    $(this).toggleClass('open');

    //クリックしたaccordion-title以外の全てのopenを取る
    $("p.ac1,p.ac2,p.ac3").not(this).removeClass("open");
  });
});
