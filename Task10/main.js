
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if(userInput=='scissor' || userInput=='paper' || userInput=="rock"){
        return userInput;

    }
    else if(userInput=='bomb'){
            return userInput;
    }
    else{
        console.log("Error in user input");
        return 0;  
    }
}

// console.log("user input is: "+userInput);
function getComputerChoice(){
    let temp=Math.floor(Math.random()*3) ;
    console.log(temp);
    if(temp==0){
        return "scissor";
    }
    else if(temp==1){
        return "paper";
    }
    else if(temp==2){
        return "rock";
    }
}

// console.log("computer input is "+computerInput);

function determineWinner(userInput,computerInput){
    if(userInput==computerInput){
        return "game was a tie";
    }
    else{
        if(userInput=='rock') {
                if(computerInput=='paper'){
                    return "computer won!!!";
                }
                else{
                    return "user won!!!";
                }
        }
        else if(userInput=='paper'){
            if(computerInput=="scissor"){
                return "computer won!!!";
            }
            else{
                return "user won!!!";
            }

        }
        else{
            if(computerInput=="rock"){
                return "computer won!!!";
            }
            else{
                return "user won!!!";
            }

        }
}
}

function playGame(){
    let userChoice=getUserChoice("rock");
   
     if(userChoice=="bomb"){
        let computerChoice=getComputerChoice();
        console.log("user choice is: "+userChoice);
        console.log("computer choice is: "+computerChoice);
        console.log("user Won !!!");
    }
    else if(userChoice!=0)
    {    
        let computerChoice=getComputerChoice();
        console.log("user choice is: "+userChoice);
        console.log("computer choice is: "+computerChoice);
        console.log(determineWinner(userChoice,computerChoice));
    }

}

playGame();



