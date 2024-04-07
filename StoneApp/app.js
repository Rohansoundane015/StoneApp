let userScore = 0;
let compScore =0;
const msg = document.querySelector("#msg");
let uScore = document.querySelector("#user-score");
let cScore = document.querySelector("#comp-score");
// console.log(msg);

const choices = document.querySelectorAll(".choice");
const genCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // rock, paper ,scrissors
}
const drawGame = () =>{
    console.log("Game Was draw")
    msg.innerText = "Game was Draw,Play again";
    msg.style.backgroundColor = "#081b31";

}
const showWinner = (userWin) =>{
    if(userWin===false){
        compScore++;
        console.log("You lose!");
        msg.innerHTML = "You Lose";
        msg.style.backgroundColor = "red";
        cScore.innerText = compScore;
    }
    else{
        userScore++;
        console.log("You win:");
        msg.innerHTML = "You win";
        msg.style.backgroundColor = "green";
        uScore.innerText = userScore;
        

    }
}
const playGame = (userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice );
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scirrors,paper
            userWin=compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin=compChoice === "scissors" ? false :true;

        }else{
            // rock paper 
            userWin=compChoice === "rock" ? false : true;
        }
        showWinner(userWin)
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})