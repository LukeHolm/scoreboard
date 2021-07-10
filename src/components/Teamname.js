import { useState } from "react";

const Teamname = (props) => {
  const [team1, setTeam1] = useState("Home");
  const [team2, setTeam2] = useState("Away");

  if (!props.show) {
    return (
      <div>
        <div className="row">
          <div className="col-sm-4 teamname">{team1}</div>
          <div className="col-sm-4 teamname">Sets won</div>
          <div className="col-sm-4 teamname">{team2}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-background" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span onClick={props.onClose} className="close" />
        <div className="row modal-body">
          <form>
            <div>
              <>Team 1</>
              <br />
              <input
                placeholder={team1}
                maxLength="25"
                onChange={(event) => setTeam1(event.target.value)}
              />
            </div>
            <>Team 2</>
            <br />
            <input
              placeholder={team2}
              maxLength="25"
              onChange={(event) => setTeam2(event.target.value)}
            />
          </form>
          <div className="col-sm-12">
            <button onClick={props.onClose}>submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teamname;
