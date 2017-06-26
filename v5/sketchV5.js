var cone;//made it global to use in other functions if needed
var score;
var icecream;//global
var scoop = []; //list of scoop objects (don't really need a list anymore do you?)

var newSpeed = 200; //speed at which scoops are produced
var fallSpeed = 0; //increase speed of scoop falling factor
var flavours = ['PaleVioletRed','SaddleBrown','Wheat','Orange','GreenYellow','DarkRed','Lavender','LightGreen' ] //flavour list
var newflavour = '';//global

function setup() {
    createCanvas(1500,1000);
    cone = new Cone();
    score = new Score(cone);
    scoop.push(new Scoop());
    icecream = cone.icecream; //sets cone property to variable (not needed?)

    button = createButton('Pause: P',20); //Pause button
    button.position(0, 0);
    button.mousePressed(pause);
    function pause() {
        confirm('Paused. \n Do you want to Resume?');
    }

    button2 = createButton('Reset'); //Reset button
    button2.position(0, 22);
    button2.mousePressed(reset);
    function reset() {
        location.reload();
    }
}

function draw() {
    background(61, 210, 247);
    cone.show(); //placed at boottom so the cone is rendered after scoops (is on top)
    cone.update();
    if (frameCount % 1000 == 0) { //increase drop speed of scoop every 1000/200 = 5 scoops
        fallSpeed += 1;
    }

    if (frameCount % newSpeed ==0 && frameCount >= newSpeed) {//new scoop depending on var newSpeed
        newflavour = flavours[Math.floor(random(0,this.flavours.length))];//picks random flavour from list
        scoop.push(new Scoop(newflavour,fallSpeed)); //create new scoop object with flavour
    }

    for (var i = scoop.length-1; i > 0; i--) {//again..maybe not needed to have list..
        scoop[i].show(i);
        scoop[i].update();

        if (Math.abs(scoop[i].y-1000) < 5) { //if it reaches the end of screen
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit();
            }
        }

        if (scoop[i].lands(cone,icecream)) { //checks if scoop landed on cone
            score.update();
            scoop.splice(0,1); //deletes scoop
            icecream.push(newflavour); //adds the flavour to the icecream list
        }
    }

    if (keyIsDown(LEFT_ARROW)) { //left and right arrows
        cone.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        cone.right();
    }

    score.show();
}

function keyReleased() {
    //console.log(cone.xMove)
    cone.changexMove();
}
