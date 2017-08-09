function init(){
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    var tri = new createjs.Shape();
    var hex = new createjs.Shape();
    var oct = new createjs.Shape();
    // circle.graphics.beginFill("Crimson").drawCircle(0,50,50);
    tri.graphics.beginFill("#0000ff").drawTriangle(50,100,50);
    hex.graphics.beginFill("#ff0000").drawHexagon(150,100,50);
    oct.graphics.beginFill("#00ff00").drawOctagon(250,100,50);
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.addChild(tri);
    stage.addChild(hex);
    stage.addChild(oct);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}