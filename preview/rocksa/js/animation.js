var $rock = $('#rock');

function loop1() {
  var tween1 = TweenLite.to($rock, .3, {
    ease: Power1.easeInOut,
    y: 40,
    x: 10,
    rotation: "-10",
    onComplete: loop2
  });
}
function loop2() {
  var tween2 = TweenLite.to($rock, .4, {
    ease: Power2.easeInOut,
    y: -20,
    x: -10,
    rotation: "10",
    onComplete: loop1
  });
}
// init
loop1();