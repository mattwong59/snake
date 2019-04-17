class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
    }
    
    draw() {
        ctx.fillStyle = '#f1f1f1';
        ctx.fillRect(this.x,this.y,scale, scale);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
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
}
