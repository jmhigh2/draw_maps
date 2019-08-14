var labels = 'What the Fuck';
var labelIndex = 0;
var latvar = [0]; //first position
var lngvar = [0];  //first position
var map;

function addLocation() {

  latvar.push(parseFloat(document.getElementById("fname").value));
  lngvar.push(parseFloat(document.getElementById("lname").value)+1);
  document.getElementById("lname").value = parseFloat(document.getElementById("lname").value)+1;
  labelIndex = 0;
}

// Initialize and add the map

function initMap() {
  // The location of Uluru
  var uluru = {lat: latvar[0], lng: lngvar[0]};
  // The map, centered at Uluru
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});        
}


  // Adds a marker to the map.
function addMarker(location, map) {
    var marker = new google.maps.Marker({
      position: location,
      label: labels[labelIndex++ % labels.length],
      map: map
    });
}

function addToMap(){
    var i =0;
    for (i = 0; i < latvar.length; i++){
        var uluru2 = {lat: latvar[i],lng: lngvar[i]}
        addMarker(uluru2, map);
        map.setCenter(uluru2);
    }    

}
google.maps.event.addDomListener(window, 'load', initialize);