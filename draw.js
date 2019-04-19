const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const scale = 10;
const rows = canvas.height/scale;
const cols = canvas.width/scale;


let fruitColours = ['red', 'blue', 'yellow', 'green']
let snake;
let fruit;

(function setup() {
    snake = new Snake;
    fruit= new Fruit;
    fruit.getRandomLocation();

    window.setInterval(() => {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        snake.update();
        snake.draw();
        fruit.draw();
        // console.log('fruit', fruit);

        if (snake.eat(fruit)) {
            fruit.getRandomLocation();
            fruit.getRandomFruit();
        }
        
        snake.checkCollision();

    }, 250);
}());

window.addEventListener('keydown',((e) => {
        snake.changeDirection(e.key);    
    }
));




