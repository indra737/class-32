class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility= 255
   s=0
  }
  update(){
    if(this.visibility<0 && this.visibility>=-200 ){
      s++;
    }
  }
display(){
  
  if(this.body.speed<2.5){
    super.display()

  }else {

    World.remove(world,this.body);
    push();
   
   
    this.visibility--
    tint(255,this.visibility)
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop();
    
  }
}
};