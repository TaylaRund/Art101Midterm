// event handler function
// this function taken from https://plainjs.com/javascript/events/getting-the-current-mouse-position-16/
var pageXpre, pageYpre;
var r, g, b;
r = Math.random()*255;
g = Math.random()*255;
b = Math.random()*255;
function handler(e) {
    e = e || window.event;
    var pageX = e.pageX;
    var pageY = e.pageY;
    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }


    //Create jsGraphics object
    var gr = new jsGraphics(document.getElementById("canvas"));
    //Create jsColor object
    var col = new jsColor(r, g, b);
    //Create jsPen object
    var pen = new jsPen(col, 5);
    //Draw a Line between 2 points
    var pt1 = new jsPoint(pageX, pageY);
    var pt2 = new jsPoint(pageXpre, pageYpre);
    if (pageXpre != null) {
      gr.drawLine(pen,pt1,pt2);
    }
    //Draw filled circle with pt1 as center point and radius 30.
    // gr.fillCircle(col,pt1,10);
    //You can also code with inline object instantiation like below
    // gr.drawLine(pen,new jsPoint(40,10),new jsPoint(70,150));
    pageXpre = pageX;
    pageYpre = pageY;
    console.log(pageX, pageY);
    if (document.attachEvent) document.attachEvent('onclick', end);
    else document.addEventListener('click', end);

}
// attach handler to the click event of the document
if (document.attachEvent) document.attachEvent('onclick', start);
else document.addEventListener('click', start);
function start() {
  if (document.attachEvent) document.attachEvent('onmousemove', handler);
  else document.addEventListener('mousemove', handler)
}
function end() {
}
