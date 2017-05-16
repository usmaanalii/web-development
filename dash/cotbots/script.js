$(document).ready(function() {
    // toggles the laser class on the brain class when the element with the flash class is clicked
    $('.flash').click(function() {
        $('.brain').toggleClass('laser');
    });

    // When color button is clicked, pick a number between 0-255
    $('.color').click(function() {
        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);

        var randomRGBA = 'rgba(' + red + ',' + green + ',' + blue + ',1)';

        $('body').css('background', randomRGBA);
        // Display the number in an alert window
        // alert(randomRGBA);
    });
});
