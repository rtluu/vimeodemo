videojs('1', { "techOrder": ["vimeo"], "src": "https://vimeo.com/27246366", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;

  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($(overlay).hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/27246366');
    this.play();
  });

  video.on('play', function(){
    console.log('no');
  });

});



videojs('2', { "techOrder": ["vimeo"], "src": "https://vimeo.com/148162246", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;

  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($('.overlay').hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
    $(controlbar).removeClass('show');
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/148162246');
    this.play();
  });

});

videojs('3', { "techOrder": ["vimeo"], "src": "https://vimeo.com/33480080", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;


  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($(overlay).hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/33480080');
    this.play();
  });

});

videojs('4', { "techOrder": ["vimeo"], "src": "https://vimeo.com/200965988", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;


  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($(overlay).hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/200965988');
    this.play();
  });

});

videojs('5', { "techOrder": ["vimeo"], "src": "https://vimeo.com/77111226", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;


  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($(overlay).hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/77111226');
    this.play();
  });

});

videojs('6', { "techOrder": ["vimeo"], "src": "https://vimeo.com/201161708", "vimeo": { "ytControls": 2 }, "muted": true, }).ready(function() {
  // You can use the video.js events even though we use the vimeo controls
  // As you can see here, we change the background to red when the video is paused and set it back when unpaused
  var video = this;
  var controlbar = this.a.children[6];
  var iframeblocker = this.a.parentElement.parentElement.children[0];
  var card = this.a.parentElement.parentElement.parentElement;
  var overlay = this.a.parentElement.parentElement.parentElement.parentElement;


  $(iframeblocker).on('mouseover', function() {
    video.play();
    $(controlbar).addClass('show');
  });

  $(iframeblocker).on('mouseleave', function() {
    if($(overlay).hasClass('open')){
    } else{
      video.pause();
      $(controlbar).removeClass('show');
    }

  });

  $(card).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    $(overlay).addClass('open');
    video.volume(0.7);
    video.play();
  });

  $(overlay).click(function(){
    $(overlay).removeClass('open');
    $(controlbar).removeClass('show');
    video.volume(0);
    video.pause();
  });

  this.one('ended', function() {
    this.src('https://vimeo.com/201161708');
    this.play();
  });

});
