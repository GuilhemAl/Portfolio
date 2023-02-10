var texts = [  "a developer.",  "a student.",  "Guilhem Albus.",  "a gamer.",];
var currentText = 0;
var i = 0;
var prefix = "I'm ";

function writeText() {
  if (i <= texts[currentText].length) {
    document.getElementById("js-animation").innerHTML = prefix + texts[currentText].substring(0, i);
    i++;
    setTimeout(writeText, 100);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  i--;
  
  document.getElementById("js-animation").innerHTML = prefix + texts[currentText].substring(0, i);
  if (i === 0) {
    currentText = (currentText + 1) % texts.length;
    setTimeout(writeText, 100);
  } else {
    setTimeout(eraseText, 100);
  }
}

window.onload = function () {
  writeText();
};