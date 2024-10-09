#! /bin/python

movement = "n"

def stop():
    print("stopping...")

def forward():
    print("going forward...")

def backward():
    print("going backward...")

def left():
    print("turning left...")

def right():
    print("turning right...")


def control_robot(direction, state):
    print(direction, state)
    if("s" == direction):
        stop()
        return
    
    global movement
    if "d" == state:
        movement = direction
    elif movement == direction:
        movement = "n"
    
    match movement:
        case "f":
            forward()
            return
        case "b":
            backward()
            return
        case "l":
            left()
            return
        case "r":
            right()
            return
        case "n":
            stop()
            return
