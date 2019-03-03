$(document).mousemove(function(e) {
    $('.hover').offset({
        left: e.pageX,
        top: e.pageY + 20
    });
});

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
