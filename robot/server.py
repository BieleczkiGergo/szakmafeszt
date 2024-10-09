#! /bin/python

from http.server import BaseHTTPRequestHandler, HTTPServer
import atexit
import controls

HOSTNAME = "localhost"
PORT = 3000
valid_files = ("index.html", "style.css", "svgstyle.css", "script.js", "forward.svg", "backward.svg", "left.svg", "right.svg")
valid_actions = ("f", "b", "l", "r", "s")


def get_file_data(fname):
    file = open("web_src/" + fname)
    return "".join(file.readlines())

def get_content_type(fname):
    match fname:
        case "index.html":
            return "text/html"
        case "style.css":
            return "text/css"
        case "script.js":
            return "application/javascript"
        case "up.svg" | "down.svg" | "left.svg" | "right.svg":
            return "image/svg+xml"
        case _:
            return ""


class RobotHTTPHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = self.path[1:]
        if path in valid_files:
            data = bytes(get_file_data(path), "utf-8")
            self.send_response(200)
            self.send_header("content-type", get_content_type(path))
            self.send_header("content-length", len(data))
            self.end_headers()
            self.wfile.write(data)
        else:
            self.send_response(404)
            self.send_header("content-type", "text/plain")
            self.send_header("content-length", "0")
            self.end_headers()
        self.close_connection = True

    def do_POST(self):
        path = self.path[1:]
        if path[0] in valid_actions:
            self.send_response(200)
            if path == "s":
                path = "sd"
            controls.control_robot(path[0], path[1])
            
        else:
            self.send_response(404)
        self.send_header("content-type", "text/plain")
        self.send_header("content-length", "0")
        self.end_headers()
        self.close_connection = True


web_server = HTTPServer((HOSTNAME, PORT), RobotHTTPHandler)

def start_server():
    web_server.serve_forever()

def stop_server():
    web_server.server_close()

