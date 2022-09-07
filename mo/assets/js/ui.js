$(document).ready(function () {
  //Buy
  $(document).on('click', '#btnBuy', buyItem);
  $(document).on('click', '#btnCart', buyItem);
  $(document).on('click', '#btnCartDetail', cartItem);
  $(document).on('click', '#btnGift', giftItem);
  $(document).on('click', '.popup-dim', closeItemDim);
  $(document).on('click', '.popup-close-box', closeItem);
  $(document).on('click', '.ar-content-dim', closeItem);
  $(document).on('click', '.option-result-close', closeOptionResult);
  $(document).on('click', '.option-select-label', selectOption);
  $(document).on('click', '.option-select-row', checkOption);
  $(document).on('click', '.option-select-label-multi', selectOptionMulti);
  $(document).on('click', '.option-select-row-multi', checkOptionMulti);
  $(document).on('focusin', '.option-select-input', inputFocusin);
  $(document).on('focusout', '.option-select-input', inputFocusout);
  $(document).on('click', '.option-input-save-btn',  optionDeleteSaveButton);
  $(document).on('click', '#goToBuy', arBuyItem);
  $(document).on('click', '#arBuy', arBuy);
  $(document).on('click', '.option-select-save-btn', arEngrave);

  //full popuop input
  $(document).on('propertychange change keyup paste input', '.popup-qna-input', changePopInput);

  //select option input change
  $(document).on('propertychange change keyup paste input', '.option-select-input', changeOptionInput);
  
  //Gnb Display Handler
  $(document).on('click', '.bottom-nav-link.link-category', gnbDisplayHandler);

  //Menu Toggle
  $(document).on('click', '.menu .dep1-list > li > a', gnbMenuToggle);

  //Gnb Close
  $(document).on('click', '.header-close-btn', gnbClose);
  $(document).on('click', '.menu-dim', gnbClose);

  // Dep2 Menu Handler
  $(document).on('click', '.header-title .title-btn', Dep2MenuHandler);
  
  //Filter
  $(document).on('click', '.filter-button', FilterDisplayHandler);

  //Like Change
  $(document).on('click', '.product-basic-like', changeLike);
  $(document).on('click', '.buy-link-item.link-like', changeLike);

  //Detail Thumbnail Tab
  $(document).on('click', '.detail-slide-tab-link', DetailThumTab);

  //Detail carat
  $(document).on('click', '.detail-option-color-box', DetailCarat);

  //Detail option Tab
  $(document).on('click', '.detail-option-link', DetailOptionTab);

  //Product detail - fordable
  $(document).on('click', '.prd-fordable-title', foldable);

  //Product detail height 100
  $(document).on('click', '.prd-detail-more', prdConHeight);

  //Product detail - qna
  $(document).on('click', '.prd-qna-con', qnaOpen);

  //Customer-service - qna
  $(document).on('click', '.my-qna-item .my-qna-prd', qnaOpen);

  //Customer-service - faq
  $(document).on('click', '.faq-list-q', qnaOpen);

  //sub tab active action
  $(document).on('click', '.subtab-link', subTabAction);

  $(document).on('click', '.quick-top .bottom-fixed-btn', scrollTop);

  //cart accordion
  $(document).on('click', '.buy-accordion-label.collapse', cartAccordion);
  $(document).on('click', '.thumb-accor-btn', showOrderItem);
  
  //gift topbanner item
  $(document).on('click', '.pd-count-topbanner-btn', showTopBannerItem);

  // customer accordion
  $(document).on('click', '.option-select-plain-label', selectPlainOption);
  $(document).on('click', '.option-select-plain-row', checkOption);

  $(window).on('scroll', function () {
    if($('.prd-detail').length > 0){
      bottomFixedScroll();
    }
    if($('.header.transparent').length > 0){
      hearderChange();
    }
  });
  
  if($('.header.transparent').length > 0){
    hearderChange();
  }

  //guidePopup
  $(document).on('click', '.guide-detail-popup-close', guidePopup);

  //notice drop box
  $(document).on('click', '.drop-box-title-link', dropNotice);

  //my page tab
  $(document).on('click', '.my-tab-list-link', myTab);

  //AR save
  $(document).on('click', '.detail-option-color-item.swiper-slide-active', arSave);

  //cart all check
  $(document).on('click', '.buy-accordion-label.has-check', cartAllCheckSub);
  $(document).on('click', '.check-box', cartBasicCheck);
  $(document).on('click', '.buy-accordion-label.is-check', termAllCheck);

  //cart payment
  $(document).on('click', '.box-radio-label', paymentHandler);

  //ar carat
  $(document).on('click', '.try-item-item', arCarat);

  //login keyboard
  $(document).on('click', '.login-keyboard-btn', openKeyboard);

  // gift card select
  $(document).on('click', '.giftcard-box', giftCardSelect);

  //search text clear
  $(document).on('focus blur keyup', '.search-top-input', viewClear);
  $(document).on('focus blur keyup', '.static-search-input', viewClear);
  $(document).on('click', '.search-top-clear', clearInput);

  //AR guide
  if($('.ar-guide-content-item').length){
    arInterval();
  }
  $(document).on('click', '.ar-guide-close-btn', closeArGuide);

  //option today deliver
  $(document).on('click', '.option-today-label', checkToday);

  //phone selectbox
  $(document).on('click', '.input-phone-label', phoneSelect);
  $(document).on('click', '.input-phone-link', phoneListSelect);

  //sns share
  $(document).on('click', '.buy-link-item.link-share', linkShare);

  //change size
  $(document).on('click', '.change-size', changeSize);

  //term search
  $(document).on('click', '.subtab-link', searchTerm);

  //radio cart
  $(document).on('click', '.radio-cart', selectCartRadio);
  $(document).on('click', '.checkbox-cart .check-box', selectCartCheck);

  //app setting
  $(document).on('click', '.app-setting-checkbox', appSettingCheck);

  //ar enter
  if( $('.ar-wrap').length>0 ){
    $('.ar-wrap').addClass('on');
    $('#arEarring').addClass('on');

    //셔터 가이드
    $('.try-item-shutter').addClass('is-active');
    setTimeout(function() {
      $('.try-item-shutter').removeClass('is-active');
    }, 2000);
    //화면 클릭시 셔터 가이드 닫기
    if( $('.try-item-shutter').hasClass('is-active') ){
      $(document).click(function(){
        $('.try-item-shutter').removeClass('is-active');
      });
    }
  }

  if( $('.main-first').length>0 ){//메인 첫 진입시 조건 추가하시면 될 것 같습니다. 
    preload();
  }

  //scroll-tab
  if( $('.pd-list-submenu').length>0 ){
    scrollCenterORI(".is-current", 300);
  }

  //상품리스트 한줄인 경우 제어
  setRow();
});
//ready

