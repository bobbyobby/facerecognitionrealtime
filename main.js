function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelLoaded);

}

function draw() {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);

}

function modelLoaded() {
    console.log("model loaded");
}

function gotResult(error, reusults) {
    if (error) {
        console.error(error);
    } else {
        console.log(reusults);
        document.getElementById("result_object_name").innerHTML = reusults[0].label;
        document.getElementById("result_object_accuracy").innerHTML = reusults[0].confidence.toFixed(3);
    }

}