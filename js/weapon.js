class Weapon extends BaseClass {
    constructor(x,y) {
      super(x,y,50,50);
      this.image=loadImage("images/Weapon_1.png");
      World.add(world, this.body);
    } 
  
    display(){

      super.display();

      /*push();
      var pos =this.body.position;
      image(this.image,pos.x,pos.y,100,100);
      imageMode(CENTER);
      pop();*/
    }
  }