$(window).on('load', function() {
  function imgloading (imageArray) {
    var n = imageArray.length;
    for (var i = 0; i < n; i++) {
      var img = new Image();
      img.src = imageArray[i];
    }
  }
  imgloading([ '../../assets/images/content/ar_button_B.png', '../../assets/images/content/ar_button_A.png' ]);
});

// Preload Image
function preload() {
  $('#link-ar').addClass('is-before').one('oAnimationEnd animationend webkitAnimationEnd', function(){$(this).removeClass('is-before')});
}

//Buy
function buyItem() {
  if (!$('.bottom-bar-left').hasClass('on')) {
    $('html, body').addClass('no-scroll');
    $('#optionPopup').addClass('on');
    $('.popup-option-box').removeClass('off');
    $('.bottom-bar-left').addClass('on');
    $('.option-btn-cart').addClass('on');
    $('.option-btn-buy').addClass('on');
  }else {
    if (!$('.option-result-item').length > 0) {
      //옵션 선택 확인 팝업
      openPopup('noOptionPopup');
    }
  }
  //옵션 선택 완료 체크
  if ($('.option-result-item').length > 0) {
    $('.option-btn-left').removeClass('no-select');
    $('.option-btn-right').removeClass('no-select');
  } else {
    $('.option-btn-left').addClass('no-select');
    $('.option-btn-right').addClass('no-select');
  }
}

//AR Buy
function arBuyItem() {
  //옵션 선택 완료 체크
  if ($('.option-result-item').length > 0) {
    $('.option-btn-left').removeClass('no-select');
    $('.option-btn-right').removeClass('no-select');
  } else {
    $('.option-btn-left').addClass('no-select');
    $('.option-btn-right').addClass('no-select');
  }
}
function arBuy() {
  if (!$('.option-result-item').length > 0) {
    //옵션 선택 확인 팝업
    openPopup('noOptionPopup');
  }
}

function cartItem() {
  if (!$('.option-result-item').length > 0) {
    //옵션 선택 확인 팝업
    openPopup('noOptionPopup');
  }else {
    //장바구니 팝업
    openPopup('cartPopup');
  }
}

function giftItem() {
  if (!$('.option-result-item').length > 0) {
    //옵션 선택 확인 팝업
    openPopup('noOptionPopup');
  }
}

function closeItem() {
  if ($('.bottom-bar-left').hasClass('on')) {
    $('html, body').removeClass('no-scroll');
    $('#optionPopup').removeClass('on');
    $('.popup-option-box').addClass('off');
    $('.bottom-bar-left').removeClass('on');
    $('.option-btn-cart').removeClass('on');
    $('.option-btn-buy').removeClass('on');
    $('.option-btn-right').removeClass('no-select');
  }else if( $(this).parents('.popup').hasClass('pop') ) {
    $('html, body').removeClass('no-scroll');
    $('.popup').removeClass('on');
    $('.popup-option-box').addClass('off');
    $('.bottom-bar.pop').removeClass('on');
    $('#arSave').addClass('on');
    $('.ar-content-dim').addClass('on');
  }
}

function closeItemDim() {
  if( !$(this).parents('.popup').hasClass('ar') ){
    if ($('.bottom-bar-left').hasClass('on')) {
      $('html, body').removeClass('no-scroll');
      $('#optionPopup').removeClass('on');
      $('.popup-option-box').addClass('off');
      $('.bottom-bar-left').removeClass('on');
      $('.option-btn-cart').removeClass('on');
      $('.option-btn-buy').removeClass('on');
      $('.option-btn-right').removeClass('no-select');
    }else if( $(this).parents('.popup').hasClass('pop') ) {
      $('html, body').removeClass('no-scroll');
      $('.popup').removeClass('on');
      $('.popup-option-box').addClass('off');
      $('.bottom-bar.pop').removeClass('on');
      $('#arSave').addClass('on');
      $('.ar-content-dim').addClass('on');
    }
  }
}

//Option Result Close
function closeOptionResult() {
  $(this).parents('.option-result-item').remove();
}
//Option Select
function selectOption() {
  var optionItem = $(this).parents('.option-select-item');
  var optionList = $(this).siblings('.option-select-list');
  if( !$(this).parents('.popup').hasClass('ar') ){
    if (optionList.hasClass('on')) {
      $(this).removeClass('on');
      optionList.removeClass('on');
    } else {
      if( !$(this).hasClass('disabled') ){
        $(this).addClass('on');
        optionList.addClass('on');
      }
    }
  }else {//ar인 경우
    if (optionList.hasClass('on')) {
      $(this).removeClass('on');
      optionList.removeClass('on');
      optionItem.removeClass('on');
    } else {
      if( !$(this).hasClass('disabled') ){
        $(this).addClass('on');
        optionList.addClass('on');
        optionItem.addClass('on');
      }
    }
  }
}
function selectPlainOption() {
  var optionList = $(this).siblings('.option-select-plain-list');
  var optionStaticList = $(this).siblings('.option-select-static-list');
  if (optionList.length > 0) {
    if (optionList.hasClass('on')) {
      $(this).removeClass('on');
      optionList.removeClass('on');
    } else {
      $(this).addClass('on');
      optionList.addClass('on');
    }
  } else {
    if (optionStaticList.hasClass('on')) {
      $(this).removeClass('on');
      optionStaticList.removeClass('on');
    } else {
      $(this).addClass('on');
      optionStaticList.addClass('on');
    }
  }
}
function selectOptionMulti() {
  var optionListMulti = $(this).siblings('.option-select-list-multi');
  if (optionListMulti.hasClass('on')) {
    if (optionListMulti.find('input[type="checkbox"]:checked').length > 0) {
      optionListMulti.removeClass('on');
      $(this).addClass('selected').removeClass('on');
    } else {
      $(this).removeClass('on');
      optionListMulti.removeClass('on');
    }
  } else {
    if( !$(this).hasClass('disabled') ){
      $(this).addClass('on');
      optionListMulti.addClass('on');
    }
  }
}
//Option Check
function checkOption() {
  //checkbox
  $(this).parents('.option-select-list').find('input[type="checkbox"]').prop('checked', false);
  $(this).find('input[type="checkbox"]').prop('checked', true);
  $(this).parents('.option-select-plain-list').find('input[type="checkbox"]').prop('checked', false);
  $(this).parents('.option-select-static-list').find('input[type="checkbox"]').prop('checked', false);

  var selectBox = $(this).parents('.option-select-item');
  var curText = $(this).children('.select-row-text').text();
  var selectPlainBox = $(this).parents('.option-select-plain-item');
  var curPlainText = $(this).children('.select-plain-row-text').text();

  //change text
  selectBox.removeClass('on').addClass('selected');
  selectBox.find('.option-select-text').text(curText);
  selectBox.find('.option-select-label').removeClass('on').addClass('selected');
  selectBox.find('.option-select-list').removeClass('on');
  selectBox.find('.option-select-extra').text('');

  // with no checkbox
  if ($('.option-select-plain-list')) {
    //change text
    selectPlainBox.find('.option-select-plain-text').text(curPlainText);
    selectPlainBox.find('.option-select-plain-label').removeClass('on').addClass('selected');
    selectPlainBox.find('.option-select-plain-list').removeClass('on');
    $(this).parent('li').siblings('li').find('.option-select-plain-row').removeClass('selected');
    $(this).addClass('selected');
  }
  if ($('.option-select-static-list')) {
    //change text
    selectPlainBox.find('.option-select-plain-text').text(curPlainText);
    selectPlainBox.find('.option-select-plain-label').removeClass('on').addClass('selected');
    selectPlainBox.find('.option-select-static-list').removeClass('on');
    if ($(this).attr('for') === "mesInput") {
      // 메시지 직접 입력
      $('#mesInputBox').addClass('on');
    } else {
      $('#mesInputBox').removeClass('on');
    }
  }
}

