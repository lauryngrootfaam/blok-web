/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/
//javascript van w3school voor mijn uitklapbare menu

//var filteren = document.getElementsByClassName("filtermenu");
//var i;
//
//for (i = 0; i < filteren.length; i++) {
//  filteren[i].addEventListener("click", function() {
//    this.classList.toggle("active");
//    var content = this.nextElementSibling;
//    if (content.style.display === "block") {
//      content.style.display = "none";
//    } else {
//      content.style.display = "block";
//    }
//  });
//}


var button= document.querySelector("button");
var element = document.querySelector("#filtermenu");

button.addEventListener('click', function(){element.classList.toggle("verschijnen");});

//element.classList.toggle("yay");


var like= document.querySelector("#content2 button");
var rood = document.querySelector("#content2 button");

like.addEventListener('click', function(){rood.classList.toggle("liked");});