 function setup() {
     canvas = createCanvas(400,400);
     canvas.position(800,125);
     video = createCapture(VIDEO);
     video.size(400,400);
     video.position(200,125);
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on("pose",gotPoses)
     }

     function draw() {
        background("#4a875b");  
     }

     function modelLoaded() {
         console.log("Model is Loaded");
     }

     function gotPoses(results) {
         if (results.length>0) {
             console.log(results);
         }
     }