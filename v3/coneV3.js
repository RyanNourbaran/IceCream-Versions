function Cone() {
    this.x = width/2;
    this.icecream = [] //keeps track of new scoops that landed on cone

    this.size = this.x/4.5; //porportion of scoop size

    this.ycenter = []; //creates empty list of ycenters
    var startycenter = 660;
    while (startycenter > 0) { //creates a list of ycenters starting at the variable above
        this.ycenter.push(startycenter);
        startycenter -= 50;
    }

    this.speed = 7; //distance x moves

    this.show = function() { //adds a new scoop to the cone every time one lands
        stroke(188, 138, 26);//produces the cone FIRST
        strokeWeight(4);
        fill(142, 88, 17);
        triangle(this.x-80,700, this.x,1000, this.x+80,700);
        //Cone Decorations
        line(this.x-40,700,this.x-65,742);
        line(this.x+0,700,this.x-52,791);
        line(this.x+40,700,this.x-40,837);
        line(this.x+80,700,this.x-30,890);
        line(this.x+80,700,this.x-30,890);
        line(this.x+39,840,this.x-18,935);
        line(this.x-5,975,this.x+14,945);

        line(this.x+40,700,this.x+65,745);
        line(this.x-0,700,this.x+52,791);
        line(this.x-40,700,this.x+40,836);
        line(this.x-80,700,this.x+30,890);
        line(this.x-41,840,this.x+16,935);
        line(this.x-17,940,this.x+6,975);


        if (this.icecream.length > 0) {
            for (var z = this.icecream.length-1; z >= 0; z--) { //next scoop is underneath
                strokeWeight(0)
                fill(icecream[z]);
                ellipse(this.x, this.ycenter[z], 1.6*this.size, 1.6*this.size); // main scoop
                //Decorations on Scoop
                ellipse(this.x+60, this.ycenter[z]+25, 0.8*this.size, 0.8*this.size);
                ellipse(this.x-60, this.ycenter[z]+25, 0.8*this.size, 0.8*this.size);
                ellipse(this.x+35, this.ycenter[z]+50, 0.7*this.size, 0.7*this.size);
                ellipse(this.x-35, this.ycenter[z]+50, 0.7*this.size, 0.7*this.size);
                ellipse(this.x, this.ycenter[z]+50, 0.6*this.size, 0.8*this.size);
            }
        }
    }

    this.update = function(scoop1) { //not used...
    }

    this.right = function() { //move object right
        this.x += this.speed;
        if (this.x >= 820) {
            this.x = 820;
        }
    }

    this.left = function() { //move object left
        this.x -= this.speed;
        if (this.x <= 80) {
            this.x = 80;
        }
    }
}
