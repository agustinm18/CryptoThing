var timeElapsed = 0;
var myTimer;

function preload(){
  
}

function setup(){
    createCanvas(600,600);
	backgroundColor("yellow")
}

function draw(){
    text("PENIS",300,300);
}

function tick(){
    timeElapsed= timeElapsed+ 0.00001;
    document.getElementById("time").innerHTML = timeElapsed;
}

function start(){
    //call the first setInterval
    myTimer = setInterval(tick, 1000);
}

