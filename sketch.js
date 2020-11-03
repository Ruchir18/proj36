//Create variables here
var dog,happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
dogI=loadImage("dogImg.png");
happyDogI=loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage(dogI);
  dog.scale=0.2;
   foodStock = database.ref('food');
  foodStock.on('value',readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogI)}

drawSprites();
  //add styles here
  textSize(25)
  stroke(0)

text("NOTE: use up arrow to feed drago milk",50,50);
}

function readStock(data){
foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({food:x})
}

