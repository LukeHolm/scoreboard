import "./App.css";
import "./Radiobutton.css";

import { useState } from "react";

import Indoor from "./components/Indoor";
import Beach from "./components/Beach";
import Teamname from "./components/Teamname";

function App() {
  const [show, setShow] = useState(false);
  let [random, setRandom] = useState();
  let [clicked, setClicked] = useState(false);

  const coinflipper = () => {
    if (clicked === false) {
      setClicked(!clicked);
      setRandom(() => Math.floor(Math.random() * 2));
    } else if (clicked === true) {
      setRandom(3);
      setClicked(!clicked);
    }
  };


  return (
    <div className="col center">
      <div>
        <button className="setting-button" onClick={() => setShow(true)}>Set team name</button>
        <button className="coin-button" onClick={coinflipper}>CoinFlip</button>
        <Teamname onClose={() => setShow(false)} show={show}></Teamname>
      </div>
      <Indoor coin={random}/>
    </div>
  );
}

export default App;