//Option Check Multiple
function checkOptionMulti() {
  var selectBox = $(this).parents('.option-select-item');

  //change text
  selectBox.find('.option-select-label').removeClass('on').addClass('selected');
  var curText = [];
  selectBox.find($('input[type=checkbox]:checked')).each(function (i) {
    curText[i] = ' ' + $(this).siblings('.select-row-text').text();
  });
  if (selectBox.find($('input[type=checkbox]:checked')).length > 0) {
    selectBox.find('.option-select-text').text(curText);
  } else {
    selectBox.find('.option-select-text').text('상품을 선택하세요');
    selectBox.find('.option-select-label-multi').removeClass('selected');
  }
}

//Option Input Select
function selectInput() {
  if( $('.option-select-input').focus() ){
    $(this).parents('.option-select-input-box').addClass('on');
  }else {
    $(this).parents('.option-select-input-box').removeClass('on');
  }
}

//QNA Input Change
function changePopInput() {
  var poopupBox = $(this).parents('.popup-full');
  
  if( !$(this).val() == "" ){
    poopupBox.addClass('with-btn');
  }else {
    poopupBox.removeClass('with-btn');
  }
}

//select option input change
function changeOptionInput() {
  var optionInputBox = $(this).parents('.option-select-input-box'),
    optionItem = $(this).parents('.option-select-item'),
    optionSaveButton = optionInputBox.next('.option-input-save-btn');

  if (!$(this).val() == "") {
    optionInputBox.addClass('is-smaller');
    optionItem.addClass('bg-white');
    optionSaveButton.removeClass('is-none');
  } else {
    optionInputBox.removeClass('is-smaller');
    optionItem.removeClass('bg-white');
  }
}

function optionDeleteSaveButton() {
  var optionInputBox = $(this).siblings('.option-select-input-box');

  if (!$(this).hasClass('is-none')) {
    $(this).addClass('is-none');
    optionInputBox.removeClass('is-smaller');
  }
}

//popup open
function openPopup(popupName) {
  $("#"+ popupName).addClass("on");

  if( !$('.ar-wrap').length>0 ){
    $('html, body').addClass('no-scroll');
  }
}

//popup Close
function closePopup(popupName) {
  $("#"+ popupName).removeClass("on");
  $('html, body').removeClass('no-scroll');
}

//Menu Toggle
function gnbMenuToggle() {
  var dep1Menu = $('.menu .dep1-list > li');
  var $this = $(this).parent('li');
  if ($this.hasClass('on')) {
    $this.removeClass('on');
    $this.children('.dep2-list').slideUp(300);
  } else {
    dep1Menu.removeClass('on');
    dep1Menu.children('.dep2-list').slideUp(300);
    $this.addClass('on');
    $this.children('.dep2-list').slideDown(300);
  }
}

//Gnb Display Handler
var gnbWrap = $('#gnbWrap');
var menuWrapTop = $('.menu-wrap.top');
var FilterWrap = $('.menu-wrap.filter');
var headerBtn = $('.header-title .title-btn');
var headerBackBtn = $('.header-left .header-btn');

function gnbDisplayHandler() {
  if (menuWrapTop.hasClass('show')) {
    gnbClose();
  }
  $('html, body').addClass('no-scroll');
  if (gnbWrap) {
    gnbWrap.parent('.menu-wrap').addClass('show');
    $('#header').css({
      'z-index': '-1',
      'transition': 'cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s'
    });
  } else {
    return false;
  }
}

// Filter Display Handler
function FilterDisplayHandler () {
  $('html, body').addClass('no-scroll');
  if (FilterWrap) {
    FilterWrap.addClass('show');
    $('#header, .bottom-nav').css({
      'z-index': '-1',
      'transition': 'cubic-bezier(0.645, 0.045, 0.355, 1) 0.5s'
    });
  } else {
    return false;
  }
}

//Gnb Close
function gnbClose() {
  $('html, body').removeClass('no-scroll');
  $('#header, .bottom-nav').removeAttr('style');
  if (gnbWrap.parent('.menu-wrap').hasClass('show')) {
    gnbWrap.parent('.menu-wrap').removeClass('show');
  }
  if (headerBackBtn) {
    headerBackBtn.css({
      'transform': 'none',
      'opacity': 1
    });
    headerBtn.removeClass('on');
    menuWrapTop.removeClass('show');
  }
  if (FilterWrap.hasClass('show')) {
    FilterWrap.removeClass('show');
  }
}

// Dep2 Menu Handler
function Dep2MenuHandler() {
  var $this = $(this);

  if ($this.hasClass('on')) {
    $this.removeClass('on');
    menuWrapTop.removeClass('show');
    gnbClose();
  } else {
    $('html, body').addClass('no-scroll');
    $this.addClass('on');
    menuWrapTop.addClass('show');
    headerBackBtn.css({
      'transform': 'translateX(-200%)',
      'opacity': 0
    });
  }
}

