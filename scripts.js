document.addEventListener("DOMContentLoaded",function(){
let div = document.createElement("div");
let h1 =document.createElement("h1");
let h1text=document.createTextNode("this text is h1");
div.className="header-container"
h1.className="h1";
h1.appendChild(h1text);
div.appendChild(h1);
document.body.appendChild(div);

let h2= document.createElement("h2")
h2.className="h2";
let h2text=document.createTextNode("this is an h2");
h2.appendChild(h2text);
div.appendChild(h2);

let h3 =document.createElement("h3");
let h3text= document.createTextNode("this is an h3");
h3.className="h3";
h3.appendChild(h3text);
div.appendChild(h3);

let h4= document.createElement('h4');
let h4text = document.createTextNode('this is an h4');
h4.className="h4";
h4.appendChild(h4text);
div.appendChild(h4);

let h5 =document.createElement("h5");
h5.className= "h5";
let h5text=document.createTextNode("this is an h5");
h5.appendChild(h5text);
div.appendChild(h5);

let h6= document.createElement("h6");
h6.className="h6";
let h6text=document.createTextNode("this is an h6");
h6.appendChild(h6text);
div.appendChild(h6);

let colors = ["red","blue","yellow","orange","green","pink","purple","teal"];

h1.addEventListener("click",function(){
    let x= Math.floor(Math.random()*9);
    h1.style.color = colors[x];

})
let ol =document.createElement("ol");
document.getElementsByClassName("button").addEventListener("click",function(){
let li =document.createElement("li");



})

})
