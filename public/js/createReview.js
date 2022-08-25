document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    // console.log(elems);
    var instances = M.FormSelect.init(elems);
    console.log(instances);
});
