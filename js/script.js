// ハンバーガーメニュー

$(function(){
  var imgHeight = $('.kv-wrapper').outerHeight();// キービジュアルの高さを取取得
  var bgHeight = $('.fv').outerHeight();// ファーストビューの高さを取得
  $(".burger-btn").on('click',function(){
    if( $(window).scrollTop() < imgHeight -50){
      //ハンバーガーメニューがfvよりも上にある時
      $('.bar').toggleClass('cross');// HBボタンのラインをクロスさせるクラスを当てたり、外したりする
      $('.header-nav').toggleClass('open');// ナビゲーションが開くクラスを付けたり、外したりする
      $('.burger-musk').fadeToggle(300);// 背景を黒くするマスクをフェードイン・アウトさせる
      $('.body').toggleClass('noscroll');
    }else{
      // ハンバーガーメニューがfvよりも下にある時
      $(this).toggleClass('black');
      $('.bar').toggleClass('cross');
      $('.header-nav').toggleClass('open');
      $('.burger-musk').fadeToggle(300);
      $('body').toggleClass('noscroll');
    }
  });

  // スクロールしたら、サイドバーとハンバーガーボタンの色が変わる
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() < imgHeight -50) {
      // メインビジュアル内はクラスを外す
      $('.header-logo').removeClass('black');
    }else {
      // メインビジュアルまできたら、blackクラスをつけて、色を黒くする
      $('.header-logo').addClass('black');
    }
    // hbボタンの指定
    if ($(window).scrollTop() < bgHeight -50) {
      // メインビジュアル内はクラスを外す
      $('.burger-btn').removeClass('black');
    }else{
      // メインビジュアルまできたら、blackクラスをつけて、色を黒くする
      $('.burger-btn').addClass('black');
      }
  });
});
