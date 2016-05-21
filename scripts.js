//Lightbox for gallery

//Overlay


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);

$("body").append($overlay);




$("#gallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    $overlay.show();

    $image.attr("src",imageLocation);
    
    
});