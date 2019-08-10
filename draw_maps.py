import cherrypy
import os

class Index():

    @cherrypy.expose
    def index(self): 
        return open('index.html','r').read()


def error_page_404(status, message, traceback, version):
    return "404 Error!"

def error_page_401(status, message, traceback, version):
    return "401 Unauthorized"


config = {
'/': {
    'tools.sessions.on': True,
    'tools.staticdir.root': os.path.abspath(os.getcwd())
},

'global': {
    'server.socket_host': '0.0.0.0',
    'server.socket_port': int(os.environ.get('PORT', 80)), #default to 80
    'error_page.404': error_page_404,
    'error_page.401': error_page_401,
},

'/static': {
     'tools.staticdir.on': True,
     'tools.staticdir.dir': './static',
}
}

cherrypy.quickstart(Index(), '/', config)
