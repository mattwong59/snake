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
            case 'w':
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case 's':
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case 'd':
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
            case 'a':
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
        }
    }
}
