/*
	Storing all the elements that need to be interacted with in variables
*/
var thumbs = document.getElementsByClassName("thumbnails");
var backgroundEl = document.getElementById("backgroundDiv");

/*
	Loop through the array of thumbLearnails, adding an Eventlistener to every object. More info about the eventlisteners:
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

So basically, every time you 'mouseover' a thumbnail, call 'resizeBG' function. Every time you 'mouseout' a thumbnail, call 'resizeBack'.
*/
for(var i=0; i<thumbs.length;i++) {
	thumbs[i].addEventListener("mouseover", resizeBG);
  	// thumbs[i].addEventListener("mouseout", resizeBack);
}


function resizeBG() {
	// give the 'active' classname to the background div (which performs all the resizing) 
	backgroundEl.className = "active";
  
  // get the distance from the top of the document to correctly position it on the y-axis. x-axis is taken care of by css.
  var topDist = this.getBoundingClientRect().top;
  
  // give the top-value to the element in the 'style' attribute
  backgroundEl.style.top = topDist + "px";
}

	// resize back: remove the 'active' class and bring it back to top: 0;
function resizeBack() {
	backgroundEl.className = "";
  backgroundEl.style.top = 0 + "px";
}