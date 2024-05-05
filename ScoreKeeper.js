var p1bttn = document.getElementById("p1");
var p2bttn = document.querySelector("#p2");
var p1display = document.querySelector("#firstZero")
var p2display = document.querySelector("#secondZero")
var input = document.getElementById("input")
var num = document.getElementById("num")
var resetbttn = document.getElementById("reset");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winngScore = 5;


p1bttn.addEventListener("click", function(){
    if (!gameOver){
        p1score++;
        p1display.textContent = p1score;
    }
    if(p1score === winngScore){
        gameOver = true;
        p1display.classList.add("winners")
    }

});

p2bttn.addEventListener("click", function(){
    if(!gameOver){
        p2score++;
        p2display.textContent =   p2score;
    }
    if(p2score === winngScore){
        p2display.classList.add("winners")
        gameOver = true;
    }
    
});

resetbttn.addEventListener("click", function(){
   reset();
})

function reset(){
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove("winners");
    p2display.classList.remove("winners");
    gameOver = false;
}

input.addEventListener("input", function(){
    var inputElment = input.value;
    num.textContent = inputElment;
    winngScore = Number(input.value);
   reset();
})

