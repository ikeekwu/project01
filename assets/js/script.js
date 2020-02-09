// dropdown lists when click
function lists () {
    var x = document.getElementById("dropdown");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none"; 
    }
    console.log(x)
}