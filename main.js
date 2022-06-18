function setup(){
    canvas=createCanvas(900, 600);
}

x=0;
y=0;
draw_circle="";
draw_rect="";

var speechrecognition= window.webkitSpeechRecognition;
var recognition = new speechrecognition();

function start(){
    document.getElementById("status").innerHTML="System is Listening, Please Speak.";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="System Listened = "+content+" !";
    if(content=="circle"){
        x= Math.floor(Math.random()*900);
        y= Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="System is in proccess of cirlce drawing";
        draw_circle="set";
    }
    if(content=="rectangle"){
        x= Math.floor(Math.random()*900);
        y= Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="System is in proccess of rectangle drawing";
        draw_rect="set";
    }
}

function draw(){
    if(draw_circle=="set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Congratulations and Celebrations!.... The Circle has been made for You!!!!!!!!!!!!!!!";
        draw_circle="";
    }

    if(draw_rect=="set"){
        rect(x, y, 100, 50);
        document.getElementById("status").innerHTML="Congratulations and Celebrations!.... The Rectangle has been drawn for You!!!!!!!!!!!!!!!";
        draw_rect="";
    }
}