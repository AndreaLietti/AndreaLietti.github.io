function creaFigura(){
mioCanvas = document.getElementById("myCanvas");
var ctx=mioCanvas.getContext("2d");
ctx.moveTo(25,150);
ctx.lineTo(325,150);
ctx.stroke();

ctx.moveTo(175,25);
ctx.lineTo(175,275);
ctx.stroke();

ctx.moveTo(305,25);
ctx.lineTo(175,275);
ctx.stroke();
}