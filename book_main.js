img="";
Status="";
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
    img=loadImage("book.png");
}
function draw(){
image(img, 0, 0, 600, 500);
fill("red");
stroke("red");
noFill();
rect(145, 120, 400, 300);
text("BOOK", 155, 150);
textSize(20);
}