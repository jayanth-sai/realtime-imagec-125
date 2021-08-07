leftwristx=0
rightwristx=0
difference=0

function setup(){
    canvas = createCanvas(500,500)
    canvas.position(700,100)
    video = createCapture(VIDEO)
    video.size(650,600)
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on ("pose", got_poses)
}

function modelLoaded(){
    console.log("model is loaded ")
}

function got_poses(results){
    if (results.length>0){
    console.log(results)
    leftwristx=results[0].pose.leftWrist.x
    rightwristx=results[0].pose.rightWrist.x
difference=floor(leftwristx-rightwristx)
}

}

function draw(){
background("#C0C0C0")
fill(255,255,255)
text("Peter",60,400)
textSize(difference)
}