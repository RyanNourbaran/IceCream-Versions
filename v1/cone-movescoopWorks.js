function Cone() {
    this.x = width/2;

    this.ycenter = 700;

    this.speed = 7; //distance x moves

    this.show = function() {
        fill(228, 188, 125);
        triangle(this.x-80,700,this.x,1000,this.x+80,700); //cone produced
    }

    this.update = function(scoop1) {
        scoop1.x = this.x;
    }

    this.right = function() {
        this.x += this.speed;
        if (this.x >= 820) {
            this.x = 820;
        }
    }

    this.left = function() {
        this.x -= this.speed;
        if (this.x <= 80) {
            this.x = 80;
        }
    }
}
