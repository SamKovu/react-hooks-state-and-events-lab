import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [mode,setMode]=useState(false)
  const appClass = mode ? "App dark" : "App light"

 function chooseMode(){
  setMode(!mode);
  appClass = mode ? "App dark" : "App light"
 }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={chooseMode}>{mode ? "Light Mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
