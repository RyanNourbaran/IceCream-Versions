

function Cone() {
    this.x = width/2;
    this.icecream = []

    this.ycenter = [];
    var startycenter = 700
    while (startycenter > 0) {
        this.ycenter.push(startycenter);
        startycenter -= 50;
    }

    this.speed = 7; //distance x moves

    this.show = function() {
        if (this.icecream.length > 0) {
            for (var z = this.icecream.length-1; z >= 0; z--) {
                fill('SaddleBrown');
                ellipse(this.x, this.ycenter[z], 155, 155);

            }
        }
        fill(228, 188, 125);
        triangle(this.x-80,700, this.x,1000, this.x+80,700); //cone produced

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
