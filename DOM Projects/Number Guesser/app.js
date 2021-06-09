// Game Values
let min=1,
    max=10,
    winningNum=getWinningNum(min,max),
    guessesLeft=3;

// UI Elements
const UIgame=document.querySelector('#game'),
      UIminNum=document.querySelector('.min-num'),
      UImaxNum=document.querySelector('.max-num'),
      UIguessBtn=document.querySelector('#guess-btn'),
      UIguessInput=document.querySelector('#guess-input'),
      UImessage=document.querySelector('.message');



// Assign UI min and max
UIminNum.innerText=min;
UImaxNum.innerText=max;

// play again event listener
game.addEventListener('mousedown',function(e){
    if(e.target.classList.contains('play-again')){
        window.location.reload();
    }
});



// Listen for guess
UIguessBtn.addEventListener('click',function(){
    let guess =parseInt(UIguessInput.value);
    
    // Validate
    if(isNaN(guess) || guess<min || guess>max){
        setMessage(`Please enter a number between ${min} and ${max}`,'red');

        UIguessInput.style.borderColor='red';
        // clear input
        UIguessInput.value='';
    }else{
        // check if won
        if(guess===winningNum){
            // Game Over -Won
            gameOver(true,`${guess} is correct, YOU WIN!`);
    
        }else{
            // worng number
            guessesLeft-=1;

            // check for guesses left
            if(guessesLeft===0){
                // Game Over -Lost
                gameOver(false,`Game Over, you lost. The correct number was ${winningNum}`);
                

            }else{
                // Game Continues -answer wrong
                // clear input
                UIguessInput.value='';

                // Notify user , show guesses left
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

                // change border color
                UIguessInput.style.borderColor='red';

            }
        }
    }

    

});

// Game Over
function gameOver(won,msg){
    // won or not
    let color;
    (won===true)? color='green': color='red';
    // disable the input
    UIguessInput.disabled=true;

    // change border color
    UIguessInput.style.borderColor=color;

    // Set message
    setMessage(msg,color);

    // play again
    UIguessBtn.value='Play Again';  
    UIguessBtn.classList.add('play-again');
    // UIguessBtn.className+='play-again';

}

// getWinningNum func
function getWinningNum(min,max){
    return Math.floor(Math.random()*max+min);
}

// Set message func

function setMessage(msg,color){
    UImessage.style.color=color;
    UImessage.innerText=msg;
}


