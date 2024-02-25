var music = document.getElementById("bgm");

function validate() {
  if (
    document.getElementById("text1").value == "cantik" ||
    document.getElementById("text1").value == "Cantik" ||
    document.getElementById("text1").value == "CANTIK"
  ) {
    document.getElementById("loadscreen").style.top = "-100%";

    music.play();
  }
  return false;
}

function playmusic() {}
