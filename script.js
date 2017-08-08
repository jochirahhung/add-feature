function init(){
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    circle.graphics.beginFill("Crimson").drawPolyStar(0, 0, 50, 6, 0);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}