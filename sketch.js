
var bg
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    tomImg1=loadImage("images/cat1.png");
    tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
    tomImg3=loadImage("images/cat4.png");
    jerryImg1=loadImage("images/mouse1.png");
    jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,700);
    tom.addImage("sitting",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(250,700);
    jerry.addImage("standing",jerryImg1);
    jerry.scale=0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x-jerry.x< (tom.width-jerry.width)/2)
    {
        jerry.addImage("JHappy",jerryImg3);
        jerry.changeImage("JHappy");
        
        tom.addImage("THappy",tomImg3);
        tom.changeImage("THappy");
        tom.velocityX=0;
        tom.x=400;
        jerry.y=600;
        tom.y=600;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW)
  {
      jerry.addAnimation("teasing",jerryImg2);
      jerry.changeAnimation("teasing");
      jerry.frameDelay=15;

      tom.addAnimation("walking",tomImg2);
      tom.changeAnimation("walking");
      tom.frameDelay=15;
      tom.velocityX=-5;
  }


}