//Like Change
function changeLike() {
  $(this).toggleClass('is-active');
}

//Detail Thumbnail Tab
function DetailThumTab() {
  var tabMenu = $(this).parent('.detail-slide-tab-item');
  var tabSubMenu = $(this).closest('.detail-slide').find('.detail-thumbnail-tab-item');
  var optionTabSubMenu = $(this).closest('.detail-slide').find('.detail-slide-option-item');
  var idx = tabMenu.index();
  tabMenu.addClass('is-current').siblings('.detail-slide-tab-item').removeClass('is-current');
  tabSubMenu.eq(idx).addClass('is-current').siblings('.detail-thumbnail-tab-item').removeClass('is-current');
  optionTabSubMenu.eq(idx).addClass('is-current').siblings('.detail-slide-option-item').removeClass('is-current');
  var windowLeft = $(".detail-slide-tab").offset().left;
  var itemLeft = $(this).offset().left;
  var barLeft = itemLeft - windowLeft;
  $(".detail-slide-tab-bar").addClass("is-view").css({
    'transform': `translateX(${barLeft}px)`
  });
}

//Detail Carat click
function DetailCarat() {
  var colorBox = $(this).parents('.detail-option-color-item'),
    caratBox = $(this).siblings('.detail-option-carat'),
    textVal = caratBox.find('.detail-option-carat-item').eq(0).text();

  $('.detail-option-carat').removeClass('is-active');
  $('.detail-option-carat-item').removeClass('is-current');
  caratBox.addClass('is-active');
  caratBox.find('.detail-option-carat-item').eq(0).addClass('is-current');
  $(this).find('.detail-option-color-sub').text(textVal);
}

//Detail option Tab
function DetailOptionTab() {
  var val = $(this).text();
  $('.detail-option-color-sub').text(val);
  var tabMenu = $(this).parent('.detail-option-carat-item');
  var tabSubMenu = $(this).closest('.detail-option-box').find('.detail-option-slidetab-item');
  var idx = tabMenu.index();
  tabMenu.addClass('is-current').siblings('.detail-option-carat-item').removeClass('is-current');
  tabSubMenu.eq(idx).addClass('is-current').siblings('.detail-option-slidetab-item').removeClass('is-current');
}

function myTab() {
  var tabMenu = $(this).parent('.my-tab-list-item');
  var tabContent = tabMenu.parent('.my-tab-list').siblings('.my-tab-con').find('.my-tab-con-inner');
  var idx = tabMenu.index();

  tabMenu.addClass('is-current').siblings('.my-tab-list-item').removeClass('is-current');
  tabContent.eq(idx).addClass('is-current').siblings('.my-tab-con-inner').removeClass('is-current');

  var checkBox = $(this).parents('.buy-accordion-box').find('.cart-accordion-inner-box.check');
  if(idx == 1){
    checkBox.addClass('is-active');
  }else {
    checkBox.removeClass('is-active');
  }

  if( $(".subtab").length ){
    var targetBar = $(".subtab-bar");
    targetBar.each(function() {
      var tabBox = $(this).parents(".subtab");
      var innerLeft = tabBox.offset().left;
      var barWidth = tabBox.find(".subtab-item.is-current").width();
      var barLeft = tabBox.find(".subtab-item.is-current").offset().left - innerLeft;
      $(this).css({'width' : barWidth, 'left' : barLeft});
    });
  }
}

//
//* Swiper Slide *
//Detail Thumbnail Slide
if($(".detail-slide-thumbnail-container").length > 0){
  function DetailSl(){
    var DetailThumbnailSl = new Swiper('.detail-slide-thumbnail-container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      scrollbar: {
        el: '.detail-slide-thumbnail-scrollbar',
        draggable: true,
      },
    });
  }
  $(document).ready(function(){
    DetailSl()
    $(".detail-option-color-box, .detail-option-link, .detail-option-stone-box").on('click', function () {
      DetailSl()
    });
  });
}


if($(".event-slide-container").length > 0){
  var eventlSl = new Swiper('.event-slide-container', {
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 'auto',
    spaceBetween: 8,
    freeMode: true,
    scrollbar: {
      el: '.event-slider-scrollbar',
      draggable: true,
    },
  });
}

if($('.main-hero-slide').length>0 ){
  var swiperMain = new Swiper('.main-hero-slide-container', {
    pagination: {
      el: '.main-hero-pagination',
      type: 'progressbar',
    },
  });

  //slide change event
  swiperMain.on('slideChange', function () {
    console.log('slide changed');
  });

  swiperMain.on('touchStart', function (event) {
    var touch = event.touches[0];
    touchstartX = touch.clientX;
    touchstartY = touch.clientY;
  }, false);

  swiperMain.on('touchEnd', function (event) {
    if(event.touches.length == 0) {
      var touch = event.changedTouches[event.changedTouches.length - 1];
      touchendX = touch.clientX;
      touchendY = touch.clientY;
      touchoffsetX = touchendX - touchstartX;
      touchoffsetY = touchendY - touchstartY;

      if(Math.abs(touchoffsetX) >= 10 && Math.abs(touchoffsetY) <= 50) {
        if(touchoffsetX > 0){ //우측으로 슬라이드하는 경우
          if( swiperMain.realIndex == 0 ){ //첫번째 슬라이드인 경우
            alert("event here");
          }
        }
      }
    }
  }, false);
}

if($('.main-gift-slide').length>0 ){
  var swiper = new Swiper('.main-gift-slide-container', {
    slidesPerView: 'auto',
    spaceBetween: 8,
    pagination: {
      clickable: true,
    },
  });
}

if($(".brand-hero-wrap").length > 0){
  new Swiper('.hero-swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.brand-hero-pagination',
      type: 'progressbar',
    },
  });
}

if($(".brand-now-wrap").length > 0){
  new Swiper('.now-swiper-container', {
    slidesPerView: 1,
    pagination: {
      el: '.brand-now-pagination',
      type: 'progressbar',
    },
  });
}

if($(".gift-package-wrap").length > 0){
  var menu = ['now', '2000', '1990'];
  new Swiper('.gift-package-container', {
    effect: 'fade',
    slidesPerView: 1,
    speed: 600,
    pagination: {
      el: '.gift-package-pagination',
			clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
    },
  });
}

