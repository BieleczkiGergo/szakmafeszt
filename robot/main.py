#! /bin/python

import server
import controls
import atexit

def exit():
    server.stop_server()
    controls.stop()

atexit.register(exit)

if __name__ == "__main__":
    controls.stop()
    server.start_server()