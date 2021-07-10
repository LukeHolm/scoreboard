import { useState } from "react";

const Indoor = ({ coin }) => {



  const initialState = 0;
  const [team1, setTeam1] = useState(initialState); // Team 1 score
  const [team2, setTeam2] = useState(initialState); // Team 2 score
  const [serve, setServe] = useState(null); // false = team1 serve, true = team2 serve
  const [setScore, setSetScore] = useState([]);

  //------------------------------------------------------ Reset score ------------------------------------------------------------------

  const reset = () => {
    setTeam1(0);
    setTeam2(0);
    setServe(null);
  };

  const resetMatch = () => {
    setTeam1(0);
    setTeam2(0);
    setServe(null);
    setSetScore([]);
  }

  //------------------------------------------------------ Plus & Minus -----------------------------------------------------------------

  const plus1 = () => {
    if ((team1 === 24 && team2 < 24) || (team1 > 24 && team1 === team2 + 1)) {
      setTeam1(team1 + 1);
      alert("Team 1 wins");
      setSetScore(setScore.concat(team1 + 1,team2));
    } else {
      setTeam1(team1 + 1);
      setServe(false);
    }
  };

  const minus1 = () => {
    if (team1 === 0) {
    } else {
      setTeam1(team1 - 1);
    }
  };

  const plus2 = () => {
    if ((team2 === 24 && team1 < 24) || (team2 > 24 && team2 === team1 + 1)) {
      setTeam2(team2 + 1);
      alert("Team 2 wins");
      setSetScore(setScore.concat(team1,team2 + 1))
    } else {
      setTeam2(team2 + 1);
      setServe(true);
    }
  };

  const minus2 = () => {
    if (team2 === 0) {
    } else {
      setTeam2(team2 - 1);
    }
  };

  //------------------------------------------------------ Who is serving -----------------------------------------------------------------

  let serve1 = null;
  let serve2 = null;

  if (serve === false) {
  serve1 = <i class="fas fa-volleyball-ball"></i>;
  serve2 = null;
} else if (serve === true) {
  serve1 = null;
  serve2 = <i class="fas fa-volleyball-ball"></i>
} else if (coin === 0) {
  serve1 = <i class="fas fa-star"></i>
  serve2 = null;
} else if (coin === 1) {
  serve1 = null;
  serve2 = <i class="fas fa-star"></i>
} else if (coin === 3) {
  serve1 = null;
  serve2 = null;
}

  //------------------------------------------------------ Return -----------------------------------------------------------------

  return (
    <div>
      <div className="row">
        <div className="col-sm-3 offset-sm-1">
          <div className="score">{team1}</div>
          <div className="button-box"></div>
        </div>
        <div className="col-sm-1 serve">
        {serve1}
        </div>
        <div className="col-sm-2">
          set score
        </div>
        <div className="col-sm-1 serve">
        {serve2}
        </div>
        <div className="col-sm-3">
          <div className="score">{team2}</div>
          <div className="button-box"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3 offset-sm-1 button-box">
          <button className="button" onClick={plus1}>+</button>
          <button className="button" onClick={minus1}>-</button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-2 reset-box">
          <button className="reset-button" onClick={reset}>RESET</button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-3 button-box">
          <button className="button" onClick={plus2}>+</button>
          <button className="button" onClick={minus2}>-</button>
        </div>
        <div className="set-row">
        <div className="set-board">
        <div>Set 1</div> 
        <div className="set-score">{setScore[0]} : {setScore[1]}</div>
        </div>
        <div className="set-board">
        <div>Set 2</div> 
        <div className="set-score">{setScore[2]} : {setScore[3]}</div>
        </div>
        <div className="set-board">
        <div className="set-text">Set 3</div> 
        <div className="set-score">{setScore[4]} : {setScore[5]}</div>
        </div>
        <div className="set-board">
        <div>Set 4</div> 
        <div className="set-score">{setScore[6]} : {setScore[7]}</div>
        </div>
        <div className="set-board">
        <div>Set 5</div> 
        <div className="set-score">{setScore[8]} : {setScore[9]}</div>
        </div>
        </div>
      </div>
      <button onClick={() => {if(window.confirm("This will reset all sets and scores")){resetMatch()}}}>reset all</button>
    </div>
  );
};

export default Indoor;
