var labels = 'YEET';
var labelIndex = 0;
var latvar = [0]; //first position
var lngvar = [0];  //first position
var map;

// FOR Debugging 
function addLocation() {
  document.getElementById("lat").innerHTML = latvar;
  document.getElementById("lng").innerHTML = lngvar;
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

function addToMap(coordinates){
    var i =0;
    for (i = 0; i < coordinates.length; i++){
        var uluru2 = {lat: coordinates[i][1],lng: coordinates[i][0]}
        addMarker(uluru2, map);
        map.setCenter(uluru2);
    }    

}
// FOR DEBUGGING
function addCoordinates(coordinates){
    var i =0;
    for (i = 0; i < coordinates.length; i++){
        lngvar[i] = coordinates[i][0];
        latvar[i] = coordinates[i][1];
    }    

}


google.maps.event.addDomListener(window, 'load', initialize);


