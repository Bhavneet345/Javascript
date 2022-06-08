"use strict"
var divblock = document.getElementById('div1')
var clickcount = document.getElementById('click-count')

var clicks = 0;
function countclicks(){
    clicks++;
    console.log(clicks)
    clickcount.innerText = clicks + " "
}

divblock.addEventListener('click', countclicks);