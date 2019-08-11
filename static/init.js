console.log("This file will initialize the canvas for drawing.")

var canvas = new fabric.Canvas('c');

// create a rectangle object
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 5;

function rendertoSVG()
{
  var svg = document.getElementById('renders');

  var svgrender = canvas.toSVG();
  var parser = new DOMParser();
  var doc = parser.parseFromString(svgrender, "image/svg+xml");

  svg.innerHTML = doc.documentElement.outerHTML;

  var path = doc.documentElement['children'][2]['childNodes'][1]['attributes'][2]

  console.log(path);
}
