import { useState } from "react";

const Counter = ({ coin }) => {

    // console.log(coin);

  const initialState = 0;
  const [team1, setTeam1] = useState(initialState); // Team 1 score
  const [team2, setTeam2] = useState(initialState); // Team 2 score
  const [team1Serve, setTeam1Serve] = useState(false); // Team 1 score 
  const [team2Serve, setTeam2Serve] = useState(false); // Team 2 score

  //------------------------------------------------------ Reset score ------------------------------------------------------------------
  
  let whoIsServing = " ";
  const reset = () => {
    setTeam1(0);
    setTeam2(0);
  };

  //------------------------------------------------------ Plus & Minus -----------------------------------------------------------------

  const plus1 = () => {
    if ((team1 === 24 && team2 < 24) || (team1 > 24 && team1 === team2 + 1)) {
      setTeam1(team1 + 1);
      alert("Team 1 wins");
    } else {
      setTeam1(team1 + 1);
      setTeam1Serve(true);
      setTeam2Serve(false);
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
    } else {
      setTeam2(team2 + 1);
      setTeam2Serve(true);
      setTeam1Serve(false);
    }
  };

  const minus2 = () => {
    if (team2 === 0) {
    } else {
      setTeam2(team2 - 1);
    }
  };

  //------------------------------------------------------ Who is serving -----------------------------------------------------------------
  
  if (team1Serve === true) {
    whoIsServing = <i class="fas fa-caret-left"></i>;
  } else if (team2Serve === true) {
    whoIsServing = <i class="fas fa-caret-right"></i>;
  } else if (coin === 0) {
    whoIsServing = <i class="fas fa-angle-left"></i>;
  } else if (coin === 1) {
    whoIsServing = <i class="fas fa-angle-right"></i>;
  } else if (coin === 3) {
    whoIsServing = null;
  }

  //------------------------------------------------------ Return -----------------------------------------------------------------

  return (
    <div>
      <div className="row">
        <div className="col-sm-4 offset-sm-1">
          <div className="score">{team1}</div>
          <div className="button-box"></div>
        </div>
        <div className="col-sm-2">{whoIsServing}</div>
        <div className="col-sm-4">
          <div className="score">{team2}</div>
          <div className="button-box"></div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 offset-sm-1 button-box">
          <button className="button" onClick={plus1}>+</button>
          <button className="button" onClick={minus1}>-</button>
        </div>
        <div className="col-sm-2 reset-box">
          <button className="reset-button" onClick={reset}>RESET</button>
        </div>
        <div className="col-sm-4 button-box">
          <button className="button" onClick={plus2}>+</button>
          <button className="button" onClick={minus2}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
