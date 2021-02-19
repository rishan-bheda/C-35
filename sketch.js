var ball;
var database;
var position;

function setup(){
    
    database = firebase.database();
    console.log(database);

    createCanvas(500,500);

    ballDatabase = createSprite(250,250,10,10);
    ballDatabase.shapeColor = "red";

    var positionRef = database.ref('ball/position');
    positionRef.on("value",readPosition,showError);


    //  read/get function  ==on
    // set/update == set
}

function draw(){

    background("white");
    
    if(keyDown(LEFT_ARROW)){

        writePosition(-1,0);
        
    }

    else if(keyDown(RIGHT_ARROW)){

        writePosition(1,0);

    }

    else if(keyDown(UP_ARROW)){

        writePosition(0,-1);

    }

    else if(keyDown(DOWN_ARROW)){

        writePosition(0,+1);

    }

    drawSprites();

}

function changePosition(x,y){

    ballDatabase.x = ball.x + x;
    ballDatabase.y = ball.y + y;

}

function readPosition(data){

    position = data.val();
    console.log(position.x);

    ballDatabase.x = position.x;
    ballDatabase.y = position.y;
}

function showError(){

    console.log("error in database")

}

function writePosition(x,y){

    database.ref('ball/position').set({
        'x' : position.x+x,
        'y' : position.y+y
    })

}