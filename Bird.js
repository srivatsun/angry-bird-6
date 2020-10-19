class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.ar1 = []
  
  }



  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  

if(this.body.velocity.x>10 && this.body.position.x>200){

  
    var array_position = [this.body.position.x,this.body.position.y]
  this.ar1.push(array_position)
}
  for(var i=0;i<this.ar1.length;i++){
    image(this.smoke,this.ar1[i][0],this.ar1[i][1])
  }
  }
}
