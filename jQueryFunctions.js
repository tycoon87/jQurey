$('.button1').click(function() {
    $('h1').css('color', 'red');
});
$('.button2').click(function() {
    $('#ninja').slideToggle("slow", function() {
        //animation compleate.
    })
})
$('.button3').click(function() {
    $('a').append('Boo! ')
}) 