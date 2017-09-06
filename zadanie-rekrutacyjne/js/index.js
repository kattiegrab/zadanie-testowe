
$(document).ready(function() {
	$('#prev').on('click', function(){
	    const $last = $('#carousel-list-1 li:last');
	    $last.remove().css({ 'margin-left': '-600px' });
	    $('#carousel-list-1 li:first').before($last);
	    $last.animate({ 'margin-left': '0px' }, 1000); 
	});
	$('#prev').on('click', function(){
	    const $last = $('#carousel-list-2 li:last');
	    $last.remove().css({ 'margin-left': '-600px' });
	    $('#carousel-list-2 li:first').before($last);
	    $last.animate({ 'margin-left': '0px' }, 1000); 
	});
	$('#prev').on('click', function(){
	    const $last = $('#carousel-list-3 li:last');
	    $last.remove().css({ 'margin-left': '-600px' });
	    $('#carousel-list-3 li:first').before($last);
	    $last.animate({ 'margin-left': '0px' }, 1000); 
	});
	$('#prev').on('click', function(){
	    const $last = $('#carousel-list-4 li:last');
	    $last.remove().css({ 'margin-left': '-600px' });
	    $('#carousel-list-4 li:first').before($last);
	    $last.animate({ 'margin-left': '0px' }, 1000); 
	});


	$('#next').on('click', function(){
	    var $first = $('#carousel-list-1 li:first');
	    $first.animate({ 'margin-left': '-600px' }, 1000, function() {
	        $first.remove().css({ 'margin-left': '0px' });
	        $('#carousel-list-1 li:last').after($first);
	    });
	});
	$('#next').on('click', function(){
	    var $first = $('#carousel-list-2 li:first');
	    $first.animate({ 'margin-left': '-600px' }, 1000, function() {
	        $first.remove().css({ 'margin-left': '0px' });
	        $('#carousel-list-2 li:last').after($first);
	    });
	});
	$('#next').on('click', function(){
	    var $first = $('#carousel-list-3 li:first');
	    $first.animate({ 'margin-left': '-600px' }, 1000, function() {
	        $first.remove().css({ 'margin-left': '0px' });
	        $('#carousel-list-3 li:last').after($first);
	    });
	});
	$('#next').on('click', function(){
	    var $first = $('#carousel-list-4 li:first');
	    $first.animate({ 'margin-left': '-600px' }, 1000, function() {
	        $first.remove().css({ 'margin-left': '0px' });
	        $('#carousel-list-4 li:last').after($first);
	    });
	});
});
