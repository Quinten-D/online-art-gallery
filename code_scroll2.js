//DEFINITIONS//
function allocatePhoto(){   //this is the element which fired the event
  sessionStorage.setItem("photo", sessionStorage.getItem(this.id));
}

function EventHandler() {
	console.log(this.id);
}


//INITIATE//
var t = 3;
var scroll_length = 25.6*t + t*4.8 //in percent van de scroll width  (widthpost=47% of scroll width & heightpost=32% of scroll width, scroll width=80%ofwindowwidth)
var scroll = document.getElementById("scroll");
scroll.style.setProperty('padding-bottom', scroll_length + "%");
var post2 = document.getElementById("post2");
post2.style.setProperty('left', 53+"%");
var post3 = document.getElementById("post3");
post3.style.setProperty('top', (1/3)*100 + "%")
var post4 = document.getElementById("post4");
post4.style.setProperty('top', (2/3)*100 + "%")
var post5 = document.getElementById("post5");
post5.style.setProperty('top', (1/3)*100 + "%");
post5.style.setProperty('left', 53+"%");
var post6 = document.getElementById("post6");
post6.style.setProperty('top', (2/3)*100 + "%")
post6.style.setProperty('left', 53+"%");

document.getElementById("inner1").style.backgroundImage = "url(dejeuner.jpg)";
document.getElementById("inner2").style.backgroundImage = "url(kandinsky.jpg)";
document.getElementById("inner5").style.backgroundImage = "url(bargue.jpg)";
document.getElementById("inner3").style.backgroundImage = "url(lotus.jpg)";
document.getElementById("inner6").style.backgroundImage = "url(peter.jpg)";
document.getElementById("inner4").style.backgroundImage = "url(rd.jpg)";

sessionStorage.setItem("post1", "dejeuner.jpg");
sessionStorage.setItem("post2", "kandinsky.jpg");
sessionStorage.setItem("post5", "bargue.jpg");
sessionStorage.setItem("post3", "lotus.jpg");
sessionStorage.setItem("post6", "peter.jpg");
sessionStorage.setItem("post4", "rd.jpg");


//EVENTS//
var elements = document.getElementsByClassName("post");
for (var i = 0; i < elements.length; i++){
  elements[i].onclick = allocatePhoto;
}
