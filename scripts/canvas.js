var canvasElement = document.getElementById("main");
var canvas = canvasElement.getContext("2d");

var ball = new Ball(100, 300, 10, canvas);
ball.render();


var ball = new Ball(100, 200, 10, canvas);
ball.render();