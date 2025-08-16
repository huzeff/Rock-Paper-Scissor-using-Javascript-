let userName = prompt("enter your name");

let userScore = 0;
let compSocre = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

msg.innerText = "Welcome to game " + userName + ", select your choice" ;


const userscorePara = document.querySelector("#user-score");
const copmscorePara = document.querySelector("#comp-score");


// computer genarate choice 

const gencompChoice = () => {
    const optation = ["rock","paper","scissor"];
    const randIndx = Math.floor(Math.random() * 3);
    return optation[randIndx];

};


const drawGame = () => {
    msg.innerText = "game was draw 🤝 try agin...";
    msg.style.backgroundColor = "#081b31";
}

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userscorePara.innerText = userScore;

        msg.innerText = `${userName} you win🏆!, your ${userChoice} beat ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compSocre++;
        copmscorePara.innerText = compSocre;
        msg.innerText = `${userName} you lost🥲, ${compChoice} beat your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log(`user choice = ${userChoice}`);
    const compChoice = gencompChoice();
    console.log(`computer choice = ${compChoice}`);

    if(userChoice === compChoice){
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
          showWin(userWin, userChoice, compChoice) ;
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});



