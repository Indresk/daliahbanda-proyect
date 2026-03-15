import { useState,useEffect } from "react";
import "./styles.css"

function DaliahClicker(){
  const [daliahCookieCount, setDaliahCookieCount] = useState(0);
  const [cookieSideBar, setCookieSideBar] = useState(false);

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
      <div className={`fixed top-[0px] right-[0px] flex items-center font-doto h-full text-white transition-translate duration-300 ease-in-out${cookieSideBar?``:` translate-x-[85vw] lg:translate-x-[30vw]`}`}>
          <div id="cookie-bookmark" onClick={()=>setCookieSideBar(prev=>!prev)}>
            <div className="cookie-bookmark-container flex flex-col justify-center items-center">
                <img style={{filter:'invert(1)'}} src="https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg" alt="Logo de Daliah Banda" />
                <p className="text-[10px]">{daliahCookieCount}</p>
            </div>
          </div>
          <aside id="full-clicker" className="w-[85vw] lg:w-[30vw]">
            <div className="full-clicker-header">
              <p className="text-black dark:text-white">{"---> DaliGalletas <----"}</p>
            </div>
            <div className="full-clicker-window flex flex-col justify-center items-center gap-4">
              <button className="cookie-button w-[100px] flex justify-center items-center" onClick={()=>{setDaliahCookieCount(daliahCookieCount+1)}}><img style={{filter:'invert(1)'}} src="https://assets.daliahbanda.com/brand/logos/icon/logo-d-daliah-vector-v1.svg" alt="Logo de Daliah Banda" /></button>
              <p className="text-lg">{daliahCookieCount}</p>
            </div>
          </aside>
      </div>
  );
}




export default DaliahClicker;
