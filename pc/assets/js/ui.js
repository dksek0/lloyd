$(document).ready(function () {
  //Buy
  $(document).on('click', '#btnBuy', buyItem);
  $(document).on('click', '#btnCart', buyItem);
  $(document).on('click', '#btnGift', giftItem);
  $(document).on('click', '.popup-option-close-btn', closeItem);
  $(document).on('click', '.option-result-close', closeOptionResult);
  $(document).on('click', '.option-select-label', selectOption);
  $(document).on('click', '.option-select-row', checkOption);
  $(document).on('click', '.option-select-label-multi', selectOptionMulti);
  $(document).on('click', '.option-select-row-multi', checkOptionMulti);
  $(document).on('focusin', '.option-select-input', inputFocusin);
  $(document).on('focusout', '.option-select-input', inputFocusout);
  $(document).on('click', '.option-input-save-btn',  optionDeleteSaveButton);

  //full popuop input
  $(document).on('propertychange change keyup paste input', '.popup-qna-input', changePopInput);

  //select option input change
  $(document).on('propertychange change keyup paste input', '.option-select-input', changeOptionInput);
  
  //GNB Toggle
  $(document).on('click', '.gnb-btn', GnbToggle);
  $('html, body').on('click', GnbClose);

  //Menu Toggle
  $(document).on('click', '.menu .dep1-list > li > a', MenuToggle);
 
  //Breadcrum
  $(document).on('click', '.breadcrumb-btn', BreadcrumSlideHandler);

  //Filter
  $(document).on('click', '.filter-btn', FilterSlideHandler);
  $(document).on('click', '.filter-link-item', FilterSelectHandler);

  //Like Change
  $(document).on('click', '.product-basic-like', changeLike);
  $(document).on('click', '.buy-link-item.link-like', changeLike);
  $(document).on('click', '.pd-my-like-link', changeLike);
  $(document).on('click', '.myp-viewed-item-heart', changeLike);

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
  $(document).on('click', '.prd-qna-item', qnaOpen);

  //Customer-service - qna
  $(document).on('click', '.my-qna-item', qnaOpen);

  //Customer-service - faq
  $(document).on('click', '.faq-list-item', qnaOpen);

  //Gift option
  $(document).on('click', '.gift-size-change', changeGiftSize);

  //sub tab active action
  $(document).on('click', '.subtab-link', subTabAction);

  $(document).on('click', '.quick-top .bottom-fixed-btn', scrollTop);

  //cart accordion
  $(document).on('click', '.buy-accordion-label.collapse', cartAccordion);
  $(document).on('click', '.thumb-accor-btn', showOrderItem);
  $(document).on('click', '.buy-accor-btn', showOrderItem);
  
  //gift topbanner item
  $(document).on('click', '.pd-count-topbanner-btn', showTopBannerItem);

  // customer accordion
  $(document).on('click', '.option-select-plain-label', selectPlainOption);
  $(document).on('click', '.option-select-plain-row', checkOption);

  $(window).on('scroll', function () {
    if($('.prd-detail').length > 0){
      bottomFixedScroll();
    }
    //헤더 및 네비 좌측 스크롤
    leftScroll();

    //장바구니 우측 네비
    if( $('.col-sidebar-right').length>0 ){
      rightSideNav();
    }

    if( $('.pd-detail').length>0 ){
      detailScroll();
    }
  });

  //guidePopup
  $(document).on('click', '.guide-detail-popup-close', guidePopup);

  //notice drop box
  $(document).on('click', '.drop-box-title-link', dropNotice);

  //my page tab
  $(document).on('click', '.my-tab-list-link', myTab);
  $(document).on('click', '.full-tab-list-link', fullTab);

  //policy drop
  $(document).on('click', '.check-dropbox-text', checkDrop);

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
  $(document).on('click', '.date-month-link', searchTerm);

  //blackCanvas
  if ($('.pd-my-selves').length > 0) {
    blackCanvas();
  }

  //pd customer tab
  $(document).on('click', '.pd-customer-tab-link', customerTab);

  //pd customer tab
  $(document).on('click', '.refund-account-tab-link', accountTab);

  //chatbot
  $(document).on('click', '.quick-chatbot', chatbotHandler);

  //pd option carat
  $(document).on('click', '.detail-option-carat-item', optionCaratTab);

  //pd share btn
  $(document).on('click', '.pd-my-share-link', goToSns);

  //pd qna btn
  $(document).on('click', '.prd-qna-btn-top', writeQna);
  $(document).on('click', '.qna-write-close', closeQna);

  //pd thumbnail btn
  $(document).on('click', '.pd-slide-btn-link', slideBtn);

  //about branch
  $(document).on('click', '.branch-table', showBranchDetail);

  //event detail
  $(document).on('click', '.event-detail-nav-link', eventDetail);

  //radio cart
  $(document).on('click', '.radio-cart', selectCartRadio);
  $(document).on('click', '.cart-item-row .check-box', selectCartCheck);

  $('html,body').on('click', function(e) {
    if( $('.pd-my-share-list').length>0 ){
      if( !$('.pd-my-share-list').is(e.target) ){
        $('.pd-my-share-list').removeClass('is-active');
      }
    }
  });
});
//ready

// object-fit polyfill for IE
$(function () {
  var $visualImg = $('.home-visual-img img');
  var $collectionImg = $('.home-collection-animate-img img');
  if ($visualImg.length) {
    objectFitImages($visualImg);
  }
  if ($collectionImg.length) {
    objectFitImages($collectionImg);
  }
});

// startsWith method polyfill for IE
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function(searchString, position) {
    position = position || 0;
    return this.indexOf(searchString, position) === position;
  };
}

