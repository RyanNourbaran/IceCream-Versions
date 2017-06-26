var cone;
var scoop = [];
var icecream = [];

function setup() {
    createCanvas(900,1000);
    cone = new Cone();
    scoop.push(new Scoop());
}

function draw() {
    background(61, 210, 247);

    if (frameCount % 200 ==0 && frameCount >= 200) { /*every 60 frames a new scoop appears */
        scoop.push(new Scoop());
    }

    for (var i = scoop.length-1; i >= 0; i--) {

        if (scoop[i].y==1000) {
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit();
            }
        }

        if (scoop[i].lands(cone)) {
            cone.update(scoop[i]);
        }
            scoop[i].show();
            scoop[i].update();
    }




    if (keyIsDown(LEFT_ARROW)) { //left and right arrows
        cone.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        cone.right();
    }



    cone.show();

}
