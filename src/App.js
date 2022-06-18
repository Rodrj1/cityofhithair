import React from "react";
import "./App.css";
import InitStage from "./components/Map/MapInitialStage";

class App extends React.Component {
  render() {
    return (
      <>
        <InitStage />
      </>
    );
  }
}

export default App;

//CODE FOR CHANGING NAMES AT RANDOM

/*
const names = ["Maevir", "Lucard", "Eldare", "Val-Oz", "Gavrin", "Maevir", "Lucard", "Eldare", "Val-Oz", "Gavrin", "Tulkas", "Durel", "Gathriel", "Gorg",
    "Tovald", "Amvir", "Khamul", "Rhun", "Olgierd", "Vogye", "Vyr-Reignwald", "Minzar", "Lazarus", "Ossir"
    , "Aandarath", "Petreume", "Dol-Avut", "Gathric", "Morthaur", "Gorthaur", "Morianthe"];

  getName(){   
    let nameCount = names.length;
    let randomName = Math.floor(Math.random() * (nameCount - 1)) + 1;
    console.log(names[randomName]);
    console.log(randomName);
    this.setState({name: names[randomName]});
    names.splice(randomName, 1);    
  }

  componentDidMount() {
        this.getName();
  }

<button onClick = {this.down}>Button</button>


USELESS POR AHORA
import peasantimg from "./peasantportrait.jpg";
import knightimg from "./knightportrait.jpg";
import defendicon from "./defendicon.jpg";
import attackicon from "./attackicon.jpg";
import actionmenuimg from "./backgroundmenuaction.jpg";
*/
