function Scoop(flavour,speedinc) {
    this.x = random(80,1420); //start x
    this.speed = 7;
    this.y = -100; //start y
    this.ycenter = 660;
    this.variance = 100;// variance in the x-direction between scoop and cone

    this.size = 100; //porportion of scoop size
    this.flavour = flavour; //defines the flavour given in creating the scoop as its own property

    this.speedmultiplier = 1.5;
    this.speed = 5 + this.speedmultiplier * speedinc; //increase speed by multiplier and by speed given when scoop is mode

    //speed of balls falling

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

        if (this.flavour == 'LightGreen') { //mint choc chip :)
            fill(109, 36, 0);
            rect(this.x-60, this.y+29, 0.10*this.size, 0.10*this.size);
            rect(this.x+50, this.y+50, 0.10*this.size, 0.10*this.size);
            rect(this.x+0, this.y-21, 0.10*this.size, 0.10*this.size);
            rect(this.x+20, this.y-45, 0.12*this.size, 0.12*this.size);
            rect(this.x-55, this.y-39, 0.12*this.size, 0.12*this.size);
            rect(this.x+15, this.y+21, 0.12*this.size, 0.12*this.size);
            rect(this.x-33, this.y+35, 0.12*this.size, 0.12*this.size);
            rect(this.x+80, this.y+10, 0.12*this.size, 0.12*this.size);
            rect(this.x+33, this.y-15, 0.10*this.size, 0.10*this.size);
            rect(this.x+0, this.y-70, 0.10*this.size, 0.10*this.size);
            rect(this.x-41, this.y-55, 0.10*this.size, 0.10*this.size);
            rect(this.x+20, this.y+59, 0.10*this.size, 0.10*this.size);

            rect(this.x+30, this.y+40, 0.05*this.size, 0.05*this.size);
            rect(this.x+30, this.y+30, 0.05*this.size, 0.05*this.size);
            rect(this.x-40, this.y+0, 0.05*this.size, 0.05*this.size);
            rect(this.x+70, this.y+25, 0.05*this.size, 0.05*this.size);
            rect(this.x+15, this.y-30, 0.05*this.size, 0.05*this.size);
            rect(this.x-60, this.y+10, 0.05*this.size, 0.05*this.size);
        }
    }

    this.update = function() { //y of scoop changes in relation to the speed which it falls
        this.y += this.speed;
    }

    this.lands = function(cone,icecream) { //checks if scoop lands on cone

        this.ycenter = 760 - (50*cone.icecream.length); //changes the new scoop center

        if (Math.floor(Math.abs(this.ycenter-this.y)) < 10) { //y-axis of cone/scoop must be equal
            if(Math.abs(cone.x+(cone.xMove*(cone.icecream.length-1))-this.x) < this.variance) { //x-axis of cone/scoop must be equal with variance property
                return true;
            }
        }
    }
}
