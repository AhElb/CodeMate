$(document).ready(function(){

	
  $('#nav-icon2').click(function(){
    $('#nav-icon2').toggleClass('open');
  });


$('#opench').click(function(){
		$('.chat').toggleClass("helight");
        $('.messanger').toggleClass("opacity");



});


$('.category button').click(function(){
$('.category button').removeClass("activebtn");
$(this).addClass("activebtn");



});







$('.form-ask').click(function(){
		
		var value1 =$(this).val();

		$(".ask-title").html(value1);






});



$('.demo').click(function(){
		
		var url_value =$(this).val();

		$('#ifram-web').attr('src', url_value);


$('.modal').removeClass('loaded');



$('#ifram-web').on( 'load', function() {
  $('.modal').addClass('loaded');

} );


});









$('.detail-close').click(function(){
		
    $('.project-detail').css('height','0px ');





});


$('.details-btn').click(function(){
		
    $(this).next().css('height','100%');






});

$('#detail-close').click(function(){
		
$('.project-detail').css('height','0 !important');





});






var slide = $('.slide');
slide.owlCarousel({
    items:1,
    loop:false,
    margin:10,
    autoplay:false,
    dots:true,
    dotsContainer: '.test',
     touchDrag  : false,
     mouseDrag  : false,


    nav:false,
    


});

$('.bookmarks').on('click', 'a', function(e) {
			    slide.trigger('to.owl.carousel', [$(this).index(), 300]);
			   $(this).addClass("active");
			   			   $('.swap a:nth-child(1)').removeClass("active2");

	});





var options = {
  strings: ['<span> CodeMate </span> for programing '],
  typeSpeed: 50,
   
  loop: false,
  loopCount: 1,
    showCursor: false,
     
      startDelay: 3010,




};



var typed = new Typed('.element', options);




$('.slid').owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:false,
    nav:true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],

    dots:false,
    responsive:true,

    responsive : {
    // breakpoint from 0 up
    0 : {
       items: 1
    },
    // breakpoint from 480 up
    550 : {
       items: 2
    },
    // breakpoint from 768 up
    768 : {
       items: 3
    }
}
    
});

var owl = $('.slidd');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,

    autoplayTimeout:7000,
    autoplayHoverPause:true,
    dots:true,
    nav:false,
    


});





});



$(window).on( 'load', function() {

 $('body').addClass('loaded-page');


} );
