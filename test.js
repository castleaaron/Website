var count = 0;
var button = document.getElementById("center_button");
var countDisplay = document.getElementById("count");
if(localStorage.getItem("count") == null)
{
    localStorage.setItem("count", 0);
}
localStorage.setItem("count", localStorage.getItem("count"));
countDisplay.innerHTML = localStorage.getItem("count");
button.addEventListener("click", function() {
    count = parseInt(localStorage.getItem("count"));
    count++;
    localStorage.setItem("count", count);
    countDisplay.innerHTML = localStorage.getItem("count");
 });  


