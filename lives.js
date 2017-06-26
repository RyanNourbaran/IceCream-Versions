function Life(xpos) {
    console.log(xpos);
    this.x = 1450 - (xpos*70);
    this.size = 50;
    this.y = 50;

    this.show = function() {
        strokeWeight(0);
        fill(255);
        ellipse(this.x, this.y, this.size, this.size); //main scoop

        //Decorations on scoop
        /*ellipse(this.x+60, this.y+25, 0.8*this.size, 0.8*this.size);
        ellipse(this.x-60, this.y+25, 0.8*this.size, 0.8*this.size);
        ellipse(this.x+35, this.y+50, 0.7*this.size, 0.7*this.size);
        ellipse(this.x-35, this.y+50, 0.7*this.size, 0.7*this.size);
        ellipse(this.x, this.y+50, 0.6*this.size, 0.8*this.size);*/
    }
}