//scrollMagic Animetion
if($(".ani-banner").length > 0){
  $('.ani-banner').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

if($(".event-banner").length > 0){
  $('.event-banner').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

if($(".count-banner").length > 0){
  $('.count-banner').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
      reverse: false,
    })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}


if($(".pd-ani-banner-thumbanil").length > 0){
  $('.pd-ani-banner-thumbanil').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
      reverse: false,
    })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}


if($(".pd-ani-banner-content").length > 0){
  $('.pd-ani-banner-content').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
      reverse: false,
    })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
  
}

if($(".main-hero").length > 0){
  $('.main-hero').each(function () {
    var controller = new ScrollMagic.Controller();
    var scrollHero = $(this);
    var scrollContent = $('.main-content');
    var tweenHero = TweenMax.fromTo(scrollHero, {y:0}, {y:170});
    var sceneHero = new ScrollMagic.Scene({
      triggerElement: scrollContent,
      triggerHook: 1,
      duration: $(".main-hero").height()
    })
      .setTween(tweenHero)
      .addTo(controller);
  });
}

if($(".main-banner").length > 0){
  $('.main-banner').each(function () {
    var scrollText = $(this).find(".main-banner-content");
    var controller = new ScrollMagic.Controller();
    var tweenText = TweenMax.fromTo(scrollText, {y:100}, {y:-40});

    var sceneText = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.8,
      duration: 1000
    })
      .setTween(tweenText)
      .addTo(controller);
  });
}

