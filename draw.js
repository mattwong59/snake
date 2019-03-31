const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height/scale;
const cols = canvas.width/scale;

const snake = new Snake;


(function setup() {
    snake.draw();
}());

