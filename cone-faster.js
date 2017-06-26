function Cone() {
    this.x = width/2;

    this.speed = 0;

    this.show = function() {
        fill(228, 188, 125);
        triangle(this.x-80,700,this.x,1000,this.x+80,700); //cone produced
    }

    this.update = function() {
        this.x += this.speed; //change x position of cone with speed
    }

    this.right = function() {
        this.speed += 1;
    }

    this.left = function() {
        this.speed -= 1;
    }
}
