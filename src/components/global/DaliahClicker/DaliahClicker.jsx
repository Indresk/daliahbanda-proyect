import { useState,useEffect } from "react";
import DaliahIconVector from "../../../assets/DaliahIconVector";
import "./styles.css"

const DaliahClicker=()=>{
    const [daliahCookieCount, setDaliahCookieCount] = useState(0);
  useEffect(() => {
    const stored = localStorage.getItem("daliahClicks");
    if (stored){
        setDaliahCookieCount(Number(stored))
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("daliahClicks", daliahCookieCount);
  }, [daliahCookieCount]);
return(
    <div class="fixed bottom-[50px] right-[50px] flex items-center gap-3 font-doto">
        <button class="cookie-button w-[100px] flex justify-center items-center" onClick={()=>{setDaliahCookieCount(daliahCookieCount+1)}}><DaliahIconVector color="#fff"/></button>
        <h2>Daligalletas: {daliahCookieCount}</h2>
    </div>
);
}




export default DaliahClicker;
