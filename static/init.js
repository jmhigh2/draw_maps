console.log("This file will initialize the canvas for drawing.");
var canvas = new fabric.Canvas('c');
// create a rectangle object
canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 5;
function RenderToSVG() {

    var svg = document.getElementById('renders');
    var svgrender = canvas.toSVG();
    var parser = new DOMParser();
    var doc = parser.parseFromString(svgrender, "image/svg+xml");

    svg.innerHTML = doc.documentElement.outerHTML;

    var path = doc.documentElement['children'][2]['childNodes'][1]['attributes'][2]['nodeValue'];
    var path_object = SVGPathParser(path);
    var normalized_path = SVGPathNormalizer(path_object);
    var SCALE = 0.005;//0.000005
    //console.log(normalized_path);
    var coordinates = CreateCoordinatesfromPath(-71.000000000001, -31.0000000000001, SCALE, normalized_path);
    
    document.getElementById("coor").innerHTML = coordinates;
    addCoordinates(coordinates); // FOR DEBUGGING
    addLocation(); // FOR DEBUGGING
    addToMap(coordinates);
    console.log("Coordinates placeholder: ")
    console.log(coordinates)
}

function CreateCoordinatesfromPath(start_x, start_y, scale, path_list) {

    var new_path_list = [[start_x, start_y]];
    var x = start_x;
    var y = start_y;

    for (var i = 1; i < path_list.length; i++) {
        switch (path_list[i][0]) {
            case "M":
                x = x + path_list[i][1] * scale;
                y = y + path_list[i][2] * scale;
                break;
            case "Q":
                x = x + path_list[i][3] * scale;
                y = y + path_list[i][4] * scale;
                break;
        }
        new_path_list.push([x, y]);
    }

    return new_path_list;
}

