(function() {
    'use strict';
    // var $container = $('.gallery-items');
    // $container.imagesLoaded(function() {
    //     $container.masonry({
    //         columnWidth: 200,
    //         itemSelector: '.mix'
    //     });
    // });
    
})();

$(window).load(function() {
	var $container = $('.gallery-items');
	$('.gallery-items').mixItUp();
	// $container.imagesLoaded(function() {
 //        $container.masonry({
 //            columnWidth: 200,
 //            itemSelector: '.mix'
 //        });
 //    });
});