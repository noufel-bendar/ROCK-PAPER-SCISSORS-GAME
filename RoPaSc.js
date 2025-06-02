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
    <img src="${playerMove}-emoji.png"class="hand-img" >
    <img src="${comMove}-emoji.png" class="hand-img" >
    Computer`
      document.querySelector(".js-result").innerHTML = result;      
     document.querySelector(".js-score").innerHTML =  "\nWins: " + score.wins + 
            " Losses: " + score.losses + 
            "  Ties: " + score.ties;
  }
