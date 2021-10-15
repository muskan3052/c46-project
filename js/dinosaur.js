class Dinosaur{
    constructor(x,y){
        var options = {
            isStatic: true
        }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 200;
      this.height = 100;
      this.image = loadImage("images/dinosaur.png")
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        image(this.image, pos.x, pos.y, this.width, this.height);

}
}
