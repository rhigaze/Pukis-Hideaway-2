'use strict'
// canvas parameter
var myCanvas ;
var myContext ;

// create canvas 
function createCanvas() {

    var myPageCanvas = document.createElement('canvas');
    myPageCanvas.id = 'canv';
    myPageCanvas.width = 500 ;
    myPageCanvas.height = 400;
    myPageCanvas.style.display = 'block';
    myPageCanvas.style.margin = '50px auto';
    // add the canvas to the body
    document.body.appendChild(myPageCanvas);
}

function getCanvas() {
    
    myCanvas = document.querySelector('#canv');
    myContext = myCanvas.getContext('2d');
}
 createCanvas();
 getCanvas();