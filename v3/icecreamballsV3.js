function Scoop(flavour) {
    this.x = random(80,820); //start x
    this.speed = 7;
    this.y = -100; //start y
    this.ycenter = 660;
    this.variance = 20;// variance in the x-direction between scoop and cone

    this.size = 100; //porportion of scoop size
    this.flavour = flavour; //defines the flavour given in creating the scoop as its own property

    this.speed = 5;  //speed of balls falling

    this.show = function() { //create scoop
        strokeWeight(0);
        fill(this.flavour);
        ellipse(this.x, this.y, 1.6*this.size, 1.6*this.size); //main scoop

        //Decorations on scoop
        ellipse(this.x+60, this.y+25, 0.8*this.size, 0.8*this.size);
        ellipse(this.x-60, this.y+25, 0.8*this.size, 0.8*this.size);
        ellipse(this.x+35, this.y+50, 0.7*this.size, 0.7*this.size);
        ellipse(this.x-35, this.y+50, 0.7*this.size, 0.7*this.size);
        ellipse(this.x, this.y+50, 0.6*this.size, 0.8*this.size);

    }

    this.update = function() { //y of scoop changes in relation to the speed which it falls
        this.y += this.speed;

    }

    this.lands = function(cone,icecream) { //checks if scoop lands on cone

        this.ycenter = 660 - (50*cone.icecream.length); //changes the new scoop center

        if (Math.abs(this.ycenter-this.y) == 0) { //y-axis of cone/scoop must be equal
            if(Math.abs(cone.x-this.x) < this.variance) { //x-axis of cone/scoop must be equal with variance property
                return true;
            }
        }
    }
}
