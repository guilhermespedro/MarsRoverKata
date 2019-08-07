// Rover Object Goes Here
// ======================
var marsrover = {
  direction: "N", 
  x: 0, 
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(marsrover.direction) {
    case "N":
      marsrover.direction = "W";
      console.log(marsrover.direction);
      console.log(marsrover.x); 
      console.log(marsrover.y);
      break;
    case "E":
      marsrover.direction = "N";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "S":
      marsrover.direction = "E";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "W":
      marsrover.direction = "S";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
  }
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(marsrover.direction) {
    case "N":
      marsrover.direction = "E";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "E":
      marsrover.direction = "S";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "S":
      marsrover.direction = "W";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "W":
      marsrover.direction = "N";
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
  }
}
function moveForward(rover){
  console.log("moveForward was called")
  switch(marsrover.direction) {
    case "N":
      marsrover.y -=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "E":
      marsrover.x +=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "S":
      marsrover.y +=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "W":
      marsrover.x -=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
  }
}
function moveBackward(rover){
  console.log("moveBackward was called")
  switch(marsrover.direction) {
    case "N":
      marsrover.y +=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "E":
      marsrover.x -=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "S":
      marsrover.y -=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
    case "W":
      marsrover.x +=1;
      marsrover.travelLog.push(marsrover.x, marsrover.y);
      console.log(marsrover.direction);
      console.log(marsrover.x);
      console.log(marsrover.y);
      break;
  }
}
function commands (request) {
  console.log(marsrover.direction);
  for(var i= 0; i < request.lenght; i++) {
    var letter = resquest[i];
    console.log(letter);
    switch (letter) {
      case "r":
        turnRight();
        break;
      case "l":
        turnLeft();
        break;
      case "f":
        moveForward();
        break; 
    }
  }
  console.log(marsrover.travelLog);
}

