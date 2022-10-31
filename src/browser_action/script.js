import {comparison} from "./comparison.js"; 
var V6,
    V5,
    V4,
    V7

window.onload=function(){
    document.getElementById("count").addEventListener("input", myFunction);
    loadData();
  }

async function loadData(){
    var res = await fetch('./data/V6-3.json')
    V6 = await res.json();
    res = await fetch('./data/V5-3.json')
    V5 = await res.json();
    res = await fetch('./data/V4-3.json')
    V4 = await res.json();
    res = await fetch('./data/V7-3.json')
    V7 = await res.json();
    
}
function myFunction(){
    var e = document.getElementById("plan");
    var value = e.value;
    var text = e.options[e.selectedIndex].text; 
    console.log(eval(text))
    var count = document.getElementById("count").value;
    var plan = comparison(count,eval(text));
    console.log(plan);
}



