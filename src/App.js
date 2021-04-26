import Header from "./components/Header";
import Screen from "./components/Screen"
import Buttons from "./components/Buttons"
import { useState } from 'react'

function App() {
  const [letters, setLetters] = useState("");
  const [equal, setEqual] = useState(0);

  const onClickOfEqualButtons = () => {
    if(letters.includes("+")){
      let ind = letters.indexOf("+");
      const equal = parseInt(letters.substring(0,ind))+parseInt(letters.substring(ind+1, letters.length));
      setEqual(equal);
      console.log("Equal"+equal);
    }
    if(letters.includes("-")){
      let ind = letters.indexOf("-");
      const equal = parseInt(letters.substring(0,ind))-parseInt(letters.substring(ind+1, letters.length));
      setEqual(equal);
      console.log(equal);
    }
    if(letters.includes("*")){
      let ind = letters.indexOf("*");
      const equal = parseInt(letters.substring(0,ind))*parseInt(letters.substring(ind+1, letters.length));
      setEqual(equal);
      console.log(equal);
    }
    if(letters.includes("/")){
      let ind = letters.indexOf("/");
      const equal = (parseInt(letters.substring(0,ind)))/(parseInt(letters.substring(ind+1, letters.length)));
      setEqual(equal);
      console.log(equal);
    }
    console.log(equal);
  }
  return (
    <div className="container">
      <Header />
      <Screen letters={letters} equal={equal}/>
      <Buttons onClickOfButtons={(e)=> setLetters(prevState => prevState + e.target.textContent)} onClickOfEqualButtons={onClickOfEqualButtons}/>
    </div>
  );
}

export default App;
