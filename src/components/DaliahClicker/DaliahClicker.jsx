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
    <div class="container">
        <a class="cookie-button"href="#"  onClick={()=>{setDaliahCookieCount(daliahCookieCount+1)}}><img src="\DaliahLogoWhiteIcon.ico" width="100px"  alt="" /></a>
        <h2>Daligalletas: {daliahCookieCount}</h2>
    </div>
);
}
export default DaliahClicker;