
function Scoop() {
    this.x = random(80,820); //start x
    this.speed = 7;
    this.y = -100; //start y
    this.r = 75; //radius
    this.ycenter = 700;

    this.speed = 5;  //speed of balls falling

    this.flavours = ['PaleVioletRed','SaddleBrown','Wheat','Orange']
    this.show = function() {
        fill(this.flavours[1]);
        ellipse(this.x,this.y,2*this.r,2*this.r);
    }

    this.update = function() {
        this.y += this.speed;

    }


    this.lands = function(cone,icecream) {
        this.ycenter = 700 - (40*cone.icecream.length);


        if (Math.abs(this.ycenter-this.y) == 0) {
            if(Math.abs(cone.x-this.x) < 20) {

                this.speed = 1;
                return true;
            }
        }
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
