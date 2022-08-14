let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();

// console.log(date)

setInterval(function(){

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let second = date.getSeconds();

let imag =document.getElementsByClassName("imag")[0];

let sec =document.getElementsByClassName("sec")[0];
let mn =document.getElementsByClassName("mn")[0];
let hr =document.getElementsByClassName("hr")[0];
imag.style.transform = "rotate("+second*6+"deg)";
sec.style.transform = "rotate("+second*6+"deg)";
mn.style.transform = "rotate("+minutes*6+"deg)";
hr.style.transform = "rotate("+hour*30+"deg)"
},1000 );