/* .js files add interaction to your website */

var slides = ['burlingtonVERMONT.jpg', 'napervilleILLONOIS.jpg', 'seattleWASHINGTON.jpg'];
var index = 0;
var image;

var back = document.getElementById("back");
var next = document.getElementById("next");

back.addEventListener("click", goBack);
next.addEventListener("click", goNext);

function goBack() {
  if (index>0) {
    index--;
  }
  else {
    index = index.length-1;
  }
  image = document.getElementById("image");
  image.innerHTML = "<img src=" + "\"assets/" + slides[index] + "\"" + ">";
}

function goNext() {
  if (index<slides.length-1) {
    index++;
  }
  else {
    index=0;
  }
  image = document.getElementById("image");
  image.innerHTML = "<img src=" + "\"assets/" + slides[index] + "\"" + ">";
}






