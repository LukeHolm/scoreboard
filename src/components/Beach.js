import { useState } from "react";

const Beach = ({ coin }) => {



  const initialState = 0;
  const [team1, setTeam1] = useState(initialState); // Team 1 score
  const [team2, setTeam2] = useState(initialState); // Team 2 score
  const [serve, setServe] = useState(null); // false = team1 serve, true = team2 serve
  const [setScore, setSetScore] = useState([]); //Array with set scores, displayed at bottom of page
  const [team1wins, setTeam1Wins] = useState(0);
  const [team2wins, setTeam2Wins] = useState(0);

  const sideSwitch = team1 + team2;
  console.log(sideSwitch);

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
    setTeam1Wins(0);
    setTeam2Wins(0);
  }

  //------------------------------------------------------ Plus & Minus -----------------------------------------------------------------

  const plus1 = () => {
    if ((team1 === 20 && team2 < 20) || (team1 > 20 && team1 === team2 + 1)) {
      setTeam1(team1 + 1);
      if(window.confirm("Team 1 wins")) {{
      setSetScore(setScore.concat(team1 + 1,team2));
      setTeam1Wins(team1wins+1);
      }}
    } else if ((team1 === 21 && team2 < 20) || (team1 > 21 && team1 === team2 + 2)) {
      setTeam1(team1 + 0)
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
    if ((team2 === 20 && team1 < 20) || (team2 > 20 && team2 === team1 + 1)) {
      setTeam2(team2 + 1);
      if(window.confirm("Team 2 wins")) {{
        setSetScore(setScore.concat(team1,team2 + 1));
        setTeam2Wins(team2wins+1);
      }}
    } else if ((team2 === 21 && team1 < 20) || (team2 > 21 && team2 === team1 + 2)) {
      setTeam2(team2 + 0)
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
  serve1 = <i class="fas fa-volleyball-ball big"></i>;
  serve2 = null;
} else if (serve === true) {
  serve1 = null;
  serve2 = <i class="fas fa-volleyball-ball big"></i>
} else if (coin === 0) {
  serve1 = <i class="fas fa-star big"></i>
  serve2 = null;
} else if (coin === 1) {
  serve1 = null;
  serve2 = <i class="fas fa-star big"></i>
} else if (coin === 3) {
  serve1 = null;
  serve2 = null;
}

//------------------------------------------------------ Side switch ------------------------------------------------------------

if (sideSwitch === 7 || 
  sideSwitch === 14 || 
  sideSwitch === 21 || 
  sideSwitch === 28 || 
  sideSwitch === 35 ||
  sideSwitch === 42 ||
  sideSwitch === 49 ||
  sideSwitch === 56) {
    alert("Side switch!");
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
        <div className="col-sm-2 sets-won">
          <div>{team1wins}</div>
          <div>-</div>
          <div>{team2wins}</div>
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
          <div className="col column">
          <div>Time-Out</div>
          <div>
            <label class="container">
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
          </div>
            </div>
          <button className="button" onClick={minus1}>-</button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-2 reset-box">
          <button className="reset-button" onClick={reset}>reset</button>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-3 button-box">
          <button className="button" onClick={plus2}>+</button>
          <div className="col column">
            <div>Time-Out</div>
          <div>
            <label class="container">
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
          </div>
          <div>
            <label class="container">
              <input type="checkbox"/>
              <span class="checkmark"></span>
            </label>
          </div>
            </div>
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
      <button className="reset-button" onClick={() => {if(window.confirm("This will reset all sets and scores")){resetMatch()}}}>reset all</button>
    </div>
  );
};

export default Beach;
