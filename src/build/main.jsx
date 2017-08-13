import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var app = document.getElementById('app');
ReactDOM.render(<App />, app);

//make font sizes smaller for smaller screens
//on larger projects would likely handle with external css
setFontSize();
window.addEventListener("resize", function(){ 
    setFontSize();
});

function setFontSize(){
    document.body.style.fontSize = (window.innerWidth >= 600) ? "16px" : "13px";
}
