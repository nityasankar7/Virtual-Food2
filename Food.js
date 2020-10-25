class Food{
constructor(){
  var foodStock,lastFed
 // this.body = Bodies.rectangle(x, y,width,height);
 // World.add(world, this.body);
  this.image = loadImage("Milk.png")
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



