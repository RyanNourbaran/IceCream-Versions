

function Cone() {
    this.x = width/2;
    this.icecream = []

    this.ycenter = 700;

    this.speed = 7; //distance x moves

    this.show = function() {
        if (icecream.length > 0) {
            for (var z = 0; z < icecream.length; z++) {
                fill('SaddleBrown');
                ellipse(this.x, this.ycenter - (z*40), 150, 150);
            }
        }
        fill(228, 188, 125);
        triangle(this.x-80,700,this.x,1000,this.x+80,700); //cone produced

    }

    this.update = function(scoop1) {
        scoop1.x = this.x;
        numscoops += 1;
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
