class Food1{
constructor(){
  var foodStock,lastFed;
 // this.body = Bodies.rectangle(x, y,width,height);
 // World.add(world, this.body);
  this.image = loadImage("Milk.png")
}
getFoodStock(){
  var getFoodStock= database.ref('foodStock')
    getFoodStock.on("value",function(data){
     foodStock= data.val();
  })
}

 updateFoodStock(foodStock){
  database.ref('/').update({
  foodStock: Food
  });
}

deductFood(lastFed){
  var lastFed = "Food" + foodStock;
  database.ref(lastFed).set({
      Food: Food
  })
}
display() {
  var x=80,y=100; 
    
    imageMode(CENTER);
    image(this.image, 400,220,70,70);
    if(this.foodStock!=0){
    for(i=0;i<this.foodStock;i++){
      if(i%10==0){
    x=80
    y=y+50

      }
     
      image(this.image,x,y,50,50);
      x=x+30
    }

    }

}
}



