command to install cherrypy webserver
"pip install cherrypy"

command to start server -
"python draw_maps.py"


Overview (current)

We can start with drawing a simple line on a map.

1. Take input from user from some kind of canvas element on web-page (mainly HTML + javascript)
2. convert the output from the canvas into some kind of relative coordinate system
  we can do this on browser or back-end of web service
  *if on browser, we'll do in javascript
  *if on server, we can do in Python. We'll need to create a new link in the python file and pass the coordinates to it

3. Get a starting point. We can hard code this for now
4. create a list of GPS Latitude/longitude coordinates and plot them in a mapping API. Google Maps may be overkill, there are plenty of other ones.

5. display result on web-page (ideally result should be interactive map with coordinates overlayed)
