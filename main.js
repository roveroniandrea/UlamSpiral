let testToNumber = 10000;
let scale = 1;
let distanceBetweenPoints;
let pointRadius;

let spiralDirection;
let lineLenght;
let numbersOnLine;
let howManyLines;

let canvasWidth = 500;
let canvasHeight = 500;
let drawPointAt = {
    x: canvasWidth / 2,
    y: canvasHeight / 2
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    background(204);
    noLoop();
}

function drawSpiral() {
    //reset variables
    spiralDirection = 0;
    lineLenght = 2;
    numbersOnLine = 0;
    howManyLines = 0;
    drawPointAt = {
        x: canvasWidth / 2,
        y: canvasHeight / 2
    }

    //get scale inserted by user
    scale = parseFloat(document.querySelector('#input_scale').value);

    distanceBetweenPoints = 5 * scale;
    pointRadius = distanceBetweenPoints / 2;

    background(204);
    //get max number inserted in input
    testToNumber = getTestToNumber();

    for (let n = 1; n <= testToNumber; n++) {
        //move point to dar according to spiral direction and choosen distance
        if (n != 1) {
            drawPointAt.x += distanceBetweenPoints * Math.cos(spiralDirection * Math.PI / 180);
            drawPointAt.y -= distanceBetweenPoints * Math.sin(spiralDirection * Math.PI / 180);
        }
        let pointColor = color('white');
        // if primal draw a black point
        if (testIfPrimal(n)) {
            pointColor = color('black');
        }
        //if n=1 set another color, just to enlight the center
        if (n == 1) {
            pointColor = color('red');
        }
        //set choosen color
        fill(pointColor);
        noStroke();
        //draw the point
        ellipse(drawPointAt.x, drawPointAt.y, pointRadius, pointRadius);

        //increase number of points in this line
        numbersOnLine++;
        //change spiral direction anti-clockwise if reached target number of points in this line
        if (numbersOnLine == lineLenght) {
            numbersOnLine = 0;
            spiralDirection += 90;
            //check if >=360
            if (spiralDirection >= 360) {
                spiralDirection -= 360;
            }
            //increase total number of lines drawed
            howManyLines++;
            //every two lines add 1 to lineLinenght
            if (howManyLines % 2 == 0) {
                lineLenght++;
            }
            numbersOnLine = 1;
        }
    }
}

function testIfPrimal(number) {
    //2 and 3 are directly primal numbers
    if (number == 2 || number == 3) {
        return true;
    }
    //1 is not primal
    if (number == 1) {
        return false;
    }

    //immediatly return false if multiple of 2 or 3
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }

    //first check if number is not a power of 2 (so if squareRootFLoating is an integer)
    let squareRootFloating = Math.sqrt(number);
    let squareRootInteger = Math.round(squareRootFloating);
    if (squareRootInteger - squareRootFloating == 0) {
        return false;
    }
    //every primal greater than 6 can be obtained from 6k +-1 with k <= (int)sqrt(number)
    let k = 1;
    while ((6 * k) - 1 <= number) {
        if ((6 * k) + 1 == number || (6 * k) - 1 == number) {
            if (testIfPrimalWithAllDivisors(number)) {
                return true;
            }
        }
        k++;
    }
    //if number cannot be obtained by 6k +- 1 it's not primal
    return false;
}

function getTestToNumber() {
    let num = parseInt(document.querySelector('#input_testToNumber').value);
    if (num > 1) {
        return num;
    }
    else {
        alert('Invalid number. Setted preious value of ' + testToNumber);
        return testToNumber;
    }
}

function testIfPrimalWithAllDivisors(number) {
    let testTo = Math.sqrt(number);
    for (let i = 2; i < testTo; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}