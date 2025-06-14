    let score= JSON.parse(localStorage.getItem("score"))|| {
      wins: 0,
      losses: 0,
      ties: 0
    };

    function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.removeItem("score");
           document.querySelector(".js-score").innerHTML =  "\nWins: " + score.wins +
            "Losses: " + score.losses + 
            "Ties: " + score.ties;
  }
    
    let comMove=" ";
  function getRandomMove() {
      const randNum=Math.random();
      if (randNum<0.33) {
        comMove="Rock";
      } else if (randNum<0.66) {
        comMove="Paper";
      } else {
        comMove="Scissors";
      }
      return comMove;
  }
  function playGame(playerMove) {
      const computerMove = getRandomMove();
      let result = "";
      if (playerMove === computerMove) {
        result ="It's a tie!"
      } else if (
        (playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")
      ) {
         result = "You win!";
      } else {
         result = "You lose!";
      }

      if (result === "You win!") {
        score.wins++;
      } else if (result === "You lose!") {
        score.losses++;
      } else {
        score.ties++;
      }
      localStorage.setItem("score", JSON.stringify(score));
      document.querySelector(".js-moves").innerHTML =  `You
    <img src="images/${playerMove}-emoji.png"class="hand-img" >
    <img src="images/${comMove}-emoji.png" class="hand-img" >
    Computer`
      document.querySelector(".js-result").innerHTML = result;      
     document.querySelector(".js-score").innerHTML =  "\nWins: " + score.wins + 
            " Losses: " + score.losses + 
            "  Ties: " + score.ties;
  }
  let isAuto= false;
  let intervalId;
  function autoPlay (){
    if(!isAuto) {
      document.querySelector("#auto").innerHTML = "Stop Auto Play";
    intervalId=setInterval(function() {
      const playerMove = getRandomMove();
      playGame(playerMove);}, 1000);
      isAuto = true;
    }else{
      document.querySelector("#auto").innerHTML = "Auto Play";
      clearInterval(intervalId);
      isAuto = false;
    }
  }
  document.body.addEventListener("keydown",(event) => {
    if (event.key === "r" || event.key === "R") {
      playGame("Rock");
    } else if (event.key === "p" || event.key === "P") {
      playGame("Paper");
    } else if (event.key === "s" || event.key === "S") {
      playGame("Scissors");
    } else if (event.key === "a" || event.key === "A") {
      autoPlay();
    } else if (event.key === "c" || event.key === "C") {
      resetScore();
    }
  });
