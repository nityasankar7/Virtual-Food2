//Create variables here
var dog,dog1, happyDog, database, foodS, foodStock;
var database;
var feed,addFood,foodObj,fedTime, lastFed;
function preload()
{
  //load images here
   
  dog = loadImage("Dog.png");
  happyDog=loadImage("happyDog.png")
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database()
  dog1 = createSprite(300,300);
  dog1.addImage("dog",dog);
  dog1.scale=0.2;
  foodObj= new Food(100,100,20,20);

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)

  feed=createButton("Feed The Food")
  feed.position(300,95)
  food.mousePressed(feedDog);

  
  addFood=createButton("Feed The Food")
  addFood.position(400,95)
  addFood.mousePressed(addFoods);
  
 
}


function draw() {  
  background("lightblue")
  /*if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog1.addImage(happyDog)
    
  }*/

  drawSprites();
  //add styles here
  fill ("black")
  textSize(20);
  text("FoodStock",200,200)
}
function readStock (data){
foodS=data.val();
}
function writeStock (x){
if(x<=0){
  x=0;
}else{

  x=x-1;
}
  database.ref('/').update({
  Food:x


  })
  fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
  lastFed=data.val;
  })
  fill("black")
  textSize(15)
  if(lastFed>=12){
    text("last Feed:"+lastFed%12+"PM",350,30)
  } else if(lastFed==0){
    text("last Feed: 12 am",350,30)
} else{
  text("last Feed:"+lastFed+"AM",350,30)

}
foodObj.display();
  
  }
  function feedDog(){
    dog1.addImage(happyDog)
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
    database.ref('/').update({
      Food:foodObj.getFoodStock(),
      feedTime: hour ()

    })

  }