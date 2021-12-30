import "./style.css"

var canvas = document.querySelector('#tutorial');
var ctx = canvas.getContext('2d');
canvas.width = document.body.clientWidth; //document.width is obsolete
canvas.height = document.body.clientHeight; //document.height is obsolete
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;

let particles_src = Array()
for(let i = 0;i<8;i++){
    let src = `./particles/${i}.png`
    particles_src.push(src)
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let position = {
    x: 0,
    y: 0,
}

let position2 = {
    x:  1200,
    y: 500,
}


let randomAxe = 0
window.setInterval(()=> {
    randomAxe = Math.round(Math.random())
},500)

function move() {
    let axe = Object.keys(position)[randomAxe]
    position[axe] = position[axe] + 0.7
    let img = new Image();
    img.src = particles_src[0];
    img.onload = function() {
        ctx.clearRect(position.x, position.y, img.width, img.height);
        ctx.drawImage(img, position.x, position.y, img.width, img.height)
    };
    window.requestAnimationFrame(move);
}


function move2() {
    let axe = Object.keys(position2)[randomAxe]
    position2[axe] = position2[axe] - 0.7
    let img = new Image();
    img.src = particles_src[1];
    img.onload = function() {
        ctx.clearRect(position2.x, position2.y, img.width, img.height);
        ctx.drawImage(img, position2.x, position2.y, img.width, img.height)
    };
    window.requestAnimationFrame(move2);
}


move()

move2()