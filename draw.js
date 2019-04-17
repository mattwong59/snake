const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height/scale;
const cols = canvas.width/scale;

let snake;

(function setup() {
    snake = new Snake;

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        snake.update();
        snake.draw();
        if (snake.x > canvas.width) {
            snake.x = 0;
        }
        if (snake.x < 0) {
            snake.x = canvas.width;
        }
        if (snake.y > canvas.height) {
            snake.y = 0;
        }
        if (snake.y < 0) {
            snake.y = canvas.height;
        }
    }, 250);
}());

window.addEventListener('keydown',((e) => {
        snake.changeDirection(e.key);    
    }
));




