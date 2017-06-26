var conescoops = [];

function Addscoop(cone,scoop) {
    this.x = cone.x;
    this.y = cone.xcenter;

    scoop.x = this.x;
    scoop.y = cone.ycenter;
}
