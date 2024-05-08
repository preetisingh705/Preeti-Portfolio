import './Scroll.css';
import { PiCaretDoubleUpBold } from "react-icons/pi";

function ScollTop(){
  let calcScrollValue = ()=>{
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click",()=>{
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

  return (
    <>
     {/* <footer>
        <p>Copyright © 2023 by <span>Pars Coder</span> || All Right Reservd.</p>
    </footer> */}

    <div id="progress">
        <span id="progress-value">
          <PiCaretDoubleUpBold />
        </span>
    </div>
    </>
  );
};

export default ScollTop;