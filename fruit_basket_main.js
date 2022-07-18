img="";
Status=""
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="CoCoSSD is detecting the object(s)";
}
function modelLoaded(){
    console.log("The model is loaded!");
    Status=true;
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results);
    }
}
function preload(){
    img=loadImage("fruit_basket.jpg");
}
function draw(){
    image(img, 0, 0, 600, 500);
    fill("red");
    stroke("red");
    noFill();
    rect(65, 100, 480, 370);
    text("FRUIT BASKET", 70, 120);
    textSize(20);
    }