//Buy
function buyItem() {
  if (!$('.bottom-bar-left').hasClass('on')) {
    $('#optionPopup').addClass('is-active');
    $('.popup-option-box').removeClass('off');
    $('.bottom-bar-left').addClass('on');
    $('.option-btn-cart').addClass('on');
    $('.option-btn-buy').addClass('on');
  }else {
    if (!$('.option-result-item').length > 0) {
      //옵션 선택 확인 팝업
      openPopup('noOptionPopup');
    }else {
      if( $(this).hasClass('option-btn-cart') ){
        //장바구니 팝업
        openPopup('cartPopup');
      }
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

function giftItem() {
  if (!$('.option-result-item').length > 0) {
    //옵션 선택 확인 팝업
    openPopup('noOptionPopup');
  }
}

function closeItem() {
  if ($('.bottom-bar-left').hasClass('on')) {
    $('#optionPopup').removeClass('is-active');
    $('.popup-option-box').addClass('off');
    $('.bottom-bar-left').removeClass('on');
    $('.option-btn-cart').removeClass('on');
    $('.option-btn-buy').removeClass('on');
    $('.option-btn-right').removeClass('no-select');
  }else if( $(this).parents('.popup').hasClass('pop') ) {
    $('.popup').removeClass('on');
    $('.popup-option-box').addClass('off');
    $('.bottom-bar.pop').removeClass('on');
    $('#arSave').addClass('on');
  }
}
//Option Result Close
function closeOptionResult() {
  $(this).parents('.option-result-item').remove();
}
//Option Select
function selectOption() {
  var optionList = $(this).siblings('.option-select-list');
  if (optionList.hasClass('on')) {
    $(this).removeClass('on');
    optionList.removeClass('on');
  } else {
    if( !$(this).hasClass('disabled') ){
      $(this).addClass('on');
      optionList.addClass('on');
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
    if ($(this).attr('for').startsWith("mesInput")) {
      // 메시지 직접 입력
      $(this).parents('.mesInputWrap').find('.mesInputBox').addClass('on');
    } else {
      $(this).parents('.mesInputWrap').find('.mesInputBox').removeClass('on');
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

// mouse hover sticky action
  // gnb
$('.gnb').bind('mousemove', function(e) {
  $('.gnb-link-thumb').css({
     left: e.offsetX - 80,
     top: e.offsetY - 120
  });
});

// home gift
$('.home-product-link').bind('mousemove', function(e) {
  $('.home-product-stick-wrap').css({
     left: e.offsetX - 40,
     top: e.offsetY - 40
  });
});

//Gnb Display Handler
function GnbToggle () {
  if ($('.gnb-wrap').hasClass('on')) {
    $('.gnb-wrap').removeClass('on').addClass('off');
    if ($('.wrapper').hasClass('home') && document.documentElement.scrollTop === 0) {
      headerChangeWhite();
    }
  } else {
    if ($('.search-wrap').hasClass('on')) {
      closePopup("searchPopup");
    }
    $('.gnb-wrap').removeClass('off').addClass('on');
    if ($('.wrapper').hasClass('home') && $('#header').hasClass('transparent')) {
      headerChangeBlack();
    }
  }
}

function GnbClose (e) {
  if (!$(e.target).closest(".gnb-btn, .gnb-container").length) {
    if ($('.wrapper').hasClass('home') && document.documentElement.scrollTop === 0) {
      if (!$('.search-wrap').hasClass('on')) {
        headerChangeWhite();
      }
    }
    $(".gnb-wrap").removeClass('on').addClass('off');
  }
}

function headerChangeBlack () {
  $('#header').removeClass('transparent reverse');
  $('.logo a img').attr('src', './assets/images/logo-black.png');
}

function headerChangeWhite () {
  $('#header').addClass('transparent reverse');
  $('.logo a img').attr('src', './assets/images/logo.png');
}

//popup open
function openPopup(popupName) {
  if (popupName === 'searchPopup') {
    // searchPopup
    if ($('.header').hasClass('transparent reverse')) {
      // header color reverse
      $('.header').removeClass('transparent reverse');
      $('.logo a img').attr('src', './assets/images/logo-black.png');
    }
    if ($(document).height() > $(window).height()) {
      var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
      $('html').addClass('no-scroll').css('top',-scrollTop);         
    }
  }
  $("#"+ popupName).addClass("on");
}

//popup Close
function closePopup(popupName) {
  if ($('.header').hasClass('transparent')) {
    // header color reverse
    $('.header').addClass('reverse');
    $('.logo a img').attr('src', './assets/images/logo.png');
  }
  if (popupName === 'searchPopup') {
    // searchPopup
    if ($('.wrapper').hasClass('home') && document.documentElement.scrollTop === 0) {
      headerChangeWhite();
    }
    var scrollTop = parseInt($('html').css('top'));
    $('html').removeClass('no-scroll');
    $('html, body').scrollTop(-scrollTop);
  }
  $("#"+ popupName).removeClass("on");
}


//LNB Toggle
var dep1Menu = $('.menu .dep1-list > li');
if (dep1Menu.hasClass('on')) {
  $('.menu .dep1-list > li.on').children('.dep2-list').css('display', 'block');
}
function MenuToggle () {
  var $this = $(this).parent('li');
  if ($(this).parents('.menu').hasClass('myp')) {
    return false;
  } else {
    if ($this.find('.dep2-list').length < 1) {
      $this.addClass('on');
    } else {
      if ($this.hasClass('on')) {
        $this.removeClass('on');
        $(this).removeClass('active');
        $this.children('.dep2-list').slideUp(300);
      } else {
        dep1Menu.removeClass('on');
        dep1Menu.children('.dep2-list').slideUp(300);
        $this.addClass('on');
        $('.dep1-item').removeClass('active');
        $this.children('.dep1-item').addClass('active');
        $this.children('.dep2-list').slideDown(300);
      }
      return false;
    }
  }
}

//Like Change
function changeLike() {
  $(this).toggleClass('is-active');
}

//Detail Thumbnail Tab
function DetailThumTab() {
  var tabMenu = $(this).parent('.detail-slide-tab-item');
  var tabSubMenu = $(this).closest('.pd-top').find('.detail-thumbnail-tab-item');
  var optionTabSubMenu = $(this).closest('.pd-top').find('.detail-slide-option-item');
  var idx = tabMenu.index();
  tabMenu.addClass('is-current').siblings('.detail-slide-tab-item').removeClass('is-current');
  tabSubMenu.eq(idx).addClass('is-current').siblings('.detail-thumbnail-tab-item').removeClass('is-current');
  optionTabSubMenu.eq(idx).addClass('is-current').siblings('.detail-slide-option-item').removeClass('is-current');
  var windowLeft = $(".detail-slide-tab").offset().left;
  var itemLeft = $(this).offset().left;
  var barLeft = itemLeft - windowLeft;
  $(".detail-slide-tab-bar").addClass("is-view").css({
    'transform': 'translateX('+barLeft+'px)'
  });
}

//Detail Carat click
function DetailCarat() {
  var colorBox = $(this).parents('.detail-option-color-item'),
    caratBox = $(this).parents('.detail-option-color-inner').find('.detail-option-carat');

    caratBox.removeClass('is-first is-second is-third');

  if( colorBox.index() == 0 ){
    caratBox.addClass('is-first');
  } else if( colorBox.index() == 1 ) {
    caratBox.addClass('is-second');
  } else {
    caratBox.addClass('is-third');
  }
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
}

function fullTab() {
  var tabMenu = $(this).parent('.full-tab-list-item');
  var tabContent = tabMenu.parents('.full-tab-category').siblings('.full-tab-con').find('.full-tab-con-inner');
  var tabAdd = $(this).parents('.full-tab-category').find('.full-tab-list-add');
  var idx = tabMenu.index();

  tabMenu.addClass('is-current').siblings('.full-tab-list-item').removeClass('is-current');
  tabContent.eq(idx).addClass('is-current').siblings('.full-tab-con-inner').removeClass('is-current');
  if(tabAdd.length > 1){
    tabAdd.removeClass('is-current');
    tabAdd.eq(idx).addClass('is-current');
  }
  if($('#point-label').length > 0){
    $('#point-label').text(tabMenu.find('span').text());
    $('#point-value').text('0');
  }

  var checkbox = $(this).parents('.buy-accordion-box').find('.order-delivery-address');
  if( idx == 1 ){
    checkbox.addClass('is-active');
  }else {
    checkbox.removeClass('is-active');
  }
}

function customerTab() {
  var tabMenu = $(this).parent('.pd-customer-tab-item');
  var tabContent = tabMenu.parent('.pd-customer-tab-list').siblings('.pd-customer-tab-con').find('.pd-customer-tab-box');
  var idx = tabMenu.index();

  tabMenu.addClass('is-current').siblings('.pd-customer-tab-item').removeClass('is-current');
  tabContent.eq(idx).addClass('is-current').siblings('.pd-customer-tab-box').removeClass('is-current');
}

function accountTab() {
  var tabMenu = $(this).parent('.refund-account-tab-item');
  var tabContent = tabMenu.parent('.refund-account-tab-list').siblings('.refund-account-tab-con').find('.refund-account-tab-box');
  var idx = tabMenu.index();

  tabMenu.addClass('is-current').siblings('.refund-account-tab-item').removeClass('is-current');
  tabContent.eq(idx).addClass('is-current').siblings('.refund-account-tab-box').removeClass('is-current');
}

//* Swiper Slide *
//Detail Thumbnail Slide
var DetailThumbnailSl;
if($(".detail-slide-thumbnail-container").length > 0){
  function DetailSl(){
    DetailThumbnailSl = new Swiper('.detail-slide-thumbnail-container', {
      observer: true,
      observeParents: true,
      watchOverflow: true,
      slidesPerView: 1,
      slideToClickedSlide: true,
      pagination: {
        el: '.detail-slide-pagination',
        clickable: true,
      },
      on: {
        slideChange: function () {
          var slideItem = this.$wrapperEl.parents('.detail-thumbnail-tab-item ');
          var activeIdx = this.activeIndex;
          slideItem.find('.pd-slide-btn-item').removeClass('is-active');
          slideItem.find('.pd-slide-btn-item').eq(activeIdx).addClass('is-active');
        },
      }
    });
  }
  $(document).ready(function(){
    DetailSl();
    $(".detail-option-color-box, .detail-option-link, .detail-option-stone-box").on('click', function () {
      DetailSl();
    });
  });
}

//click slide Btn
function slideBtn(){
  var btnItem = $(this).parents('.pd-slide-btn-item');
  var slideIdx = $(this).parents('.detail-thumbnail-tab-item').index();
  var btnIdx = btnItem.index();

  btnItem.addClass('is-active').siblings('.pd-slide-btn-item').removeClass('is-active');
  DetailThumbnailSl[slideIdx].slideTo(btnIdx);
}

if($(".event-slide-container").length > 0){
  var eventlSl = new Swiper('.event-slide-container', {
    slidesPerView: 2,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $(".event-button").click(function() {
    eventlSl.autoplay.stop();
  });
}

if($(".pd-recommend-slide-container").length > 0){
  var swiper = new Swiper('.pd-recommend-slide-container', {
    slidesPerView: 5,
    spaceBetween: 16,
    slidesPerGroup: 5,
    speed: 800,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.pd-recommend-next',
      prevEl: '.pd-recommend-prev',
    },
  });
}

if($(".brand-hero-wrap").length > 0){
  new Swiper('.hero-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.brand-hero-next',
      prevEl: '.brand-hero-prev',
    },
  });
}

if($(".brand-now-wrap").length > 0){
  new Swiper('.now-swiper-container', {
    slidesPerView: 1,
    spaceBetween: 16,
    speed: 600,
    loop: true,
    navigation: {
      nextEl: '.brand-hero-next',
      prevEl: '.brand-hero-prev',
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

// home hero swiper
if($(".home-visual-container").length > 0){
  var interleaveOffset = 0.5;
  var swiper = new Swiper('.home-visual-container', {
    parallax: true,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    slidesPerView: 1,
    speed: 1500,
    pagination: {
      el: '.home-visual-pagination',
      type: 'fraction',
      formatFractionCurrent: function(number) {
        if (number < 10) {
        number = '0' + number
        }
        return number
      },
      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
        '<span class="swiper-num-dash"> /</span> 0' +
        '<span class="' + totalClass + '"></span>';
      },
    },
    navigation: {
      nextEl: '.home-visual-next',
      prevEl: '.home-visual-prev',
    },
    on: {
      init: function(){
        this.autoplay.stop();
      },
      progress: function(){
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress,
              innerOffset = swiper.width * interleaveOffset,
              innerTranslate = slideProgress * innerOffset;
         
          swiper.slides[i].querySelector(".home-visual-img").style.transform =
            "translateX(" + innerTranslate + "px)";
        }
      },
      setTransition: function(speed) {
        var swiper = this;
        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = speed + "ms";
          swiper.slides[i].querySelector(".home-visual-img").style.transition =
            speed + "ms";
        }
      }
    }
  });

  //slide change event
  swiper.on('slideChange', function () {
    console.log('slide changed');
  });
}

//scrollMagic Animation
var controller = new ScrollMagic.Controller();

if($(".ani-banner").length > 0){
  $('.ani-banner').each(function () {
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
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
      reverse: false,
    })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

//signature
if($(".pd-my-selves").length > 0){
  $('.pd-my-selves').each(function () {
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.7,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

function giftsPopup() {
  $('.gift-post').each(function () {
    var ourScene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.9,
        reverse: false,
      })
      .setClassToggle(this, 'is-active')
      .addTo(controller);
  });
}

if ($('.brand-history-item').length > 0) {
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

// home hero y scroll
if($(".home-visual-wrap").length > 0) {
  new ScrollMagic.Scene({
    triggerElement: ".home-product-wrap",
    triggerHook: 1,
    duration: $(".home-visual-wrap").height()
  })
  .setTween(".home-visual-wrap", {y: "40%", ease: Linear.easeNone})
  .addTo(controller);
}

// home gift
if ($('.home-product-bg').length > 0) {
  new ScrollMagic.Scene({
    triggerHook: 0.5,
    triggerElement: ".home-product-bg",
    duration: $(".home-product-inner").height() / 2 - 100,
  })
  .setPin(".home-product-bg")
  .addTo(controller)
}

if($(".home-product-item").length > 0){
  $('.home-product-item').each(function () {
    var ourScene = new ScrollMagic.Scene({
      triggerElement: this.children[0],
      triggerHook: 0.9,
    })
    .setClassToggle(this, 'is-active')
    .addTo(controller);
  });
}

// home banner
if ($('.home-banner-wrap').length > 0) {
  new ScrollMagic.Scene({
    triggerHook: 0.7,
    triggerElement: ".home-banner-wrap",
    duration: $(window).outerHeight()
  })
  .setTween(".home-banner-image", {y: "-20%", ease: Linear.easeNone})
  .addTo(controller);
}

// home collection
if ($('.home-collection-wrap').length > 0) {
  
  $('.home-collection-wrap').each(function() {
    var collectAni = $(this).find(".home-collection-animate");
    var collectWipeLeft = $(this).find(".home-collection-animate-bg-left");
    var collectWipeRight = $(this).find(".home-collection-animate-bg-right");
    
    // img wipe
    var wipeBg = new TimelineMax()
    .add(TweenMax.to(collectWipeLeft[0], 1, {width: "0"}),"first")
    .add(TweenMax.to(collectWipeRight[0], 1, {width: "0"}),"first")

    new ScrollMagic.Scene({
      triggerHook: 0.5,
      triggerElement: collectAni[0],
      duration: 700
    })
    .setTween(wipeBg)
    .on("end", function () {
      if( collectAni.hasClass('show') ){
        collectAni.removeClass('show');
      }else {
        collectAni.addClass('show');
      }
    })
    .addTo(controller);

    // dim activate
    new ScrollMagic.Scene({
      triggerElement: collectAni[0],
      triggerHook: 1,
      offset: collectAni.height() + 200,
      duration: 1
    })
    .addTo(controller)
    .on("end", function () {
      if( collectAni.hasClass('is-active') ){
        collectAni.removeClass('is-active');
      }else {
        collectAni.addClass('is-active');
      }
    });
  })

  $('.home-collection-content-item').each(function(){
    // product card fade in
    var aniFixScene2 = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 1,
    })
    .setClassToggle(this, 'is-active')
    .addTo(controller)
  });

  $('.home-collection-content').each(function(){
    var currentItem = this;
    var collectBox = $(this).parents(".home-collection-box").find(".home-collection-animate");

    //content move
    var aniFixScene2 = new ScrollMagic.Scene({
      triggerElement: currentItem,
      triggerHook: 0,
      duration: 1
    })
    .setPin(collectBox[0])
    .addTo(controller)
  });

  $('.home-collection-animate').each(function(){
    var currentItem = this;
    var collectBox = $(this).parents(".home-collection-box").find(".home-collection-content");

    // wrap pin
    var aniFixScene = new ScrollMagic.Scene({
      triggerElement: currentItem,
      triggerHook: 0,
      duration: $(this).height() * 1.4 + collectBox.height()
    })
    .setPin(currentItem)
    .addTo(controller)
  });
}

//filter sort box
var $select_bx = $("div.sort-select-item");

$select_bx.find(".sort-select-label").click(function (e) {
  e.preventDefault();
  $(this).parent().toggleClass("is-on").find("ul.sort-select-list").stop().slideToggle(100);
  $("div.sort-select-item.is-on").not($(this).parent()).removeClass("is-on").find("ul.sort-select-list").stop().slideUp(100);
});

$select_bx.on("click", ".sort-select-list li a", function (e) {
  e.preventDefault();
  var _this = $(this);
  var this_text = _this.text();
  _this.closest(".sort-select-item").removeClass("is-on");
  _this.parent("li").addClass("is-current").siblings("li").removeClass("is-current");
  _this.closest("ul.sort-select-list").stop().slideUp(100).prev().text(this_text);
  _this.parents(".sort-select-item").find(".sort-select-label").addClass("selected");
});

$(document).mouseup(function (e) {
  e.preventDefault();
  if (!$select_bx.is(e.target) && $select_bx.has(e.target).length === 0) {
    $select_bx.removeClass("is-on").children("ul.sort-select-list").stop().slideUp(100);
  }
});

//filter slide
function FilterSlideHandler () {
  var filterItem = $(this).parent('.filter-item');
  filterItem.siblings('li').removeClass('on');
  filterItem.siblings('li').find('.filter-link-list').slideUp(100);
  filterItem.toggleClass('on');
  $(this).siblings('.filter-link-list').slideToggle(100);
}

//breadcrum slide
function BreadcrumSlideHandler () {
  var BreadcrumItem = $(this).parent('.breadcrumb-item');
  BreadcrumItem.siblings('li').removeClass('on');
  BreadcrumItem.siblings('li').find('.breadcrumb-link-list').slideUp(100);
  BreadcrumItem.toggleClass('on');
  $(this).siblings('.breadcrumb-link-list').slideToggle(100);
}

//filter select
function FilterSelectHandler () {
  $(this).toggleClass('is-current');
}

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
  if ($(e.target).is('.my-qna-action-button')) {
    return;
  }
  $(this).toggleClass("is-open").siblings().removeClass("is-open");
}

//qnaDetail
function qnaDetailOpen(e) {
  if (!$(this).hasClass('is-open')) {
    $(this).addClass('is-open');
  } else {
    $(this).removeClass('is-open');
  }
}

// gift option
function changeGiftSize() {
  $('.gift-size-change-wrap').toggleClass('open');
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

//carat tab active action
function optionCaratTab() {
  $(this).addClass("is-current").siblings().removeClass("is-current");
  var innerLeft = $(this).parents(".detail-option-carat-list").offset().left -16;//좌측 패딩 값 마이너스
  var barWidth = $(this).width();
  var barLeft = $(this).offset().left - innerLeft;
  var targetBar = $(this).parents(".detail-option-carat").find(".detail-option-carat-bar");
  targetBar.css({'width' : barWidth, 'left' : barLeft}); 
}


$(document).ready(function () {
  if( $(".subtab").length ){
    var innerLeft = $(".subtab").offset().left;
    var barWidth = $(".subtab-item.is-current").width();
    var barLeft = $(".subtab-item.is-current").offset().left - innerLeft;
    var targetBar = $(this).find(".subtab-bar");
    targetBar.css({'width' : barWidth, 'left' : barLeft});
  }
  if( $(".detail-option-carat").length ){
    var innerLeft = $(".detail-option-carat-list").offset().left - 16;//좌측 패딩 값 마이너스
    var barWidth = $(".detail-option-carat-item.is-current").width();
    var barLeft = $(".detail-option-carat-item.is-current").offset().left - innerLeft;
    var targetBar = $(this).find(".detail-option-carat-bar");
    targetBar.css({'width' : barWidth, 'left' : barLeft}); 
  }
});

// Range
var $range = $("#range");
var instance;
var min = $range.attr("data-min");
var max = $range.attr("data-max");
var from = $range.attr("data-from");
var to = $range.attr("data-to");

if ($("#range").length > 0) {
  $("#range").ionRangeSlider({
    // skin: "round",
    type: "double",
    min: min,
    max: max,
    from: from,
    to: to,
    onChange: updateInputs
  });
  
  instance = $range.data("ionRangeSlider");
  
  function updateInputs (data) {
    from = data.from;
    to = data.to;
  
    $(".range-result").text(from+"~"+to);
  }
  
  $(".range-link").on("click", function() {
    var rageMin = $(this).attr("data-min");
    var rageMax = $(this).attr("data-max");
  
    instance.update({
      from: rageMin,
      to: rageMax
    });
  
    $(".range-result").text(rageMin+"~"+rageMax);
    $(this).parents(".range-link-item").addClass("is-current").siblings().removeClass("is-current");
  });
}

// header, bottom bar, filter scroll action
var lastScrollTop = 0;
var delta = 5;
var didScroll;

if( $('.filter').length ){
  var filterPos = $('.filter').offset().top;
}

//window scroll motion
window.onscroll = function(e) {
  didScroll = true;
  
  var nowScrollTop = window.pageYOffset;
  if (nowScrollTop > filterPos) {
    $('.content-inner').addClass('filter-fixed');
  } else {
    $('.content-inner').removeClass('filter-fixed');
  }
  if ($('.side-nav-wrap').length > 0) {
    var contentTop = $('.content').offset().top;
    if (contentTop < nowScrollTop) {
      $('.side-nav-wrap').addClass('fixed');
    } else if (contentTop > nowScrollTop) {
      $('.side-nav-wrap').removeClass('fixed with-header');
    }
  }

  //black canvas
  if ($('.pd-my-selves').length > 0) {
    blackCanvas();
  }

  // product list category text
  if ($('.category-wrap').length > 0) {
    var pdListTopBannerBottom = $('.category-wrap').offset().top + $('.category-wrap').outerHeight(true);
    if (nowScrollTop > pdListTopBannerBottom - 368) {
      $('.category-title').addClass('hide');
      $('.menu.gift-menu').addClass('hide');
    } else {
      $('.category-title').removeClass('hide');
      $('.menu.gift-menu').removeClass('hide');
    }

  }



  //gift text motion
  if ($('.gift-event').length > 0) {
    var giftEventSection = $('.gift-event').offset().top;
    if (nowScrollTop > giftEventSection/2) {
      $('.gift-event').addClass('current');
      eventlSl.autoplay.start();
    }
  }
};

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var nowScrollTop = window.pageYOffset;
  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
    return;
  }
  $(".gnb-wrap").removeClass('on').addClass('off');
  if (nowScrollTop > lastScrollTop && nowScrollTop > 1) {
    //Scroll down
    $('.bottom-nav').addClass('hide');
    $('#header').addClass('hide');
    $('.filter').addClass('hide');
    $('.side-nav-wrap').removeClass('with-header');
  } else {
    if (nowScrollTop + $(window).height() < $(document).height()) {
      //Scroll up
      $('.bottom-nav').removeClass('hide');
      if ($('.wrapper').hasClass('home') && $('#header').hasClass('transparent')) {
        headerChangeBlack();
      }
      $('#header').removeClass('hide');
      $('.filter').removeClass('hide');
      $('.side-nav-wrap').addClass('with-header');
      $('.filter').css({marginLeft: 0});
    }
  }
  if (nowScrollTop === 0 && $('.wrapper').hasClass('home')) {
    if (!$('.search-wrap').hasClass('on')) {
      headerChangeWhite();
    }
  }
  lastScrollTop = nowScrollTop;
}

// Bottom fixed buttons
function bottomFixedScroll() {
  var scroll = $(window).scrollTop(),
      detailCon = $('.prd-detail').offset().top,
      chatbotBtn = $('.quick-chatbot .bottom-fixed-btn');

  if (scroll > detailCon) {
    chatbotBtn.addClass('is-move');
  } else {
    chatbotBtn.removeClass('is-move');
  }
}

//ScrolTop move
function scrollTop(e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 200);
  $('.pd-order').animate({
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

//Ar Slide 
if($(".detail-option-color-container.ar").length > 0){
  var arItemSl = new Swiper('.detail-option-color-container.ar', {
    loop: true,
    slidesPerView: 5,
    centeredSlides: true,
  });
}

//policy drop
function checkDrop(e) {
  if(!$('.check-box').has(e.target).length) { 
    $(this).closest(".check-dropbox").toggleClass("is-current").siblings().removeClass("is-current");
  } 
};

function cartAllCheckSub() {
  var label = $(this).find(".buy-accordion-checkbox");
  var subInput = $(".buy-accordion-checkbox");

  if($(label).prop('checked') === true) {
    $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]:not(:disabled)").prop("checked",true);
  } else {
    $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]").prop("checked",false);
  }
  if (subInput.length > subInput.filter(":checked").length) {
    $(".cart-filter-all").prop("checked",false);
  } else {
    $(".cart-filter-all").prop("checked",true);
  }
};

function cartBasicCheck() {
  var label = $(this);
  var subInput = $(label).closest(".buy-accordion").find(".buy-accordion-box input[type=checkbox]:not(:disabled)");
  var subInputDrop = $(label).closest(".buy-accordion").find(".buy-accordion-box .check-dropbox-text input[type=checkbox]");

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
  if ($('.buy-gift-item-wrap')) {
    $this.parents('.buy-gift-item-wrap').toggleClass('show-all');
  }
  if ($('.cart-item-list')) {
    $this.parents('.cart-item-list').toggleClass('show-all');
  }
}

// gift show item more
function showTopBannerItem () {
  $this = $(this);
  $this.parents('.category-wrap').siblings('.pd-count-topbanner-item-smallbox').addClass('show-all');
  $this.parent().css('display', 'none');
}

//AR carat select
function arCarat() {
  $(this).toggleClass('active').siblings().removeClass('active');
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
}
function inputFocusout(){
  $(this).parents('.option-select-input-box').removeClass('on');
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
  $(this).parents('.buy-gift-receiver').find('.input-phone-label').removeClass('open').find('.input-phone-text').text(curText);
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
    $('.cart-pay-box').addClass('show');
    $('#credit').addClass('show');
  } else if (thisInput.attr('id') === 'bankTransfer') {
    $('.cart-pay-box').removeClass('show');
    $('#bank').addClass('show');
  } else {
    $('.cart-pay-box').removeClass('show');
  }
  $(thisInput).parents('.cart-payment').find('.cart-payment-method').removeClass('show');
  $(thisInput).parents('.cart-payment').find('.cart-payment-method.'+thisInput.attr('id')).addClass('show');
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
	
	} )
  
  );

  var settingDate = new Date();
  settingDate.setDate(settingDate.getDate()-7);
  $('.date-period-start > input.datepicker').datepicker('setDate', settingDate);
  $('.date-period-end > input.datepicker').datepicker('setDate', new Date());
  $('.date-period-start > input.datepicker').datepicker("option", "onClose", function ( selectedDate ) {
    $(".date-period-end > input.datepicker").datepicker( "option", "minDate", selectedDate );
  });
  $('.date-period-end > input.datepicker').datepicker("option", "minDate", $(".date-period-start > input.datepicker").val());
}

//term search
function searchTerm() {
  var startDate = new Date();
  var period = $(this).parents('.date-month-item').data('period');
  if (period % 30 == 0) {
    startDate.setMonth(startDate.getMonth() - (period/30));
  } else {
    startDate.setDate(startDate.getDate() - period);
  }
  $(this).parents('.date-box').find('.date-period-start > input.datepicker').datepicker('setDate', startDate);
  $(this).parents('.date-box').find('.date-period-end > input.datepicker').datepicker('setDate', new Date());

  $(this).parents('.date-month-list').find('.date-month-item').removeClass('is-current');
  $(this).parents('.date-month-item').addClass('is-current');
  //date validate
  $('.date-period-end > input.datepicker').datepicker("option", "minDate", $(".date-period-start > input.datepicker").val());
}

//헤더 및 네비 좌측 스크롤
function leftScroll() {
  $('.header').css({marginLeft: 0 - $(this).scrollLeft()});
  $('.gnb-container').css({marginLeft: 0 - $(this).scrollLeft()});
  $('.side-nav-wrap.fixed').css({marginLeft: 0 - $(this).scrollLeft()});
  $('.category-title').css({marginRight: $(this).scrollLeft()});

  $('.bottom-fixed-box').css({marginLeft: 1440 - $(this).scrollLeft()});
  $('.col-sidebar-checkout').css({marginLeft: 0 - $(this).scrollLeft()});
  $('.home-collection-animate').css({marginLeft: 0 - $(this).scrollLeft()});

  if( $('.content-inner').hasClass('filter-fixed') ){
    $('.filter').css({marginLeft: 0 - $(this).scrollLeft()});
  }
}

//블랙 컬러 바탕
function blackCanvas() {
  var nowScrollTop = window.pageYOffset;
  var selvesTop = $('.pd-my-selves').offset().top;
  var bannerTop = $('.pd-center-banner').offset().top;
  if( $('.pd-my-selves.ld').length>0 ){
    if( nowScrollTop >= selvesTop ){
      if( selvesTop < nowScrollTop && bannerTop > nowScrollTop ){
        $('.wrapper').addClass('is-black');
        $('.logo a img').attr('src', '../../assets/images/logo.png');
      }else{
        $('.wrapper').removeClass('is-black');
        $('.logo a img').attr('src', '../../assets/images/logo-black.png');
        
      }
    }else {
      $('.wrapper').removeClass('is-black');
      $('.logo a img').attr('src', '../../assets/images/logo-black.png');
    }
  }else{
    var prevBannerTop = $('.pd-center-banner').siblings('.pd-sig-topbanner').offset().top;
    if( nowScrollTop >= selvesTop ){
      if( selvesTop < nowScrollTop && prevBannerTop - 190 > nowScrollTop ){
        $('.wrapper').addClass('is-black');
        $('.logo a img').attr('src', '../../assets/images/logo.png');
      }else{
        $('.wrapper').removeClass('is-black');
        $('.logo a img').attr('src', '../../assets/images/logo-black.png');
      }
    }else {
      $('.wrapper').removeClass('is-black');
      $('.logo a img').attr('src', '../../assets/images/logo-black.png');
    } 
  }
}

//product list category title positioning
$(window).on('load resize', function () {
  if ($('.category-title').length > 0) {
    contentRight = $(window).width() - $('.content').outerWidth(true) - $('.content').offset().left;
    $('.category-title').css({right: contentRight});
  }
  if( $('.pd-detail').length>0 ){
    detailScroll();
  }
  //장바구니 우측 네비
  if( $('.col-sidebar-right').length>0 ){
    rightSideNav();
  }
})

//chatbot
function chatbotHandler () {
  window.open('../../html/product-detail/chatbot.html','챗봇','width=360, height=760, toolbar=no, titlebar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes');
  return false;
}

//pd share btn
function goToSns() {
  var snsBox = $(this).siblings('.pd-my-share-list');
  if( snsBox.hasClass('is-active') ){
    snsBox.removeClass('is-active');
  }else {
    snsBox.addClass('is-active');
  }
}

//write QNA
function writeQna() {
  var introBox = $(this).parents('.prd-qna-intro');
  var qnaBox = introBox.siblings('.pd-qna-write');
  introBox.addClass('is-hide');
  qnaBox.addClass('is-active');
}
function closeQna(){
  var qnaBox = $('.pd-qna-write');
  var introBox = $('.prd-qna-intro');
  qnaBox.removeClass('is-active');
  introBox.removeClass('is-hide');
}

//pd detail scroll
var curPosition = "",
pdTopHeight = $('.pd-top').height(),
leftwidth = $('.pd-left').outerWidth(),
oldSc = 0,
rightHeight = 0, rightScrollTop = 0, rightScrollHeight = 0, rightAmount = 0;
function detailScroll(){
  var nowScrollTop = window.pageYOffset,
  pdTop = $('.pd-top'),
  detailBox = $('.pd-right'),
  orderBox = $('.pd-order'),
  bottomBox = $('.pd-bottom').offset().top,
  bottomBar = $('.bottom-bar'),
  optionPopup = $('.popup-option-box'),
  winHeight = window.innerHeight;

  if( nowScrollTop < (bottomBox - winHeight) ){//bottom 영역 이전
    orderBox.css('position', 'fixed');//내부 박스 fixed 처리
    orderBox.css({marginLeft: 0 - $(this).scrollLeft()});//좌측으로 스크롤시
    detailBox.css({top: 0});//외부 박스 fixed top 0 처리

    //bottom bar
    bottomBar.removeClass('is-hide');
    optionPopup.removeClass('is-hide');
    bottomBar.css({marginLeft: 0 - $(this).scrollLeft()});//좌측으로 스크롤시
    optionPopup.css({marginLeft: 0 - $(this).scrollLeft()});//좌측으로 스크롤시

    if( !pdTop.hasClass('meet') && !pdTop.hasClass('meet2') ){
      rightHeight = $(".pd-order").innerHeight();
      rightScrollTop = $(".pd-order").scrollTop();
      rightScrollHeight = $(".pd-order").prop('scrollHeight') - rightScrollTop;
      rightAmount = rightScrollHeight - rightHeight;
    }

    pdTop.css({marginLeft: 0});

    if( pdTop.hasClass('meet') && !pdTop.hasClass('meet2') ){
      var sc = window.pageYOffset,
      scVal = sc - oldSc;
      if( sc > oldSc ){//아래로 스크롤시
        var oldScRight = $(".pd-order").scrollTop();
        $(".pd-order").scrollTop(oldScRight + scVal);
      }else {//위로 스크롤시
        var oldScRight = $(".pd-order").scrollTop();
        $(".pd-order").scrollTop(oldScRight + scVal);
        if( $(".pd-order").scrollTop() === 0 ){
          pdTop.removeClass('meet');
          pdTop.css({'height': pdTopHeight});
          $(".pd-order").scrollTop(0);
        }
      }
      pdTop.css({marginLeft: 0 - $(this).scrollLeft()});
    }

    if( pdTop.hasClass('meet') && pdTop.hasClass('meet2') ){
      pdTop.removeClass('meet2');
      $('.pd-left').css({'top': 'auto'});
    }
  }else {//bottom 영역 이후

    pdTop.css({marginLeft: 0});

    if( pdTop.hasClass('meet') && !pdTop.hasClass('meet2') ){
      pdTop.addClass('meet2');
      $('.pd-left').css({'top': rightAmount});
      $(".pd-order").scrollTop($(".pd-order").prop('scrollHeight'));
    }

    pdTop.addClass('meet');

    if( pdTop.hasClass('meet') ){
      pdTop.css({'height': pdTopHeight + rightAmount});
      $('.pd-left').css({'width':leftwidth});
      detailBox.css({'top':0});//외부 박스 absolute bottom 값 적용
    }

    if( pdTop.hasClass('meet') && pdTop.hasClass('meet2') ){
      orderBox.css('position', 'static');//내부 박스 fixed 해제
      orderBox.css({marginLeft: 0});
      detailBox.css({'top':'auto', 'bottom':40});//외부 박스 absolute bottom 값 적용
      
      bottomBar.addClass('is-hide');
      optionPopup.addClass('is-hide');
      bottomBar.css({marginLeft: 0});
      optionPopup.css({marginLeft: 0});
    }
  }
  oldSc = nowScrollTop;
}

// about branch
function showBranchDetail(){
  $(this).siblings('.branch-table').removeClass('is-current');
  $(this).toggleClass('is-current');
}

// event detail
function eventDetail(e){
  e.preventDefault();     
  $('html,body').animate({
    scrollTop: $(this.hash).offset().top
  }, 500);
}

// check if footer to LNB height change
$(window).on('load scroll', function() {
  var footerTop = $(".prd-footer").offset().top;
  var footerBottom = $(".prd-footer").offset().top + $(".prd-footer").outerHeight();
  var windowBottom = $(window).scrollTop() + $(window).innerHeight();
  var windowTop = $(window).scrollTop();

  if ((windowBottom > footerTop) && (windowTop < footerBottom)){
    $('.side-nav-wrap').addClass('with-footer');
  } else {
    $('.side-nav-wrap').removeClass('with-footer');
  }
});

var colLeftwidth = $('.col-content-left').outerWidth(),
topBoxHeight = $('.content-with-sidebar').height(),
oldScr = 0,
sideHeight = 0, sideScrollTop = 0, sideScrollHeight = 0, sideAmount = 0;
function rightSideNav(){
  var nowScrollTop = window.pageYOffset,
  topBox = $('.content-with-sidebar'),
  leftBox = $('.col-content-left'),
  targetBox = $('.col-sidebar-right'),
  target = $('.col-sidebar-checkout'),
  footer = $('.prd-footer').offset().top,
  winHeight = window.innerHeight;

  if( nowScrollTop < (footer - winHeight) ){ //푸터 영역 이전
    target.css('position', 'fixed');//내부 박스 fixed 처리
    targetBox.css({top: 0});//외부 박스 absolute top 0 처리

    if( !topBox.hasClass('meet') && !topBox.hasClass('meet2') ){
      sideHeight = target.innerHeight();
      sideScrollTop = target.scrollTop();
      sideScrollHeight = target.prop('scrollHeight') - sideScrollTop;
      sideAmount = sideScrollHeight - sideHeight;
    }

    topBox.css({marginLeft: 0});

    if( topBox.hasClass('meet') && !topBox.hasClass('meet2') ){
      var scr = window.pageYOffset,
      scVal = scr - oldScr;
      if( scr > oldScr ){//아래로 스크롤시
        var oldScRight = target.scrollTop();
        target.scrollTop(oldScRight + scVal);
      }else {//위로 스크롤시
        var oldScRight = target.scrollTop();
        target.scrollTop(oldScRight + scVal);
        if( target.scrollTop() === 0 ){
          topBox.removeClass('meet');
          topBox.css({'height': topBoxHeight});
          target.scrollTop(0);
        }
      }
      topBox.css({marginLeft: 0 - $(this).scrollLeft()});
    }

    if( topBox.hasClass('meet') && topBox.hasClass('meet2') ){
      topBox.removeClass('meet2');
      leftBox.css({'top': 'auto'});
    }
  }else { //푸터 영역 이후

    topBox.css({marginLeft: 0});

    if( topBox.hasClass('meet') && !topBox.hasClass('meet2') ){
      topBox.addClass('meet2');
      leftBox.css({'top': sideAmount});
      target.scrollTop(target.prop('scrollHeight'));
    }

    topBox.addClass('meet');

    if( topBox.hasClass('meet') ){
      topBox.css({'height': topBoxHeight + sideAmount});
      leftBox.css({'width':colLeftwidth});
      targetBox.css({'top':0});//외부 박스 absolute bottom 값 적용
    }

    if( topBox.hasClass('meet') && topBox.hasClass('meet2') ){
      target.css('position', 'static');//우측 네비 fixed 해제
      target.css({marginLeft: 0});
      targetBox.css({'top':'auto', 'bottom':0});//외부 박스 absolute bottom 값 적용
    }
  }
  oldScr = nowScrollTop;
}

//radio cart
function selectCartRadio() {
  var list = $(this).parents('.cart-addres-item');
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
  var list = $(this).parents('.cart-addres-item');
  var radioBox = list.find(".basic-radio input");
  
  //활성화된 체크박스만 실행
  if( $(this).find('input[type=checkbox]').prop('disabled') == false ){
    //부모 라디오버튼이 비활성화일 때
    if( radioBox.prop('checked') == false ){
      list.addClass('is-checked');
      list.siblings().removeClass('is-checked');
      $(".basic-radio input").prop('checked', false);
      $(".cart-item-row .check-box input[type=checkbox]").prop('checked', false);
      radioBox.prop('checked', true);
      $(this).find('input').prop('checked', true);
    }
  }
}