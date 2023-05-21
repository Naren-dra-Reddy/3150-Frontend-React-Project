import { useState } from "react";


export default function Button() {
 const [buttonText,setButtonText]=useState("Add");
 const [active, setActive] = useState(false);
 const handleClick=()=>{
  if(buttonText=="Remove"){
    setActive(false);
    setButtonText("Add");
  }
  else{
    setActive(true);
    setButtonText("Remove");
  }
    }

  return (
    <div>
      <button type="submit" onClick={handleClick} style={{ backgroundColor: active ? "limegreen" : "dodgerblue"}}>
        {buttonText}
      </button>
    </div>
  );
}



