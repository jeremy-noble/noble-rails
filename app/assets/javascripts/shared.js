// START JQUERY
$(document).ready(function() {
  
  //COOKIES CODE
  function arrivalDate() {  //only runs the first time a visiter comes
    visitDate = new Date()
    
    myDate  = visitDate.getDate()
    myMonth = visitDate.getMonth()
    myYear  = visitDate.getFullYear()
    months = new Array()
    months[0]  = "Jan."
    months[1]  = "Feb."
    months[2]  = "Mar."
    months[3]  = "Apr."
    months[4]  = "May"
    months[5]  = "June"
    months[6]  = "July"
    months[7]  = "Aug."
    months[8]  = "Sep."
    months[9]  = "Oct."
    months[10] = "Nov."
    months[11] = "Dec."
    todaysDate = (months[myMonth] + " " + myDate + ", " + myYear)
  }
  
  //Check for 1st visit. If so: set visit counter to 1, record entry page, referrer, date, and set  currently here flag to true
  v = getCookie("visits")
  c = getCookie("currentlyhere")
  if (v == null) {
    arrivalDate()
    setCookie("visits",1,9000,"/")
    setCookie("entrypage",document.location.href,9000,"/")
    setCookie("entrydate",todaysDate,9000,"/")
    setCookie("camefrom",document.referrer,9000,"/")
    setCookie("currentlyhere","true","","/")
    //setCookie(name,value,expires,path,domain,secure)
  }
  else if (c == null) { //otherwise check if they're already here -- if not, increase the visit counter by 1 and turn on currently here flag
    y = getCookie("visits")
    y = eval(y)
    y = y + 1
    setCookie("visits",y,9000,"/")
    setCookie("currentlyhere","true","","/")
  }

  // SETTINGS FOR FACEBOOK & TWITTER SHARE WINDOWS
  function sharePopUpWindowOptions() {
    var width  = 575;
    var height = 400;
    var left   = (screen.width  - width)  / 2;
    var top    = (screen.height - height) / 2;
    opts   = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
  }
   
  // FACEBOOK SHARE BUTTON
  $('.facebook.shareButton').click( function(event) {
    event.preventDefault();
    var url = this.href
    sharePopUpWindowOptions()
    window.open(url, 'facebookShare', opts);
  });
    
  // TWITTER SHARE BUTTON
  $('.twitter.shareButton').click( function(event) {
    event.preventDefault();
    var url = this.href
    sharePopUpWindowOptions()
    window.open(url, 'twitterShare', opts);
  });
  
    // GOODIES SLIDE
  $('#goodiesLink').toggle( 
    function(){
      $('#goodies').slideDown(600, 'easeOutCubic');
    }, function() {
      $('#goodies').slideUp(350, 'easeOutCubic');
    }
  );
    
  // CLASSES MENU CLOSE BOX
  $('.touch .dropDownMenu .close').click(
    function() {
      $(this).closest('.dropDownMenu').addClass('hideDropDownMenu')
    }
  );
  $('.touch #mainNav .classes a, .touch #subNav a').click(
    function() {
      $('.dropDownMenu').removeClass('hideDropDownMenu')
    }
  );
  // FIX IE7: ELEMENTS DISAPPEARED DUE TO WRONG INHERITANCE OF VISIBILITY
  if ($.browser.msie && parseInt($.browser.version) <= 7 ) {
    $('#mainNav .classes').hover(
      function() {
        $('#mainNav #classesMenu *').css('visibility','visible')
      }
    );
  }

  // APPLY CLASS TO REMOVE BG FROM LAST CERTIFICATE LIST ITEM
  $('#certificatePrograms li:last').addClass('last');
  
  // SEMINAR REGISTRATION SLIDER POSITION
  var msie6 = $.browser == 'msie' && $.browser.version < 7;
  if ( $(".scroller").length > 0 && !msie6 ){  //only do this if the scroller item exists (which it doesn't on most pages)
    $(window).scroll(function (event) {
      // what the y position of the scroll is
      var top = $('.seminarList').offset().top;
      var y = $(this).scrollTop();
      //var bottom = $('.scroller').offset().top - $('.scroller').height();
      
      // whether that's below the top elements (do NOT change position if it's taller than the seminar list to the left)
      if( y >= top  &&  $('.seminarList').height() > $('.scroller').height() ) {  
        $('.scroller').addClass('fixed'); 
      } else {
        $('.scroller').removeClass('fixed'); 
      }
      
      var yBottom = $(this).scrollTop() + $('.scroller').height();
      var topOfContentBelow = $('.archivedSeminarList').offset().top - parseFloat( $('.archivedSeminarList').css('margin-top').replace(/auto/, 0) );
      
        //console.log( 'top = ' + top )
        //console.log( 'y = ' + y )
        //console.log( 'bottom = ' + bottom )
        //console.log( 'yBottom = ' + yBottom )
        //console.log( 'topOfContentBelow = ' + topOfContentBelow )
        //console.log(  parseFloat( $('.archivedSeminarList').css('margin-top').replace(/auto/, 0) )       )
        //console.log( '$(this).scrollTop() = ' + $(this).scrollTop() )
        //console.log( "$('.seminarList').height() = " + $('.seminarList').height() )
        //console.log( "$('.scroller').height() = " + $('.scroller').height() )
        //console.log( $('.seminarList').height() < $('.scroller').height() )
        //console.log( '---------------------' )
        
      // don't run over the content below!
      if( yBottom >= topOfContentBelow  &&  $('.seminarList').height() > $('.scroller').height() ) {
        $('.scroller').addClass('bottom'); 
      } else {
        $('.scroller').removeClass('bottom');
      }

    });
  }  
  
  function appendRoyalButtonPlay() {
    $('.royalControlNavCenterer').append('<a href="#" class="royalPlayPause play">Play</a>')
  }
  function appendRoyalButtonPause() {
    $('.royalControlNavCenterer').append('<a href="#" class="royalPlayPause pause">Pause</a>')
  }
  
  // RoyalSlider
  if ( $('#slideShow.videos').length ) { //if #slideShow.videos exists
    //slider for videos
    myRoyalSlider = $('#slideShow.videos').royalSlider({
      slideshowEnabled: false,
      hideArrowOnLastSlide:false,
      dragUsingMouse: false,
      directionNavAutoHide: false,
      preloadNearbyImages:false,
      slideshowDelay:10000,
      beforeSlideChange: function(){
        jwplayer(myRoyalSlider.lastSlideId).pause(true);
      },
      afterSlideChange: function(){
        jwplayer(myRoyalSlider.currentSlideId).play(true);
      }
    }).data("royalSlider");
    // Create Play Button
    appendRoyalButtonPlay();
  } 
  else if ( $('#slideShow.flash').length ) { //if #slideShow.flash exists
    //"flash" slider, that contains flash movies
    myRoyalSlider = $('#slideShow').royalSlider({
      slideshowEnabled: true,
      hideArrowOnLastSlide:false,
      dragUsingMouse: false,
      directionNavAutoHide: true
      }).data("royalSlider"); 
    // Create Pause Button
    appendRoyalButtonPause();
  } else {
    //"normal" slider, for images
    myRoyalSlider = $('#slideShow').royalSlider({
      slideshowEnabled: true,
      hideArrowOnLastSlide:false,
      directionNavAutoHide: true
      }).data("royalSlider"); 
    // Create Pause Button
    appendRoyalButtonPause();
  }
  
  //Play/Pause the slideshow
  $('.royalPlayPause').click(function(){
    if ($(this).attr("class") == "royalPlayPause pause") {
      myRoyalSlider.stopSlideshow()
      $('.royalPlayPause').attr('class','royalPlayPause play')
      $('.royalPlayPause').html('Play')
    } else {
      myRoyalSlider.resumeSlideshow()
      myRoyalSlider.next() //auto advance to they know they clicked the play button
      $('.royalPlayPause').attr('class','royalPlayPause pause')
      $('.royalPlayPause').html('Pause')
    }
  });

  // Adjust position of arrows in classSlider so they are centered with slide indicator dots
  try{
    var myClassSliderWidth = $('.classSlider').width()
    var mySlideNavItemWidth = $('.royalControlNavCenterer a').width()
    var myPlayPauseBtnWidth = $('.royalPlayPause').width()
    var mySlideNavWidth = mySlideNavItemWidth * myRoyalSlider.numSlides + myPlayPauseBtnWidth
    var myArrowWidth = $('.classSlider .arrow').width()
    var myCenteredArrowOffset = myClassSliderWidth/2 - mySlideNavWidth/2 - myArrowWidth
  
    $('head').append('<style type="text/css">.royalSlider.classSlider .arrow.centeredRight { right:' + myCenteredArrowOffset + 'px }</style>')
    $('.classSlider .arrow.right').addClass('centeredRight')
    
    $('head').append('<style type="text/css">.royalSlider.classSlider .arrow.centeredLeft { left:' + myCenteredArrowOffset + 'px }</style>')
    $('.classSlider .arrow.left').addClass('centeredLeft')
  }catch(e){}
    
  // WHY TRAIN WITH NOBLE: ACCORDIAN
  $('.whyNoble .reasonsList').accordion({ 
    header: 'h3', 
    autoheight: false,
    active: false,
    alwaysOpen: false
  });
  
  // DIRECTIONS: EXPAND/COLLAPSE
  $('.directionsList h3').click( function() {
    $(this).next().slideToggle();
  })
  
  // WHY TRAIN WITH NOBLE: REMOVE DOTTED LINK OUTLINE FROM IE7
  $('.ie7 .whyNoble h3 a').live('mousedown', function(e) {
    e.target.blur();
    e.target.hideFocus = true;
    e.target.style.outline = 'none'
  }).live('mouseout', function(e) {
    e.target.blur();
    e.target.hideFocus = false;
    e.target.style.outline = null;
  });

  // CLEAR PLACEHOLDER TEXT
  function clearFormPlaceholderText(element, initialText) {
    $(element).focus(function() {
      if ($(this).val() == initialText) {
        $(this).val('');
      }
    }).blur(function() {
      if ($(this).val() == '' ) {
        $(this).val( initialText );
      }
    });
  }
  
  clearFormPlaceholderText( '#footerSignUpEmail', 'example@address.com' )
  clearFormPlaceholderText( '#seminarRegistration #firstName', 'First Name' )
  clearFormPlaceholderText( '#seminarRegistration #lastName', 'Last Name' )
  clearFormPlaceholderText( '#seminarRegistration #email', 'Email' )
  clearFormPlaceholderText( '#freeClassSignUp input[name=firstName]', 'First Name' )
  clearFormPlaceholderText( '#freeClassSignUp input[name=lastName]', 'Last Name' )
  clearFormPlaceholderText( '#freeClassSignUp input[name=email]', 'Email Address' )
  clearFormPlaceholderText( '.newsletterSignUp input[name=email]', 'Email' )
  clearFormPlaceholderText( '.seminarArchiveRegisterCol #firstName', 'First Name' )
  clearFormPlaceholderText( '.seminarArchiveRegisterCol #lastName', 'Last Name' )
  clearFormPlaceholderText( '.seminarArchiveRegisterCol #email', 'Email' )
  

  
  // ANIMATE NAMED ANCHORS
  $.localScroll({
        duration: 1000,
    hash: true,
        easing: 'easeOutQuint'
    });   
  
  
  //OBFUSCATED CONTACT LINK
  function educatorEmail() {
    var mLink1 = '<a href="mai'
    var mLink2 = 'lto'
    var mLink3 = ':&#101;&#100;&#117;&#99;&#97;&#116;&#111;&#114;&#45;&#105;&#110;&#45;&#99;&#104;&#105;&#101;&#102;'
    var mLink4 = '@'
    var mLink5 = '&#110;&#111;&#98;&#108;&#101;&#100;&#101;&#115;&#107;&#116;&#111;&#112;&#46;&#99;&#111;&#109;">'
    var mLink6 = '&#101;&#100;&#117;&#99;&#97;&#116;&#111;&#114;&#45;&#105;&#110;&#45;&#99;&#104;&#105;&#101;&#102;'
    var mLink7 = '@'
    var mLink8 = '&#110;&#111;&#98;&#108;&#101;&#100;&#101;&#115;&#107;&#116;&#111;&#112;&#46;&#99;&#111;&#109;<\/a>'
    $('.mLink').html(mLink1 + mLink2 + mLink3 + mLink4 + mLink5 + mLink6 + mLink7 + mLink8)
  }
  educatorEmail() // call the function
  
  //ADD COOKIE TO FORM
  function addCookiesToForm() {
    //find any form elements on page
    $('form').each(function(index, element) {
      //put formfield names into an array
      var arrFormNames = [ "entrypage", "entrydate", "numberofvisits", "referrerpage" ];
      //loop over array
      $.each(arrFormNames,function(i,obj) {
        //check if inputs exist
        if ($(element).children('input[name='+ obj + ']').length == 0){
          // create form field
          $(element).append('<input name="' + obj + '" type="hidden" value="">')
        }
      })
    });
    //set values in form
    $('input[name=entrypage]').val(getCookie("entrypage"));
    $('input[name=entrydate]').val(getCookie("entrydate"));
    $('input[name=numberofvisits]').val(getCookie("visits"));
    $('input[name=referrerpage]').val(getCookie("camefrom"));
  }
  
  addCookiesToForm()
  
  //CERTIFICATES: REVEAL CLASS INFO 
  $('#certificateClassList .learnMoreLink').click( function(){
    $(this).next('.classDescrip').slideToggle(400,'easeOutQuad')
  })
  
  
  // FANCYBOX
  $(".classPrice .discounts, .course .discounts, .bookDiscountLink").fancybox({  //DON'T FORGET TO  ADD THE fancybox.ajax CLASS TO THE LINK!
                   //.course .discounts is on the schedule page
      padding: 0,
        width: 710,
        height: 'auto',
        autoSize: false,
        fitToView: false,
        
        openEasing: 'easeOutCirc',
        closeEasing: 'easeInCirc',
        
        openSpeed: 250,
        closeSpeed: 100,
        
        openEffect: 'elastic',
        closeEffect: 'elastic',
      ajax:{
          dataFilter: function(data) {
            return $(data).find('#discounts'); // can use filter or find - if one doesn't work, try the other
            }
         },
      beforeShow: function(){ educatorEmail() } // this is needed to execute the JS to create the email for Book Discounts
      });
    
  //VALIDATE FREE CLASS SIGNUP
  
  //add a method to check if it is not equal to a value
  $.validator.addMethod("notEqual", function(value, element, param) {
    return this.optional(element) || value !== param;
  }, "Not Valid");
  
  //set default msg
  $.validator.messages.required = 'Required';
  
  //run validation
  $('#freeClassSignupForm').validate({
    rules: {
      firstName: {
        required: true,
            notEqual: "First Name"
      },
      lastName: {
        required: true,
            notEqual: "Last Name"
      },
      email: 'required email'
    },
    messages: {
      email: 'Not Valid'
    }
  });
  
  //VALIDATE ENEWS SIGNUP IN FOOTER
  $('#footerSignUp').validate({
    invalidHandler : function() {
      $("#footerSignUp").effect("shake", { times:3 }, 80, function(){
        $("#footerSignUp").focus();  //performed as a callback so focus works
      });
        },
    rules: {
      email: {
        required: true,
        notEqual: "example@address.com",
        email: true
      }
    },
    messages: {
      email: ''
    }
  });
});