function giftsPopup() {
  $('.gift-post').each(function () {
    var controller = new ScrollMagic.Controller();
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

if( $('.brand-history-item').length>0 ){
  var controller = new ScrollMagic.Controller();
  $('.brand-history-item').each(function () {
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

//filter sort box
var $select_bx = $("div.sort-select-item");

$select_bx.find(".sort-select-label").click(function (e) {
  e.preventDefault();
  $(this)
    .parent()
    .toggleClass("is-on")
    .find("ul.sort-select-list")
    .stop()
    .slideToggle(100);
  $("div.sort-select-item.is-on")
    .not($(this).parent())
    .removeClass("is-on")
    .find("ul.sort-select-list")
    .stop()
    .slideUp(100);
});

$select_bx.on("click", ".sort-select-list li a", function (e) {
  e.preventDefault();
  var _this = $(this);
  var this_text = _this.text();
  _this.closest(".sort-select-item").removeClass("is-on");
  _this.parent("li").addClass("is-current").siblings("li").removeClass("is-current");
  _this
    .closest("ul.sort-select-list")
    .stop()
    .slideUp(100)
    .prev()
    .text(this_text);
});

$(document).mouseup(function (e) {
  e.preventDefault();
  if (!$select_bx.is(e.target) && $select_bx.has(e.target).length === 0) {
    $select_bx
      .removeClass("is-on")
      .children("ul.sort-select-list")
      .stop()
      .slideUp(100);
  }
});

//fordable
function foldable() {
  var accItem = $(this).parent();

  if (!accItem.hasClass('is-active')) {
    accItem.addClass('is-active');
  } else {
    accItem.removeClass('is-active');
  }
}

//product detail
function prdConHeight() {
  var prdContent = $(this).siblings('.prd-detail-con');

  if (!$(this).hasClass('is-active')) {
    $(this).addClass('is-active');
    prdContent.addClass('height-100');
  } else {
    $(this).removeClass('is-active');
    prdContent.removeClass('height-100');
  }
}

//qna
function qnaOpen(e) {
  var qnaItem = $(this).parent();

  if ($(e.target).is('.thumb-edit-btn')) {
    return;
  }

  if (!qnaItem.hasClass('is-open')) {
    qnaItem.addClass('is-open').siblings().removeClass('is-open');
  } else {
    qnaItem.removeClass('is-open');
  }
}

//sub tab active action
function subTabAction() {
  $(this).parent().addClass("is-current").siblings().removeClass("is-current");
  var innerLeft = $(this).parents(".subtab").offset().left;
  var barWidth = $(this).width();
  var barLeft = $(this).offset().left - innerLeft;
  var targetBar = $(this).parents(".subtab").find(".subtab-bar");
  targetBar.css({'width' : barWidth, 'left' : barLeft}); 
};

$(document).ready(function () {
  if( $(".subtab").length ){
    var targetBar = $(".subtab-bar");
    targetBar.each(function() {
      var tabBox = $(this).parents(".subtab");
      var innerLeft = tabBox.offset().left;
      var barWidth = tabBox.find(".subtab-item.is-current").width();
      var barLeft = tabBox.find(".subtab-item.is-current").offset().left - innerLeft;
      $(this).css({'width' : barWidth, 'left' : barLeft});
    });
  }
});

$(window).resize(function () {
  if( $(".subtab").length ){
    var targetBar = $(".subtab-bar");
    targetBar.each(function() {
      var tabBox = $(this).parents(".subtab");
      var innerLeft = tabBox.offset().left;
      var barWidth = tabBox.find(".subtab-item.is-current").width();
      var barLeft = tabBox.find(".subtab-item.is-current").offset().left - innerLeft;
      $(this).css({'width' : barWidth, 'left' : barLeft});
    });
  }
});

// Range
var vala, valb;
$(document).on("change", "#range-7a, #range-7b", function() { 
  vala = $("#range-7a").val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  valb = $("#range-7b").val().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $(".range-result").text(vala+"~"+valb);
})
$(".range-btn").on("click", function() {
  var rageMin = $(this).attr("data-min");
  var rageMax = $(this).attr("data-max");
  $("#range-7a").val(rageMin);
  $("#range-7b").val(rageMax);
  $("#range-7a, #range-7b").slider( "refresh" ).change();
  $(".range-btn").removeClass('on');
  $(this).addClass('on');
  return false;
});

// header, bottom bar, filter scroll action
var lastScrollTop = 0;
var delta = 5;
var didScroll;
if( $('.pd-list-filter-head').length ){
  var filterPos = $('.pd-list-filter-head').offset().top;
}
if( $('.evant-select').length ){
  var eventSelectPos = $('.evant-select').offset().top;
}
if( $('.main-content').length ){
  var mainContentPos = $('.main-content').offset().top;
}
window.onscroll = function(e) {
  didScroll = true;
  
  var nowScrollTop = window.scrollY;
  if (nowScrollTop > filterPos) {
    $('.pd-list-filter-head').addClass('sticky');
  } else {
    $('.pd-list-filter-head').removeClass('sticky');
  }

  if (nowScrollTop > eventSelectPos) {
    $('.evant-select').addClass('is-sticky');
  } else {
    $('.evant-select').removeClass('is-sticky');
  }

  if (nowScrollTop > ( mainContentPos - 150) ) { //스크롤매직으로 인한 150px 마진 계산
    $('.main-list-submenu').addClass('is-active');
  } else {
    $('.main-list-submenu').removeClass('is-active');
  }
};

setInterval(function () {
  if (didScroll) {
    if( $('.pd-list-card-wrap.best').length>0 ){
      if( $('.product-post-item').length>2 ){
        hasScrolled();
        didScroll = false;
      }
    }else {
      hasScrolled();
      didScroll = false;
    }
  }
}, 250);

function hasScrolled() {
  var nowScrollTop = window.scrollY;
  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
    return;
  }
  if (nowScrollTop > lastScrollTop && nowScrollTop > 1) {
    //Scroll down
    $('.bottom-nav').addClass('hide');
    $('#header').addClass('hide');
    $('.pd-list-submenu').addClass('hide');
    $('.main-list-submenu').addClass('hide');
    $('.cart-filter').addClass('hide');
    $('.arriving-banner').addClass('hide');
  } else {
    if (nowScrollTop + $(window).height() < $(document).height()) {
      //Scroll up
      $('.bottom-nav').removeClass('hide');
      $('#header').removeClass('hide');
      $('.pd-list-submenu').removeClass('hide');
      $('.main-list-submenu').removeClass('hide');
      $('.cart-filter').removeClass('hide');
      $('.arriving-banner').removeClass('hide');
    }
  }
  lastScrollTop = nowScrollTop;
}

// Bottom fixed buttons
function bottomFixedScroll() {
  var scroll = $(window).scrollTop(),
      detailCon = $('.prd-detail').offset().top,
      chatbotBtn = $('.quick-chatbot .bottom-fixed-btn'),
      topBtn = $('.quick-top .bottom-fixed-btn');

  if (scroll > detailCon) {
    chatbotBtn.addClass('is-move');
    topBtn.addClass('is-block');
  } else {
    chatbotBtn.removeClass('is-move');
    topBtn.removeClass('is-block');
  }
}

//ScrolTop move
function scrollTop(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 200);
}

//option number spinner
var numberSpinner = (function() {
  $('.spinner-btn').click(function() {
    var btn = $(this),
      oldValue = btn.siblings('.spinner-value').text(),
      newVal = 0;

      if ($(this).hasClass('spinner-add')) {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue > 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
    btn.siblings('.spinner-value').text(newVal);
  });
})();

//guide popup
function guidePopup() {
  var current = $(this).closest(".guide-detail-popup-inner").attr('data-index');
  $('#' + current).addClass("is-view").siblings().removeClass("is-view");

  if($('#' + current).length == 0){
    $(".guide-detail-popup").fadeOut(100);
    $("html").removeClass("no-scroll")
  }
}

// cart accordion
function cartAccordion() {
  $(this).toggleClass('open');
}


//drop notice
function dropNotice() {
  $(this).closest(".drop-list-item").toggleClass("is-current").siblings().removeClass("is-current");
};

//AR popup Close
function closeArPopup(popupName) {
  $('.popup-option-box').addClass('off');
  $('.popup-ar-box').removeClass('on');
  $('.ar-guide').removeClass('on');
  $('.ar-content-dim').removeClass('on');
  
  openArPopup(popupName);
}

//AR popup open
function openArPopup(popupName) {
  $("#"+ popupName).addClass('on');

  //arSave dim
  if( popupName == 'arSave'){
    if( !$('.ar-content-dim').hasClass('on') ){
      $('.ar-content-dim').addClass('on');
    }
  }
  
  if( popupName != 'arRing' && popupName != 'arEarring' ){
    $('.ar-wrap').removeClass('on');
  } else {
    $('.ar-wrap').addClass('on');
    if(popupName == 'arRing'){
      $('.ar-face').addClass('hide');
    }else {
      $('.ar-face').removeClass('hide');
    }
  }
}

//AR save
function arSave() {
  closeArPopup('arSave');
}

//Ar Slide 
if($(".detail-option-color-container.ar").length > 0){
  var arItemSl = new Swiper('.detail-option-color-container.ar', {
    loop: true,
    slidesPerView: 4.3,
    centeredSlides: true,
  });
}

// AR Engrave
function arEngrave() {
  var inputBox = $(this).siblings('.option-select-input-box');

  inputBox.removeClass('on');
  if (inputBox.find('.option-select-input').val() != "") {
    inputBox.addClass('is-finished');
  }
}

function cartAllCheckSub() {
  var label = $(this).find(".buy-accordion-checkbox");
  var subInput = $(".buy-accordion-checkbox");
  $(label).change(function(){
    if($(label).is( ":checked") == true) {
      $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]:not(:disabled)").prop("checked",true);
    } else {
      $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]").prop("checked",false);
    }
    if (subInput.length > subInput.filter(":checked").length) {
      $(".cart-filter-all").prop("checked",false);
    } else {
      $(".cart-filter-all").prop("checked",true);
    }
  });
};

function cartBasicCheck() {
  var label = $(this);
  var subInput = $(label).closest(".cart-inner").find(".buy-accordion-box input[type=checkbox]:not(:disabled)");
  var subInputDrop = $(label).closest(".cart-inner").find(".buy-accordion-box .check-dropbox-text input[type=checkbox]");
  $(label).change(function(){
    if( $(".check-dropbox-text").length>0 ){
      if (subInputDrop.length > subInputDrop.filter(":checked").length) {
        $(label).closest(".buy-accordion").find(".buy-accordion-checkbox").prop("checked",false);
      } else {
        $(label).closest(".buy-accordion").find(".buy-accordion-checkbox").prop("checked",true);
      }
    }else{
      if (subInput.length > subInput.filter(":checked").length) {
        $(".cart-filter-all").prop("checked",false);
        $(label).closest(".buy-accordion").find(".buy-accordion-checkbox").prop("checked",false);
      } else {
        $(".cart-filter-all").prop("checked",true);
        $(label).closest(".buy-accordion").find(".buy-accordion-checkbox").prop("checked",true);
      }
    }
  });
};

//term all Check
function termAllCheck() {
  var label = $(this).find(".buy-accordion-checkbox");
  $(label).change(function(){
    if($(label).is( ":checked") == true) {
      $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]:not(:disabled)").prop("checked",true);
    } else {
      $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]").prop("checked",false);
    }
  });
};

// cart show item more
function showOrderItem () {
  $this = $(this);
  if ($('.thumb-accor-wrap')) {
    $this.parents('.thumb-accor-wrap').toggleClass('show-all');
  }
  if ($('.cart-accor-wrap')) {
    $this.parents('.cart-accor-wrap').toggleClass('show-all');
  }
}

// gift show item more
function showTopBannerItem () {
  $this = $(this);
  $this.parents('.pd-count-topbanner').addClass('show-all');
  $this.parent().css('display', 'none');
}

//AR carat select
function arCarat() {
  var arCaratImg = $(this).find('img');
  var arCaratImgSrc = arCaratImg.attr('src').replace('.png', '');
  if (!$(this).hasClass('active')) {
    $('.try-item-item').removeClass('active');
    $(this).addClass('active');
    $('.try-item-link img').each (function () {
      $(this).attr('src', $(this).attr('src').replace('-active', ''))
    });
    arCaratImg.attr('src', arCaratImgSrc+'-active'+'.png');
  }
}

//open keyboard
function openKeyboard() {
  $(this).toggleClass('is-open');
  $(this).parents('.login-box').find('.login-keyboard-box').toggleClass('is-open');
}

// gift card select
function giftCardSelect () {
  var $thisClass = this.className.split(/\s/).filter(function(name) {
    return name.indexOf('card') === 0;
  });
  var cardText = $(this).children('.giftcard-text').text();
  $('.giftcard-box').removeClass('active');
  $(this).addClass('active');
  $('.giftcard-cont-wrap').attr('class', 'giftcard-cont-wrap').addClass($thisClass);
  $('.giftcard-cont-wrap .giftcard-cont-title').text(cardText)
}

//input Clear
function viewClear(e) {
  e.preventDefault();
  if($(this).val().length) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
}
function clearInput(e) {
  e.preventDefault();
  $(this).prev('input').val("").removeClass('active');
  return false;
}

//AR interval
function arInterval(e) {
  var items = $('.ar-guide-content-list li'),
  itemsLength = items.length,
  time = 6000,
  i = 1;
  
  setInterval(() => {
    if( items.eq(itemsLength-1).hasClass('active') ){
      i = 0;
    }
    items.each(function() {
      $(this).removeClass('active');
      $('.ar-guide-step li').removeClass('active');
    });
    items.eq(i).addClass('active');
    $('.ar-guide-step li').eq(i).addClass('active');
    i++;
  }, time);

  items.on('click', function () {
    items.removeClass('active');
    $('.ar-guide-step li').removeClass('active');
    $(this).addClass('active');
    $('.ar-guide-step li').eq($(this).index()).addClass('active');
    i = $(this).index() + 1;
  });
}
function closeArGuide() {
  var guideBox = $(this).parents('.ar-guide');
  if( guideBox.prop("id") == "arGuide" ){
    $('#arGuideFace').addClass('on');
  }
  $('html, body').removeClass('no-scroll');
  guideBox.removeClass('on');
}

function checkToday(){
  var checkbox = $(this).find('.option-today-checkbox');

  if( checkbox.prop("checked") == true ){
    $(this).parents('.option-today').addClass('on');
    $('.option-btn-right').addClass('on');
    $('.option-btn-left').addClass('hide');
  }else {
    $(this).parents('.option-today').removeClass('on');
    $('.option-btn-right').removeClass('on');
    $('.option-btn-left').removeClass('hide');
  }
}

//option input focus
function inputFocusin(){
  $(this).parents('.option-select-input-box').addClass('on');
  $(this).parents('.option-select-input-box').removeClass('is-finished');
}
function inputFocusout(){
  if( !$(this).parents('.popup').hasClass('ar') ){
    $(this).parents('.option-select-input-box').removeClass('on');
  }else { //ar인 경우
    if( $(this).val() == "" ){
      $(this).parents('.option-select-input-box').removeClass('on');
    }
  }
}

//phone input select
function phoneSelect(){
  if(!$(this).hasClass('open')){
    $(this).addClass('open').siblings('.input-phone-box').addClass('open');
    $(this).parents('.today-address-list').addClass('append');
    $(this).parents('.gift-certify-inner').addClass('append');
    $(this).parents('.gift-deliver-box').addClass('append');
  } else {
    $(this).removeClass('open').siblings('.input-phone-box').removeClass('open');
    $(this).parents('.today-address-list').removeClass('append');
    $(this).parents('.gift-certify-inner').removeClass('append');
    $(this).parents('.gift-deliver-box').removeClass('append');
  }
}
function phoneListSelect(){
  var curText = $(this).text();
  $(this).parents('.input-phone-item').addClass('active').siblings().removeClass('active').parents('.input-phone-box').removeClass('open');
  $(this).parents('.today-address-contact').find('.input-phone-label').removeClass('open').find('.input-phone-text').text(curText);
  $(this).parents('.today-address-list').removeClass('append');
  $(this).parents('.gift-certify-inner').removeClass('append');
  $(this).parents('.gift-deliver-box').removeClass('append');
}

function linkShare(){
  if( $('#sharePopup').length>0 ){
    if( !$(this).hasClass('on') ){
      $(this).addClass('on');
      $('#sharePopup').addClass('active');
    }else {
      $(this).removeClass('on');
      $('#sharePopup').removeClass('active');
    }
  }
}

//change size
function changeSize(){
  $(this).parents('.gift-item').find('.gift-item-size').addClass('on');
}

function paymentHandler () {
  var thisInput = $($(this).siblings('input'));
  if (thisInput.attr('id') === 'creditCard') {
    $('.cart-pay-box').removeClass('show');
    $('#credit').addClass('show');
  } else if (thisInput.attr('id') === 'bankTransfer') {
    $('.cart-pay-box').removeClass('show');
    $('#bank').addClass('show');
  } else {
    $('.cart-pay-box').removeClass('show');
  }
}

function hearderChange() {
  var scroll = $(window).scrollTop(),
      headerHight = $('.header').outerHeight(),
      targetHeader = $('.header.transparent');

  if (scroll > headerHight) {
    targetHeader.addClass('is-active');
  } else {
    targetHeader.removeClass('is-active');
  }
}

// datepicker
if( $(".datepicker").length>0 ){

  var applyDateStart ="";
  var applyDateEnd ="";

  $(".datepicker").datepicker();

  ( function( factory ) {
    if ( typeof define === "function" && define.amd ) {
  
      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );월
    } else {
  
      // Browser globals
      factory( jQuery.datepicker );
    }
  }( function( datepicker ) {
  
    datepicker.regional.ko = {
      closeText: "적용",
      prevText: "이전달",
      nextText: "다음달",
      currentText: "취소",
      monthNames: [ "01","02","03","04","05","06",
      "07","08","09","10","11","12" ],
      monthNamesShort: [ "01","02","3","4","5","6",
      "7","8","9","10","11","12" ],
      dayNames: [ "일요일","월요일","화요일","수요일","목요일","금요일","토요일" ],
      dayNamesShort: [ "일","월","화","수","목","금","토" ],
      dayNamesMin: [ "일","월","화","수","목","금","토" ],
      weekHeader: "주",
      dateFormat: "yy.mm.dd",
      firstDay: 0,
      isRTL: false,
      showMonthAfterYear: true,
      showButtonPanel: true,
      showOtherMonths: true,
      singleDatePicker: true,
      yearSuffix: "." };
    datepicker.setDefaults( datepicker.regional.ko );
  
    return datepicker.regional.ko;
  
  } ) );

  var settingDate = new Date();
  settingDate.setMonth(settingDate.getMonth()-1);
  $('#datepickerStart').datepicker('setDate', settingDate);
  $('#datepickerEnd').datepicker('setDate', new Date());
  
  //date validate
  $('#datepickerStart').datepicker("option", "onClose", function ( selectedDate ) {
    $("#datepickerEnd").datepicker( "option", "minDate", selectedDate );
  });
  $('#datepickerEnd').datepicker("option", "minDate", $("#datepickerStart").val());
}

