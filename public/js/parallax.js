document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelector(".parallax");
    var instances = M.Parallax.init(elems);
    // console.log(instances);
});

document.addEventListener("DOMContentLoaded", function() {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems);
    console.log(instances);
});