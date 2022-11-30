const board = document.querySelector("#gameBoard");
const ctx = board.getContext("2d");

// dimensions of board and elements
const boardHeight = board.height;
const boardWidth = board.width;
const ballRadius = 12.5;


// styling of canvas elements
const paddle1Color = "white";
const paddle2Color = "white";
const ballColor = "white";



const paddleSpeed = 75;

let intervalID;

let ballSpeed  = 1;
let ballY = boardHeight / 2;
let ballX = boardWidth / 2;





let paddle1 = {
    width: 30,
    height: 150,
    x: 3,
    y: 0
}

let paddle2 = {
    width: 30,
    height: 150,
    x: boardWidth - 33,
    y: boardHeight - 150
};

function nextClockTick(){
    clearBoard();
    drawPaddles();
    moveBall();
    drawBall(ballX, ballY);
}

function controlPanel(event){
    let keypress = event.keyCode;
    console.log(keypress)
    let paddleUp = 87;
    let paddleDown = 83;

    if(keypress == paddleDown){
        paddle1.y += paddleSpeed;
    }
    else if(keypress == paddleUp){
        paddle1.y -= paddleSpeed;
    }
}
function clearBoard(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
    ctx.strokeRect(0, 0, boardWidth, boardHeight)
}



function drawCenterLine(){
    ctx.fillStyle = "white";
    let yCoordinate = boardHeight - 10;

    while(yCoordinate >= -10){
        ctx.fillStyle = "white"
        ctx.fillRect(boardWidth / 2, yCoordinate, 15, 30);
        ctx.strokeRect(boardWidth / 2, yCoordinate, 15, 30);
        yCoordinate -= 50;
    }
}

function drawPaddles(){
    ctx.fillStyle ="white"
    ctx.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    ctx.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);


    console.log(boardHeight);
    ctx.fillStyle = paddle1Color;
    ctx.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    ctx.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
}

window.addEventListener("keydown", controlPanel)
drawPaddles();
drawCenterLine();