//term search
var startDate = "";
var endDate = "";
function searchTerm(){
  var termBox = $(this).parents('.subtab-list');
  var index = $(this).parents('.subtab-item').index();

  today();
  if( termBox.hasClass('three-month') ){//3개월 조회 탭
    if( index == 0 ){
      prevDay(7);
    }else if( index == 1 ) {
      prevMonth(1);
    }else if( index == 2 ) {
      prevMonth(2);
    }else if( index == 3 ) {
      prevMonth(3);
    }    
  }else {//6개월 조회 탭
    if( index == 0 ){
      prevDay(7);
    }else if( index == 1 ) {
      prevMonth(1);
    }else if( index == 2 ) {
      prevMonth(3);
    }else if( index == 3 ) {
      prevMonth(6);
    }    
  }

  $('#datepickerStart').datepicker('setDate', startDate);
  $('#datepickerEnd').datepicker('setDate', endDate);
  
  //date validate
  $('#datepickerEnd').datepicker("option", "minDate", $("#datepickerStart").val());
}

function today() {
  var d = new Date();
  return getDateStrEnd(d);
}

function prevDay(days) {
  var d = new Date();
  var dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - days);
  return getDateStrStart(d);
}

function prevMonth(month) {
  var d = new Date();
  var monthOfYear = d.getMonth();
  d.setMonth(monthOfYear - month);
  return getDateStrStart(d);
}

