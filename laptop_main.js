img="";
Status="";
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="CoCoSSD is detecting the object(s)";
}
function preload(){
    img=loadImage("laptop.jpg");
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
function draw(){
image(img, 0, 0, 600, 500);
fill("red");
stroke("red");
noFill();
rect(145, 120, 315, 300);
text("LAPTOP", 155, 150);
textSize(20);
}