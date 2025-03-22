"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escape = escape;
function escape(carpark) {
    let moves = [];
    const parkFloors = carpark.length - 1;
    let currentFloor = 0;
    for (let index = 0; index < carpark.length; index++) {
        if (carpark[index].indexOf(2) !== -1) {
            currentFloor = index;
            break;
        }
    }
    let currentPosition = carpark[currentFloor].indexOf(2);
    let stairsPosition = carpark[currentFloor].indexOf(1);
    if (currentPosition == -1) {
        return [];
    }
    while (currentFloor <= parkFloors) {
        switch (currentFloor) {
            case parkFloors:
                if (currentPosition == carpark[currentFloor].length - 1) {
                    currentFloor++;
                }
                else {
                    let exitPosition = carpark[currentFloor].length - 1;
                    moves.push("R" + (exitPosition - currentPosition).toString());
                    currentFloor++;
                }
                break;
            default:
                stairsPosition = carpark[currentFloor].indexOf(1);
                if (stairsPosition == -1) {
                    return [];
                }
                if (stairsPosition < currentPosition) {
                    moves.push("L" + (currentPosition - stairsPosition).toString());
                    currentPosition = stairsPosition;
                    moves.push("D1");
                    currentFloor++;
                }
                else if (currentPosition < stairsPosition) {
                    moves.push("R" + (stairsPosition - currentPosition).toString());
                    currentPosition = stairsPosition;
                    moves.push("D1");
                    currentFloor++;
                }
                else {
                    if (moves.length == 0) {
                        moves.push("D1");
                        currentFloor++;
                    }
                    else {
                        let numberDownMove = Number(moves[moves.length - 1].slice(moves[moves.length - 1].length - 1));
                        numberDownMove++;
                        moves[moves.length - 1] = "D" + numberDownMove.toString();
                        currentFloor++;
                    }
                }
                break;
        }
    }
    return moves;
}
console.log(escape([[2, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]]));
