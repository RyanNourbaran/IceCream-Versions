var score;
function Cone() {
    score = new Score();
    this.x = width/2;
    this.xMove = 0;
    this.y = 1000;
    this.icecream = [] //keeps track of new scoops that landed on cone
    this.size = this.x/4.5; //porportion of scoop size

    this.ycenter = []; //creates empty list of ycenters
    var startycenter = 660;
    while (startycenter > 0) { //creates a list of ycenters starting at the variable above
        this.ycenter.push(startycenter);
        startycenter -= 50;
    }
    this.ycenter.push(this.ycenter[this.ycenter.length-1]);

    this.speed = 10; //distance x moves

    this.show = function() { //adds a new scoop to the cone every time one lands
        if (icecream)  //just so i can minimize
        stroke(188, 138, 26);//produces the cone FIRST
        strokeWeight(4);
        fill(142, 88, 17);
        triangle(this.x-80,this.y-300, this.x,this.y, this.x+80,this.y-300);
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


        if(this.icecream.length >6) { //important GAMEPLAY MECHANICS!!!!!!
            this.icecream.splice(0,1) //at position 0, remove 1 item (first scoop)
        }

        if (this.icecream.length > 0) {
            for (var z = 0; z < this.icecream.length; z++) {
                strokeWeight(0);
                fill(icecream[z]);
                ellipse(this.x+this.xMove*z, this.ycenter[z], 1.6*this.size, 1.6*this.size); // main scoop
                //Decorations on Scoop
                ellipse(this.x+60+this.xMove*z, this.ycenter[z]+25, 0.8*this.size, 0.8*this.size);
                ellipse(this.x-60+this.xMove*z, this.ycenter[z]+25, 0.8*this.size, 0.8*this.size);
                ellipse(this.x+35+this.xMove*z, this.ycenter[z]+50, 0.7*this.size, 0.7*this.size);
                ellipse(this.x-35+this.xMove*z, this.ycenter[z]+50, 0.7*this.size, 0.7*this.size);
                ellipse(this.x+this.xMove*z, this.ycenter[z]+50, 0.6*this.size, 0.8*this.size);


                if (icecream[z] == 'LightGreen') { //mint choc chip :)
                    fill(109, 36, 0);
                    rect(this.x-60+this.xMove*z, this.ycenter[z]+29, 0.10*this.size, 0.10*this.size);
                    rect(this.x+50+this.xMove*z, this.ycenter[z]+50, 0.10*this.size, 0.10*this.size);
                    rect(this.x+0+this.xMove*z, this.ycenter[z]-21, 0.10*this.size, 0.10*this.size);
                    rect(this.x+20+this.xMove*z, this.ycenter[z]-45, 0.12*this.size, 0.12*this.size);
                    rect(this.x-55+this.xMove*z, this.ycenter[z]-39, 0.12*this.size, 0.12*this.size);
                    rect(this.x+15+this.xMove*z, this.ycenter[z]+21, 0.12*this.size, 0.12*this.size);
                    rect(this.x-33+this.xMove*z, this.ycenter[z]+35, 0.12*this.size, 0.12*this.size);
                    rect(this.x+80+this.xMove*z, this.ycenter[z]+10, 0.12*this.size, 0.12*this.size);
                    rect(this.x+33+this.xMove*z, this.ycenter[z]-15, 0.10*this.size, 0.10*this.size);
                    rect(this.x+0+this.xMove*z, this.ycenter[z]-70, 0.10*this.size, 0.10*this.size);
                    rect(this.x-41+this.xMove*z, this.ycenter[z]-55, 0.10*this.size, 0.10*this.size);
                    rect(this.x+20+this.xMove*z, this.ycenter[z]+59, 0.10*this.size, 0.10*this.size);

                    rect(this.x+30+this.xMove*z, this.ycenter[z]+40, 0.05*this.size, 0.05*this.size);
                    rect(this.x+30+this.xMove*z, this.ycenter[z]+30, 0.05*this.size, 0.05*this.size);
                    rect(this.x-40+this.xMove*z, this.ycenter[z]+0, 0.05*this.size, 0.05*this.size);
                    rect(this.x+70+this.xMove*z, this.ycenter[z]+25, 0.05*this.size, 0.05*this.size);
                    rect(this.x+15+this.xMove*z, this.ycenter[z]-30, 0.05*this.size, 0.05*this.size);
                    rect(this.x-60+this.xMove*z, this.ycenter[z]+10, 0.05*this.size, 0.05*this.size);
                }
            }
        }
    }

    this.update = function(scoop1) { //not used...
    }

    this.right = function() { //move object right
        this.x += this.speed;
        this.xMove += 0.05*this.speed;
        if (this.x >= 820) {
            this.x = 820;
        }
    }

    this.left = function() { //move object left
        this.x -= this.speed;
        this.xMove -= 0.05*this.speed;
        if (this.x <= 80) {
            this.x = 80;
        }
    }
}
