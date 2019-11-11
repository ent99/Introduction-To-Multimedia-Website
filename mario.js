window.onload = function(){
    var paper = new Raphael(document.getElementById("svg"),1500,700);
    var backGround = paper.rect(0,0,1500,700);
    backGround.attr({fill: "blue"});
    var ball = paper.circle(50,570,30);
    ball.attr({fill: "white"});
    var ground = paper.rect(0,600,1500,100);
    ground.attr({fill: "green"});
    var bricks1 = paper.rect(600,400,200,70);
    bricks1.attr({fill: "brown"});
    var yellowbox = paper.rect(800,400,70,70);
    yellowbox.attr({fill: "yellow"});
    var bricks2 = paper.rect(870,400,200,70);
    bricks2.attr({fill: "brown"});
    var star = paper.image("star.png", 800,330,70,70);
    var audio = new Audio("audio.mp3");
    
    audio.volume = 1;
    ball.transform("");
    function start() {
        audio.play();
        ball.transform("");
        ball.animate({cy: 570,cx: 50, fill:"white"}, 500, 'linear', ball_move1);
    }
    
    function ball_move1() {
        ball.animate({cy: 570,cx: 800}, 500, 'linear', ball_jump1);
    }
    
    function ball_jump1() {
        ball.animate({cy: 500,cx: 830}, 500, 'linear', bump_up);
    }
    
    function bump_up() {
        yellowbox.animate({y:360,x:800}, 100, bump_down);
    }
    
    function bump_down() {
        yellowbox.animate({y:400,x:800}, 100, ball_jump2);
    }
    
    function ball_jump2() {
        ball.animate({cy: 570,cx: 870}, 500, 'linear', ball_move2);
    }
    
    function ball_move2() {
        ball.animate({cy: 570,cx: 1200}, 500, 'linear', ball_scale);
    }
    
    function ball_scale() {
        ball.scale(2,2);
        ball.animate({fill:"red"}, 500, 'linear', start);
    }
    ball_move1();
    
};