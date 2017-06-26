var cone;//made it global to use in other functions if needed
var score;
var lives = [];
var icecream;//global
var scoop = []; //list of scoop objects (don't really need a list anymore do you?)

var newSpeed = 200; //speed at which scoops are produced
var fallSpeed = 0; //increase speed of scoop falling factor
var flavours = ['PaleVioletRed','SaddleBrown','Wheat','Orange','GreenYellow','DarkRed','Lavender','LightGreen' ] //flavour list
var newflavour = '';//global
var numlives = 3; // determines the numbers of lives to start with

function setup() {
    createCanvas(1500,1100);
    cone = new Cone();

    for (var h = 0; h <= numlives-1; h++) { //add numlives number of lives at beggining
        lives.push(new Life(h));
    }
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

    if(eval(sessionStorage.scores)>0) {
        score.maxscore = sessionStorage.scores;
    }
}

function draw() {
    background(61, 210, 247);
    for (var ii = 0; ii < numlives; ii++) {
        lives[ii].show();
    }
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
            sessionStorage.scores = score.maxscore;//stores max score at localstorage.scores so it can be shown on next play
            if (lives.length > 1) {
                numlives -= 1;
                lives.pop();
            } else {
                var again = confirm("GAME OVER \n" + "Do You Want To Play Again?")
                if (again == true) {
                    location.reload();
                } else {
                    exit();
                }
            }
        }
        document.getElementById('sds');
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
