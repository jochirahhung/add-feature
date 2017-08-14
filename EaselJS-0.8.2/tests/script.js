function init(){
    var stage = new createjs.Stage("demoCanvas");
    var circle = new createjs.Shape();
    var tri = new createjs.Shape();
    var hex = new createjs.Shape();
    var oct = new createjs.Shape();
    // circle.graphics.beginFill("Crimson").drawCircle(0,50,50);
    tri.graphics.beginFill("#0000ff").drawTriangle(50,100,50);
    hex.graphics.beginImageFill(hex, "http://www.gamegrumps.org/front/img/head_barry.png");
    hex.graphics.drawHexagon(300,300,300);
    stage.update();
    oct.graphics.beginImageFill(oct, "https://www.textures.com/system/categories/256/frontend-large.jpg");
    oct.graphics.drawOctagon(400,500,150);
    stage.update();
    circle.x = 100;
    circle.y = 100;
    stage.addChild(circle);
    stage.addChild(tri);
    stage.addChild(hex);
    stage.addChild(oct);
    createjs.Tween.get(hex, {loop: true})
        .to({x: 400}, 2000, createjs.Ease.elasticOut)
        .to({alpha: 0, y: 200}, 1000, createjs.Ease.bounceOut)
        .to({alpha: 0, x: 100, y: 150}, 1000, createjs.Ease.quadOut)
        .to({alpha: 1, y: 100}, 1000, createjs.Ease.bounceOut)
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", stage);
}