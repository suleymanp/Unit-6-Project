$(".LA").click(function() {
    $(".title").hide();
    $(".logo").hide();
    $(".LA").hide();
    $(".SF").hide();
    $(".Kershaw").show(); 
    $("h1").hide();
    $(".sentence1").text("Welcome, you are playing for the Dodgers. Double click on Kershaw to see if he strikes out his opponent to win the game.");
    $(".sentence1").css("font-size", "40px"); 
    $(".strike-out").hide();
    $(".sentence1").show();
});
$(".Kershaw").dblclick(function() {
    $(".strike-out").fadeToggle();
    $(".Kershaw").hide();
    $(".sentence1").hide();
    $(".sentence2").text("Yes!!! Clayton Kershaw just strike out one of the Giants batter and wins NLDS. Click on Kershaw to see the victory poster!!");
    $(".sentence2").css("font-size", "40px");
    $(".sentence2").show();
});
$(".body").hover(function() {
    $(".strike-out").hide();
    $(".Kershaw").hide();
    $(".victory-for-LA").hide();
    $(".reset").hide();
    $(".Flores").hide();
    $(".walk-off-HR").hide();
    $(".victory-walk-off").hide();
    $(".victory-for-SF").hide();
    $(".reset-game2").hide();
});
$(".strike-out").click(function() {
    $(".sentence3").text("Congrats!!! The Dodgers beat the Giants and they are the NLDS Champions and moves on to the world series!!");
    $(".victory-for-LA").show();
    $(".strike-out").hide();
    $(".sentence2").hide();
    $(".sentence3").css("font-size", "40px");
    $(".reset").show();
    $(".sentence3").show();
});
$(".reset").click(function() {
    $(".title").show();
    $(".logo").show();
    $(".LA").show();
    $(".SF").show();
    $("h1").show();
    $(".sentence2").hide();
    $(".sentence3").hide();
    $(".victory-for-LA").hide();
    $(".reset").hide();
});
$(".SF").click(function() {
    $(".title").hide();
    $(".logo").hide();
    $(".LA").hide();
    $(".SF").hide(); 
    $("h1").hide();
    $(".Flores").show();
    $(".sentence4").text("Welcome, you are playing for the Giants. Double click on Flores to see if he hits the ball to make a walkoff homerun.");
    $(".sentence4").css("font-size", "40px");
    $(".sentence4").show();

});
$(".Flores").dblclick(function() {
    $(".walk-off-HR").show();
    $(".sentence4").hide();
    $(".Flores").hide();
    $(".sentence5").text("WOW!! Wilmer Flores got a walk of home run and won the game and wins the NLDS. Click on Flores to get the victory walk off.");
    $(".sentence5").css("font-size", "40px");
    $(".sentence5").show();
});
$(".walk-off-HR").click(function() {
    $(".victory-walk-off").show();
    $(".sentence5").hide();
    $(".walk-off-HR").hide();
    $(".sentence6").text("Wilmer Flores celebrates with his teamates. Double click on Flores to see the victory NLDS poster!!");
    $(".sentence6").css("font-size", "40px");
    $(".sentence6").show();
});
$(".victory-walk-off").dblclick(function() {
    $(".victory-for-SF").show();
    $(".sentence6").hide();
    $(".victory-walk-off").hide();
    $(".sentence7").text("Congrats!!! The Giants beat the Dodgers and they are the NLDS Champions and moves on to the world series!!");
    $(".sentence7").css("font-size", "40px");
    $(".reset-game2").show();
    $(".sentence7").show();

});
$(".reset-game2").click(function() {
    $(".title").show();
     $(".logo").show();
    $(".LA").show();
    $(".SF").show();
    $("h1").show();
    $(".sentence2").hide();
    $(".sentence3").hide();
    $(".sentence7").hide();
    $(".victory-for-SF").hide();
    $(".reset-game2").hide();
});