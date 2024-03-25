// import React from "react";
// import ReactDOM from "react-dom";
// import "./style.css";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

var hor = document.getElementById("hours");
var mins = document.getElementById("minutes");
var sec = document.getElementById("seconds"); 

function relogio() {
    var data = new Date();
    var hor = data.getHours(); 
    var min = data.getMinutes(); 
    var sec = data.getSeconds();  
    
    if(hor<10) { hor = "0" + hor};
    if(min<10) { min = "0" + min};
    if(sec<10) { sec = "0" + sec};

    horas.textContent = hor;
    minutos.textContent = min;
    secondos.textContent = sec;
}
setInterval(relogio, 1000);