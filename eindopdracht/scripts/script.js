//javascript van w3school voor mijn uitklapbare menu
var filteren = document.getElementsByClassName("filtermenu");
var i;

for (i = 0; i < filteren.length; i++) {
  filteren[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}