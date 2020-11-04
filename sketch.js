var feed,addFood;
var foodObj;
var fedTime1,lastFed1;
var fedTime;


function preload(){
   dogImg=loadImage("Dog.png");
   dogImg1=loadImage("happydog.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database(); 
  createCanvas(400,500);
   foodObj = new Food1(); 
   foodStock=database.ref('Food'); 
   foodStock.on("value",readStock); 
   fedTime=database.ref('FeedTime'); 
   fedTime.on("value",function(data){ 
    lastFed=data.val(); });
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

 
  
  textSize(20); 

 

  fedTime1= new Food1(100,100)
  feed= createButton("Feed the Dog")
  feed.position(500,95)
  feed.mousePressed(feedDog)
 
  addFood= createButton("Add Food")
  addFood.position(600,95)
  addFood.mousePressed(addFoods)

  
  

}

// function to display UI
function draw() {
  background(46,139,87);
  
 
  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }*/

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Use the buttons to feed",130,10,300,20);
  fedTime1.display();
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
  
}
function feedDog(){
 dog.addImage(dogImg1)  
 foodObj.updateFoodStock(foodObj.getFoodStock()-1);
 database.ref('/').update({
  Food: foodObj.getFoodStock(),
  fedTime1:hour()
})

}
function addFoods(){
 foodS++;
 database.ref('/').update({
  Food: foodS
 
})

}