function getDateStrStart(myDate){
  var year = myDate.getFullYear();
  var month = ("0"+(myDate.getMonth()+1)).slice(-2);
  var day = ("0"+myDate.getDate()).slice(-2);

  startDate = year + '.' + month + '.' + day;
}

function getDateStrEnd(myDate){
  var year = myDate.getFullYear();
  var month = ("0"+(myDate.getMonth()+1)).slice(-2);
  var day = ("0"+myDate.getDate()).slice(-2);

  endDate = year + '.' + month + '.' + day;
}

//radio cart
function selectCartRadio() {
  var list = $(this).parents('.address-radio-list-item');
  var checkBox = list.find('.check-box input[type=checkbox]:not(:disabled)');
  var otherCheckBox = list.siblings().find('.check-box input[type=checkbox]');

  //라디오 선택 해제
  if( list.hasClass('is-checked') ) {
    $(this).prop('checked', false);
    list.removeClass("is-checked");

    //제품 체크박스
    checkBox.prop('checked', false);
  } else {
    $(this).prop('checked', true); 
    list.addClass('is-checked');
    list.siblings().removeClass('is-checked');
    list.siblings().find(".basic-radio input[name='radioBtn']").prop('checked', false);

    checkBox.prop('checked', true);
    otherCheckBox.prop('checked', false);
  };
}

//checkbox cart
function selectCartCheck() {
  var list = $(this).parents('.address-radio-list-item');
  var radioBox = list.find(".basic-radio input");
  
  //활성화된 체크박스만 실행
  if( $(this).find('input[type=checkbox]').prop('disabled') == false ){
    //부모 라디오버튼이 비활성화일 때
    if( radioBox.prop('checked') == false ){
      list.addClass('is-checked');
      list.siblings().removeClass('is-checked');
      $(".basic-radio input").prop('checked', false);
      $(".radio-thumb-box .check-box input[type=checkbox]").prop('checked', false);
      radioBox.prop('checked', true);
    }
  }
}

//app Setting
function appSettingCheck() {
  var btn =  $(this).parents('.app-setting-btn');
  if( btn.hasClass('is-active') ){
    btn.removeClass('is-active');
  }else {
    btn.addClass('is-active');
  }
}

// pd-list-submenu positioning active item
$(".scroll-tab-list .scroll-tab-item").on("click", function() {
  $(".scroll-tab-list .scroll-tab-item").removeClass("is-current");
  $(this).addClass("is-current");
  scrollCenter(".is-current", 300);
});

function scrollCenter(elem, speed) {
  var target = $(".scroll-tab-list");
  var active = target.find(elem);
  var activeWidth = active.width() / 2;

  var pos = active.position().left + activeWidth;
  var elpos = target.scrollLeft();
  var elW = target.width();
  pos = pos + elpos - elW / 2;

  target.animate({
    scrollLeft: pos
  }, speed == undefined ? 1000 : speed);
  return this;
};

function scrollCenterORI(elem, speed) {
  var target = $(".scroll-tab-list");
  var active = target.find(elem);
  var activeWidth = active.width() / 2;

  var pos = active.position().left + activeWidth;
  var elpos = target.scrollLeft();
  var elW = target.width();
  pos = pos + elpos - elW / 2;

  target.scrollLeft( pos );
  return this;
};

//상품리스트 한줄일 경우 제어
function setRow() {
  if( $('.pd-list-card-wrap.best').length>0 ){
    if( $('.product-post-item').length<3 ){
      $('.container').css({'padding-bottom':0});
    }else {
      $('.container').css({'padding-bottom':140});
    }
  }
}