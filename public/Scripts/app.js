(function(){
    function Start(){
        console.log("App Started!");
    }

    window.addEventListener("load", Start);
})();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}