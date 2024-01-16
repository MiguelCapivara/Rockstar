bocaX=0;
bocaY=0;

function preload()
{
    bigode = loadImage('bigode.jpg');
}
 function setup(){
    canvas= createCanvas(300,301);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 301);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 function gotPoses(results){
   if(results.length > 0)
    {
        console.log(results)
        bocaX = results[0].pose.boca.x-40;
        bocaY = results[0].pose.boca.y-40;
    }
 }
 function draw()
 {
   image(video, 0, 0, 300, 300);
   image(bigode, bocaX, bocaY, 80, 34);
 }
 function Foto(){
  save('https//virus/exe.png');
 }
 