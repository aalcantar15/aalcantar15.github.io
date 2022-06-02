alert("I am so proud of you babe")
alert("lots of endless work and you're finally done!")
alert("I am so excited for you, also jealous.. hehe, but overall so excited to see what the future holds for you")
alert("I love you and here's to many more accomplishments")
alert("Now it's time to get some head, I mean bread hahaha") 
alert("I have no idea how I did this btw")
alert("but I wanted to impress you")
alert("but anyways one last thing")
// do this for 30 seconds 

var duration = 30 * 1000; 
var end = Date.now() + duration;

(function frame() {
  // launch a few confetti from left edge 
 confetti({
   particleCount: 7,
   angle: 60
   spread: 55, 
   origin: { x: 0 }
});
// and launch a few from the right edge 
confetti({
  particleCount: 7
  angle: 120,
  spread: 55,
  origin: { x: 1 }
});

// keep going until we are out of time 
if (Date.now() < end) { 
requestAnimationFrame(frame);
}
}());
