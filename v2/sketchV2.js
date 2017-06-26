var cone;
var scoop = [];


function setup() {
    createCanvas(900,1000);
    cone = new Cone();
    scoop.push(new Scoop());
    icecream = cone.icecream;
}

function draw() {
    background(61, 210, 247);


    if (frameCount % 200 ==0 && frameCount >= 200) { /*every 60 frames a new scoop appears */
        scoop.push(new Scoop());
    }

    for (var i = scoop.length-1; i > 0; i--) {
        scoop[i].show(i);
        scoop[i].update();

        if (scoop[i].y==1000) {
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit();
            }
        }

        if (scoop[i].lands(cone,icecream)) {
            console.log(scoop[i].lands(cone));
            element = scoop[i];
            scoop.splice(i);
            icecream.push('a');
        }

    }

    if (keyIsDown(LEFT_ARROW)) { //left and right arrows
        cone.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        cone.right();
    }



    cone.show();

}
