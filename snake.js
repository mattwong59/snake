class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 1;
        this.tail = [];
    }
    
    draw() {
        ctx.fillStyle = '#f1f1f1';

        for(let i = 0; i < this.tail.length; i++) {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }

        ctx.fillRect(this.x, this.y, scale, scale);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        for(let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }

        this.tail[this.total - 1] = { x: this.x, y: this.y };
    }

    changeDirection(direction) {
        switch(direction) {
            case 'ArrowUp':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 'ArrowDown':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'ArrowRight':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
            case 'ArrowLeft':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    eat(fruit) {
        if(snake.x === fruit.x && snake.y === fruit.y) {
            console.log('x', this.x);
            console.log('y', this.y);
            this.total++;
            // this.x += this.xSpeed * 2;
            // this.y += this.ySpeed * 2;
            
            return true;
        }
        return false;
    }
}
