var hb;
//hb=hypnoticball
var database, pos;
//pos=position

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hb = createSprite(250,250,10,10);
    hb.shapeColor = "red";

    //hbp=hypnoticBallPosition
    var hbp=database.ref('ball/position');
    hbp.on("value",readPosition, showError);
}

function draw(){
    background("white");
    if(pos!==undefined){

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
}

    drawSprites();
}

function readPosition(data){
    pos=data.val();
    console.log(pos.x);
    hb.x=pos.x;
    hb.y=pos.y;
}

function showError(){
console.log("Error finding values in database");
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x':pos.x+x,
        'y':pos.y+y
    });
}
