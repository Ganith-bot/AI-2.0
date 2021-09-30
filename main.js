Webcam.set({
    height:270,
    width:400,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'image101' src = " + data_uri + ">";
    });
}

console.log("version of ml5 : ", ml5.version);
teachable_link = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kNAWKOgLd/model.json", modelLoaded);

function modelLoaded(){
    console.log("test");
}