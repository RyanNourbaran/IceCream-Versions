var cone;//made it global to use in other functions if needed
var icecream;//global
var scoop = []; //list of scoop objects (don't really need a list anymore do you?)

var newSpeed = 200; //speed at which scoops are produced
var flavours = ['PaleVioletRed','SaddleBrown','Wheat','Orange','GreenYellow'] //flavour list
var newflavour = '';//global

function setup() {
    createCanvas(900,1000);
    cone = new Cone();
    scoop.push(new Scoop());
    icecream = cone.icecream; //sets cone property to variable (not needed?)
}

function draw() {
    background(61, 210, 247);

    if (frameCount % newSpeed ==0 && frameCount >= newSpeed) {//new scoop depending on var newSpeed
        newflavour = flavours[Math.floor(random(0,this.flavours.length))];//picks random flavour from list
        scoop.push(new Scoop(newflavour)); //create new scoop object with flavour
    }

    for (var i = scoop.length-1; i > 0; i--) {//again..maybe not needed to have list..
        scoop[i].show(i);
        scoop[i].update();

        if (scoop[i].y==1000) { //if it reaches the end of screen
            var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
            if (again == true) {
                location.reload();
            } else {
                exit();
            }
        }

        if (scoop[i].lands(cone,icecream)) { //checks if scoop landed on cone
            scoop.splice(i); //deletes scoop
            icecream.push(newflavour); //adds the flavour to the icecream list
        }
    }

    if (keyIsDown(LEFT_ARROW)) { //left and right arrows
        cone.left();
    }
    if (keyIsDown(RIGHT_ARROW)) {
        cone.right();
    }
    
    cone.show(); //placed at boottom so the cone is rendered after scoops (is on top)
}
