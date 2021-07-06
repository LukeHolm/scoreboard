import "./App.css";

import { useState } from "react";

import Counter from "./components/Counter";
import Teamname from "./components/Teamname";

function App() {
  const [show, setShow] = useState(false);
  let [random, setRandom] = useState();
  let [clicked, setClicked] = useState(false);
  

  const coinflipper = () => {
    if (clicked === false) {
      setClicked(true);
      setRandom(() => Math.floor(Math.random() * 2));
    } else if (clicked === true) {
      setRandom(3);
      setClicked(false);
    }
  };


  return (
    <div className="col center">
      <div>
        <button className="setting-button" onClick={() => setShow(true)}>Set team name</button>
        <button className="coin-button" onClick={coinflipper}>CoinFlip</button>
        <Teamname onClose={() => setShow(false)} show={show}></Teamname>
      </div>
      <Counter coin={random} />
    </div>
  );
}

export default App;
