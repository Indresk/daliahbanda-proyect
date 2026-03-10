import { useState,useEffect } from "react";
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
    <div className="fixed bottom-[50px] right-[50px] flex items-center gap-3 font-doto">
        <button className="cookie-button w-[100px] flex justify-center items-center" onClick={()=>{setDaliahCookieCount(daliahCookieCount+1)}}><img style={{filter:'invert(1)'}} src="https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg" alt="Logo de Daliah Banda" /></button>
        <h2>Daligalletas: {daliahCookieCount}</h2>
    </div>
);
}




export default DaliahClicker;
