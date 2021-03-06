(function( $ ){

//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
	//  ---------------------------- check if is mobile or tablet ------------------------------
  $.fn.CSiS = function(options) {
		 (function(a){jQuery.browser.mobile=/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
		 // ------------------------------ end of checking for devices -----------------------
		 // checking screen dimensions
		 // Thanks to Mark 'Tarquin' Wilton-Jones - author of http://www.howtocreate.co.uk/
		 var screenWidth = 0;
		 var screenHeight = 0;
		 function getScreenDimensions () {
		 if( typeof( window.innerWidth ) == 'number' ) {
    	 	//Non-IE
    	 	screenWidth = window.innerWidth;
    	 	screenHeight = window.innerHeight;
  	 	 	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    		 //IE 6+ in 'standards compliant mode'
    	 	screenWidth = document.documentElement.clientWidth;
    	 	screenHeight = document.documentElement.clientHeight;
  	 	 	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    	 	//IE 4 compatible
    	 	screenWidth = document.body.clientWidth;
   		 	screenHeight = document.body.clientHeight;
  		 }};
		 getScreenDimensions();
//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
		 // -------------------------  default options ------------------------
		 var defaults = {
			 slideWidth: 			1000,
	   		 slideHeight: 			560,
	   		 speed: 				4000,
	   		 autofit: 				true,
	   		 enable_rightClick: 	false,
	   		 enable_imageDrag: 		false,
			 lr_button_anim:		"drop",
			 button_speed:			200,
			 retina_folder:			"pics/retina/", 
			 retina_text:			"_retina",
			 retina_HD_enable:		false,
			 mobile_zoom_disable:	true,
			 slide_title_anim:		"drop",
			 slide_title_speed:		300,
			 slide_title_direction:	"left",
			 slide_desc_speed:		300,
			 onClick_show_desc:		true,
			 slide_desc_position:	"down",
			 responsive_mode: 		true,
			 lr_on_key_move:		true
		 };
		 // --------------------------- end of default options ---------------------------
//_____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________
		 //  basic variables
		 var settings = $.extend(defaults,options);
		 var slideWidthTakeDefaults = defaults.slideWidth;
		 var slideHeightTakeDefaults = defaults.slideHeight;
		 var sliderHolder = $("#slider-holder");
		 var sliderID = $("#slider");
		 var slides = $('.content');
		 var contImg = $('.content img');
		 var bodyHTML = $('html, body');
		 var mainIMG = $('.main img');
		 var mainDIV = $('.main');
		 var mainDIVhas = $('.main div');
		 var slideDescHolder = $('.slide-desc-holder');
		 var titleC = $('.slide-title');
		 var titleHeader = $('.slide-title h3');
		 var descDesc = $('.slide-desc');
		 var speed = defaults.speed;
		 var autofit = defaults.autofit;
		 var lrba = defaults.lr_button_anim;
		 var bss = defaults.button_speed;
		 var sTitle_anim = defaults.slide_title_anim;
		 var sTitle_speed = defaults.slide_title_speed;
		 var sDesc_speed = defaults.slide_desc_speed;
		 var sTitle_direct = { direction : defaults.slide_title_direction };
		 var sDescPosition = defaults.slide_desc_position;
		 var setHeight, slideWidth, slideHeight; // used in screenDimensions()
		 var rt3, hideNav, sdesc; // used in window.bind = resize
		 var currentPosition = 0; 
		 var retina = window.devicePixelRatio > 1;
		 var responsiveMode = defaults.responsive_mode;
		 var numberOfSlides = slides.length; 
		 //slideShowInterval; 
		 if (speed != 0) {
		 	var slideShowInterval = setInterval(changePosition, speed);
		 };
		 // function for define css div dimensions taken by defaults
		 function csswh () {
		 	var csswh = {'width' : slideWidth, 'height' : slideHeight};
			sliderID.css(csswh);
		 	sliderHolder.css(csswh);
		 	slides.css(csswh);	
			mainDIV.css({'width' : slideWidth, 'height' : slideHeight, 'margin-top' : 0, 'margin-left' : 'auto', 'margin-right' : 0});
		 };
		 // hide unnecessarily stuff when is present only one slide
		 if (numberOfSlides == 1) {
			 $('.nav').hide();
			 speed = 0;
		 };
		 slides.wrapAll('<div id="slidesHolder"></div>')
		 var slidesHolder = $('#slidesHolder');
		 // on browser resize fix
		 function DFloat (){
		 	slidesHolder.css('width', slideWidth * numberOfSlides);
		 	slides.css({ 'float' : 'left' });	
		 };
		 DFloat();
		 // disable right click on images
		 if (defaults.enable_rightClick == false) {
        	contImg.bind("contextmenu",function(e){
            	return false;
         	});
		 };
		 // disable image draging
		 if (defaults.enable_imageDrag == false) {
        	slides.bind("mousedown",function(e){
            	return false;
        	});
		 };
		 // function for slider resizing if is slider bigger than display and basic dimensions taken by defaults
		 function screenDimensions () {
			getScreenDimensions();
			var csswh_count = {'width' : slideWidthTakeDefaults, 'height' : slideHeightTakeDefaults};
			sliderID.css(csswh_count);
		 	sliderHolder.css(csswh_count);
		 	slides.css(csswh_count);
			var firstSlideWidth = sliderID.outerWidth();
			var firstSlideHeight = sliderID.outerHeight();
			if (responsiveMode == true &&(firstSlideWidth > screenWidth || firstSlideHeight > screenHeight)) { 
		 		slideWidth = screenWidth; 
				var ch = firstSlideWidth / screenWidth;
				setHeight = firstSlideHeight / ch;
				slideHeight = setHeight;
				if (setHeight > screenHeight) {
					slideHeight = screenHeight;
				}
		 		DFloat();
				csswh();
		 		}
			else {
				slideWidth = firstSlideWidth;
				slideHeight = firstSlideHeight;
		 		DFloat();
				csswh();
			}
		  }
		  screenDimensions();
		  var HD = (slideWidth > 1500 || slideHeight > 845);
		  // fix for multiple slide moving when browser is resized
		  function fixImage () {
			moveSlide();
		  };
		  // function for slider dimensions change on browser resize 
		  $(window).bind('resize', function () {
			 capCheck = 1;
			 screenDimensions();
			 defineContent();
			 sliderHolder.removeClass("itsUp");
			 hidePag();
			 clearTimeout(rt3);
			 clearTimeout(hideNav);
			 clearTimeout(sdesc);
			 rt3 = setTimeout(fixImage, 100);
			 hideNav = setTimeout(manageNav, 1);
			 sdesc = setTimeout(sDesc, 1);
		  });
		  // code only for devices
		  if (jQuery.browser.mobile) {
			var isMobile = true;
		 	if(defaults.mobile_zoom_disable == true)
		 	{
   				$(document.head).append('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10.0, minimum-scale=1, user-scalable=1" />');
		 	}
			mainIMG.click(function(){
        		bodyHTML.animate({scrollTop:sliderID.position().top}, 'slow');
        		return false;
    		});
			slides.click(function(){
        		bodyHTML.animate({scrollTop:sliderID.position().top}, 'slow');
        		return false;
    		});
		 };
		 // show preloader and everything in slider on load finish
		 slides.hide();
		 sliderHolder.hide();
		 sliderID.prepend('<div id="preloader"></div>');
		 $(window).load(function () {  slides.fadeIn(400).show();
			$('#preloader').hide();
			sliderHolder.show();
			defineContent();
			$('#pagination-hold').find('[data-go="'+currentPosition+'"]').addClass('pag_current');
		 } );
		 // --------------- default slider behaviour - moving and timing --------------------
		 sliderHolder .prepend('<span class="nav" id="leftNav"></span>') .append('<span class="nav" id="rightNav"></span>');
		 sliderHolder .prepend('<span id="playpause"></span>');
		 // calls
		 var leftNav = $('#leftNav');
		 var rightNav = $('#rightNav');
		 // play / pause button function
		 var navPlay = 1;
		 var PPButton = $('#playpause');
		 function playItOr () {
			if (PPButton.hasClass("classByButton") || sliderHolder.hasClass("itsUp") || mainDIV.hasClass("itsPlayed")) {
				if(retina) {
					PPButton.css({'background-image' : 'url(template/images/play_white_retina.png)'});
				} else {
					PPButton.css({'background-image' : 'url(template/images/play_white.png)'});
				};
				clearInterval(slideShowInterval);
				navPlay = 0; 
			} else {
				if (retina) {
					PPButton.css({'background-image' : 'url(template/images/pause_white_retina.png)'});
				} else {
					PPButton.css({'background-image' : 'url(template/images/pause_white.png)'});
				};
				if (speed != 0) {
					slideShowInterval = setInterval(changePosition, speed);
				};
				navPlay = 1;
			}
		 };
		 PPButton.click(function () {
			$(this).toggleClass("classByButton");
			if (sliderHolder.hasClass("itsUp")) {
				if ( $(this).hasClass("nonono") ) {
			 				e.preventDefault;
    					} else {
							var ohhe = $(this);
							$(this).addClass("nonono");
        					setTimeout(function() {
            					ohhe.removeClass("nonono"); 
								descDesc.slideToggle(sDesc_speed);
								arup.delay(sTitle_speed).toggle("drop",{"direction":"up"},sTitle_speed);       
        					}, 100) ;
						}
						sliderHolder.removeClass("itsUp");
						PPButton.removeClass("classByButton");
			};
			playItOr();
		 });
		 // hide play/pause button when autoplay is disabled
		 if (speed == 0) {
			  $("#playpause").hide();
		 };
		 // behaviour for just loaded slider
		 leftNav.hide();
		 rightNav.hide();
		 if(numberOfSlides == 1) {
			  rightNav.hide() 
		 } else  
		 {
			 rightNav.show();
		 }
		 // define what will happend on sliders end
		 function changePosition() 
		 { 
		 	if(currentPosition == numberOfSlides - 1) 
			{ 
				currentPosition = 0; 
			}
			else 
			{ 
				currentPosition++; 
			} 
			moveSlide(); 
		 }
		
		 function manageNav(position) { 
		 // hide arrows on small screen size // manage arrows depends on current slider position
		 if (screenWidth <= 500 || screenHeight <= 200) {
			 leftNav.hide();
			rightNav.hide();
		 } else {	
		 if(position == 0){ 
			if (lrba != "none") {
				leftNav.hide(lrba, { direction: "left" }, bss) 
			}
			else { leftNav.hide() }
		 } 
		 else if (position > 0) 
		 { 
			if (lrba != "none") {
				leftNav.show(lrba, { direction: "left" }, bss) 
			}
			else { leftNav.show() }
		 }
		 if(position == numberOfSlides-1){ 
			if (lrba != "none") {
				rightNav.hide(lrba, { direction: "right" }, bss) 
			}
			else { rightNav.hide() }
		 } 
		 else { 
			if (lrba != "none") {
				rightNav.show(lrba, { direction: "right" }, bss) 
			} 
			else { rightNav.show() }
			
			}
			}
		
		 }
		 manageNav(currentPosition); 
		 // define what will happend depending on sliders current positon
		 function changePosition() { if(currentPosition == numberOfSlides - 1) { currentPosition = 0; manageNav(currentPosition); } else { currentPosition++; manageNav(currentPosition); } moveSlide();titleAnim(); }
		 // on arrow click
		 
		 $('.nav').bind('click', function() { 
		 // fix for getting out of slider
		 	if ( $(this).hasClass("noClick") ) {
			 	e.preventDefault;
    		} else {
				var elem = $(this);
				$(this).addClass("noClick");
        		setTimeout(function() {
            		elem.removeClass("noClick");          
        		}, 200) ;
			}
			currentPosition = ($(this).attr('id')=='rightNav') ? currentPosition+1 : currentPosition-1;
			manageNav(currentPosition); 
			// behaviour on play / pause
			if (navPlay == 1) {
				clearInterval(slideShowInterval); if (speed != 0) { slideShowInterval = setInterval(changePosition, speed); };
			} 
			else if (navPlay == 0) {
				clearInterval(slideShowInterval); 
			}
			moveSlide(); titleAnim();
		}); 
		
		if (defaults.lr_on_key_move == true) {
			// action (move slider) when is left arrow key pressed
			$(document).keyup(function(e){
    			if (e.keyCode == 37) { 
					if ( !$('.nav').hasClass("noClick") && currentPosition != 0) {
						var elem = $('.nav');
						$('.nav').addClass("noClick");
        				setTimeout(function() {
            				elem.removeClass("noClick");          
        				}, 200);
						if (currentPosition != 0) { currentPosition = currentPosition - 1; }
						manageNav(currentPosition); 
						if (navPlay == 1) {
							clearInterval(slideShowInterval); if (speed != 0) { slideShowInterval = setInterval(changePosition, speed); };
						} 
						else if (navPlay == 0) {
							clearInterval(slideShowInterval); 
						}
						moveSlide(); titleAnim();
					}
    			}
			});
			// action (move slider) when is right arrow key pressed 
			$(document).keyup(function(e){
    			if (e.keyCode == 39) { 
					if (!$('.nav').hasClass("noClick") && currentPosition != (numberOfSlides - 1)) {
						var elem = $('.nav');
						$('.nav').addClass("noClick");
        				setTimeout(function() {
            				elem.removeClass("noClick");          
        				}, 200) ;
						if (currentPosition != (numberOfSlides - 1)) { currentPosition = currentPosition + 1; }
						manageNav(currentPosition); 
						if (navPlay == 1) {
							clearInterval(slideShowInterval); if (speed != 0) { slideShowInterval = setInterval(changePosition, speed); };
						} 
						else if (navPlay == 0) {
							clearInterval(slideShowInterval); 
						}
						moveSlide(); titleAnim();
					}
    			}
			});
		};
		
		// animate slider moving
		function moveSlide() 
		{ 
			slidesHolder .animate({'marginLeft' : slideWidth*(-currentPosition)}); 
			$('#pagination-hold ul').removeClass('pag_current');
			$('#pagination-hold').find('[data-go="'+currentPosition+'"]').addClass('pag_current');
		}
		// --------------- end of default slider behaviour - moving and timing --------------------
		// if is retina enabled, all images in slider will be replaced with retina images
		 mainIMG.each(function(index) {
		 if (retina || HD) {
			 if (defaults.retina_HD_enable == true) {
				 if (defaults.retina_folder == "" || defaults.retina_folder == " ") {
			 		 var srcLink_noFolder = $(this).attr('src').split('.');
			 		 var noFolImgName = srcLink_noFolder[0];
			 		 var noFolImgExt = srcLink_noFolder[1];
					 $(this).attr("src", noFolImgName+defaults.retina_text+"."+noFolImgExt);
				 } else {
					 var srcLink = $(this).attr('src');
			 		 var ji = srcLink.lastIndexOf("/") + 1;
			 		 var justImage = srcLink.substr(ji);
			 		 var imageSplit = justImage.split('.');
			 		 var imgname = imageSplit[0];
			 		 var imgex = imageSplit[1];
					 $(this).attr("src", defaults.retina_folder+imgname+defaults.retina_text+"."+imgex);
				 }
			 }
		 }
		 });
		 // retina left and right arrow
		 if (retina) {
    		leftNav.css({'background-image' : 'url(template/images/sllb_retina.png)'});
			rightNav.css({'background-image' : 'url(template/images/slrb_retina.png)'});
		 }
		 else {
    		leftNav.css('background-image', 'url(template/images/sllb.png)');
			rightNav.css('background-image', 'url(template/images/slrb.png)');
		 }
		 // Edited with permission 
		 // Thanks to James Lin ( http://james.lin.net.nz/ )
		 // slider swipe
		 var down_x = null;
		 var up_x = null;
		 var down_y = null;
		 var up_y = null;
  		
 		 slides.bind('touchstart', function(e){
   			down_x = e.originalEvent.touches[0].pageX;
			down_y = e.originalEvent.touches[0].pageY;
  		 });
  		 slides.bind('touchmove', function(e){
    		up_x = e.originalEvent.touches[0].pageX;
			up_y = e.originalEvent.touches[0].pageY;
  		 });
  		 slides.bind('touchend', function(e){
    		do_work();
  		 });
		 slides.mousedown(function(e){
    		down_x = e.pageX;
			down_y = e.pageY;
  		 });
  		 slides.mouseup(function(e){
    		up_x = e.pageX;
			up_y = e.pageY;
    		do_work();
 		 });
		 function do_work()
		 {
  			if ((down_y - up_y) > 50)
    		{
        		bodyHTML.animate({
        			scrollTop: $(window).scrollTop() + 50
    			})
    		}
  			if ((up_y - down_y) > 50)
    		{
        		bodyHTML.animate({
        			scrollTop: $(window).scrollTop() - 50
    			})
   			}
  			if ((down_x - up_x) > 50)
    		{
        		slide_right();
    		}
  			if ((up_x - down_x) > 50)
    		{
        		slide_left();
    		}
		 }
		 // End of edit (slider swipe)
		 // functions for swipe working
		 function slide_right()
		 {
			if(currentPosition == numberOfSlides - 1) 
			{ 
				//currentPosition = 0; 
			}
			else { 
  				currentPosition = currentPosition+1;
				manageNav(currentPosition); clearInterval(slideShowInterval);  moveSlide();
				if (navPlay == 1) {
					if (speed != 0) {
				slideShowInterval = setInterval(changePosition, speed);
					};
				}
			}
		 }
		 function slide_left()
		 {
  			if (currentPosition > 0) {
				currentPosition = currentPosition-1;
				manageNav(currentPosition); clearInterval(slideShowInterval); moveSlide();
				if (navPlay == 1) {
					if (speed != 0) {
				slideShowInterval = setInterval(changePosition, speed);
					};
				}
			}
		 }
		 // ---------------- part for description --------------
		 // "more" text on description title
		 $('.slide-desc-holder') .prepend('<span class="more_info">&raquo;</span>');
		 var arup = $('.more_info');
		 // part for change position depends on user inputs // if there's no description remove more text
		 var sDescAttr = 0;
		 var arupStatus = "";
		 slideDescHolder.each(function () {	
		 // "more" decoration text rotation
		 	var rotationDown = {
		 					'-webkit-transform': 'rotate(90deg)',
		 					'-moz-transform': 'rotate(90deg)',
		 					'-ms-transform': 'rotate(90deg)',
		 					'-o-transform': 'rotate(90deg)',
		 					'filter': 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)'
		 					};
			sDescAttr = $(this).attr('data-descpos');
			if (sDescPosition == "down") {
				if(sDescAttr) {
					if (sDescPosition == sDescAttr) {
						$(this).attr('style','bottom:0');
					}
					else {
						if (sDescAttr == "up") {
							$(this).attr('style','top:0');
							$(this).children('.more_info').css(rotationDown);
						}
					};
				} else {		
					$(this).attr('style','bottom:0');
				};
			}
			else if (sDescPosition == "up") {
				if(sDescAttr) {
					if (sDescPosition == sDescAttr) {
						$(this).attr('style','top:0');
						$(this).children('.more_info').css(rotationDown);
					}
					else {
						if (sDescAttr == "down") {
							$(this).attr('style','bottom:0');
						}
					}
				} else { 
					$(this).attr('style','top:0');
					$(this).children('.more_info').css(rotationDown);
				}
			};
		});
		// title animation (disabled on devices)
		function titleAnim () {
			if (numberOfSlides != 1) {
				if (isMobile != true) {
					titleHeader.hide();
					titleHeader.delay(500).show(sTitle_anim,sTitle_direct,sTitle_speed);
				} else { 
					titleHeader.show(); 
				}
			}
		};
		// function for description // fix for multiple animation on title click // disable description on small screens 
		var checkPPonDesc = 0;
		function sDesc () {
			if (screenWidth < 700 || screenHeight < 500) {
				titleC.show();
				titleC.addClass("nonono");
				descDesc.hide(); 
				arup.hide();
				titleC.click(function () {
					if ( $(this).hasClass("nonono2") ) {
			 				e.preventDefault;
    					} else {
							var ohhe2 = $(this);
							$(this).addClass("nonono2");
        					setTimeout(function() {
            					ohhe2.removeClass("nonono2");   
								e.preventDefault;      
        					}, 100) ;
						}
				});
				titleC.css('cursor','auto');
			}
			else if (screenWidth >= 700 || screenHeight >= 500) {
				if (defaults.onClick_show_desc == true) {
					titleC.show();
					titleC.removeClass("nonono2");
					titleC.removeClass("nonono");
					descDesc.hide();
					titleAnim();
					titleC.css('cursor','pointer');
					titleC.click(function () {
						if ( $(this).hasClass("nonono") ) {
			 				e.preventDefault;
    					} else {
							var ohhe = $(this);
							$(this).addClass("nonono");
        					setTimeout(function() {
            					ohhe.removeClass("nonono"); 
								descDesc.slideToggle(sDesc_speed);
								arup.delay(sTitle_speed).toggle("drop",{"direction":"up"},sTitle_speed);       
        					}, 100) ;
						}
						sliderHolder.toggleClass("itsUp");
						playItOr();
					});
					slideDescHolder.each(function () {
			if ($(this).children('.slide-desc').length < 1) {
				$(this).children('.more_info').css({'visibility':'hidden'});
				$(this).children('.slide-title').css('cursor','auto');
				titleC.click(function () {
				e.preventDefault;
				});
			}      });
				} else {
					titleC.show();
					descDesc.show();
					arup.hide();
					titleC.css('cursor','auto');	
					titleAnim();
				}
			};
			
		};
		sDesc();
		// -------------------- end of part for description -------------------
		// detect slide type (content, image or video)
		var margin, divideHeight, divideWidth, getImgHeight;
		var capCheck = 0;
		function defineContent () {
			mainDIV.each(function(){ 
		  		var videoThis = $(this);
		  		// check for any additional div or child element (detect content)
				if (($(this).children("img").length == 1 && ($(this).children("img").attr('data-link') || $(this).children("img").attr('data-frame'))) || ($(this).children("img").length == 1 && $(this).children().length == 1 && $(this).children("div").length == 0)) {  			// check for text length (detect content with text only or one image and text)
						var TestForText = $(this)
    					.clone()    //clone the element
    					.children() //select all the children
    					.remove()   //remove all the children
    					.end()  //again go back to selected element
    					.text();
						var	trimedTestForText = $.trim(TestForText);
						if(trimedTestForText.length == 0) {
							// if image have url or video caption
							if (capCheck == 0) {
								// url
		 						if ($(this).children("img").attr('data-link')) {
					 				var isThis = $(this);
					 				$(this).prepend('<div class="imgLinked"></div>');
					 				$(this).children(".imgLinked").click(function () {
						 			window.location = isThis.children("img").attr('data-link');
					 			});
				 			};
				 			// video in iframe
				 			if ($(this).children("img").attr('data-frame')) {
					 		var isThis = $(this);
					 		$(this).prepend('<div class="imgVideo"></div>');
					 		$(this).children(".imgVideo").click(function () {
						 		isThis .prepend ('<div class="slide-overlay"></div>');
						 		$('.slide-overlay') .prepend('<div id="video_overlay">'+isThis.children("img").attr('data-frame')+'</div>');
						 		videoThis.addClass("itsPlayed");
						 		playItOr();
						 		$('.slide-overlay').prepend('<a class="xBtn"><div id="close">x</div></a>');
						 		$('iframe#yt').attr('src',$('iframe#yt').attr('src')+'&autoplay=1&wmode=transparent');
						 		$('iframe#vimeo').attr('src',$('iframe#vimeo').attr('src')+'?autoplay=1');
						 		$('iframe[id^="viddler"]').attr('src',$('iframe[id^="viddler"]').attr('src').replace('autoplay=0','autoplay=t'));
						 		$('iframe[id^="viddler"]').attr('src',$('iframe[id^="viddler"]').attr('src')+'&wmode=transparent');
					 		});
				 		};
		 			};
		 			// image always fulfill entire slider
					if (autofit == true) {		 
				 		$(this).children("img").css({ 'width' : '100%', 'height' : ''});
				 		getImgHeight = $(this).children("img").height();
				 		divideWidth = $(this).children("img").height() / slideHeight;
				 		divideHeight = $(this).children("img").width() / slideWidth;
				 		if (getImgHeight < slideHeight) {
					 		$(this).children("img").css({'width' : 'auto', 'height' : slideHeight});
					 			if ($(this).children("img").attr('data-pos')) {
						 			margin = -(($(this).children("img").width() - slideWidth) * ($(this).children("img").attr('data-pos') * 0.01));
								}
								else {
					 				margin = -(($(this).children("img").width() - slideWidth) * 0.5);
								}
					 			$(this).children("img").css({'width' : 'auto', 'height' : slideHeight, 'margin-left' : margin, 'margin-top' : 0});
				 			} else {
					 			$(this).children("img").css({ 'width' : slideWidth, 'height' : 'auto'});
									if ($(this).children("img").attr('data-pos')) {
						 				margin = -(($(this).children("img").height() - slideHeight) * ($(this).children("img").attr('data-pos') * 0.01));
				 					}
				 					else {
					 					margin = -(($(this).children("img").height() - slideHeight) * 0.5);
				 					}
				 					$(this).children("img").css({ 'width' : slideWidth, 'height' : 'auto', 'margin-top' : margin, 'margin-left' : 0});
				 				}	
		 					}
		 				else {
			 				$(this).children("img").css('width','100%');
		 				}
					}
				};
		  	});
		};
		// when video is active - action on X button click (close video)
		$(".xBtn").live({click:function(){ 
		  	$(".slide-overlay").remove();
		  	mainDIV.removeClass("itsPlayed");
			playItOr();
		}});   
		// close video with escape key
		$(document).keydown(function(e){
    		if (e.keyCode == 27 && mainDIV.hasClass("itsPlayed")) { 
		   		$(".slide-overlay").remove();
				mainDIV.removeClass("itsPlayed");
				playItOr();
    		}
		});
		//----- pagination --------
		var pager = 0;
		// count slides and draw
		slides.each(function(){
			$("#pagination-hold").append("<ul data-go='"+pager+"'></ul>");
			pager++;			  
		});
		// on click action - go to chosen slide
		$("#pagination-hold ul").click(function(){ 
			var goTo = $(this).attr('data-go');
		  	currentPosition = goTo-1;
			clearInterval(slideShowInterval);  changePosition();
			if (navPlay == 1) {
				if (speed != 0) {
					slideShowInterval = setInterval(changePosition, speed);
				};
			}
		});
		// hide pagination on small display
		function hidePag () {
		  	if (screenWidth < 320 || numberOfSlides == 1) {
				$("#pagination-hold").hide();
			} else {
				$("#pagination-hold").show();
			}
		};
		hidePag();
		// ---------- end of pagination -------
	}; // end of $.fn.CSiS = function(options)
})( jQuery );