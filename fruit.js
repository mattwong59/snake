class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    getRandomLocation() {
        this.x = Math.floor(Math.random() * rows - 1) * scale;
        this.y = Math.floor(Math.random() * cols - 1) * scale;
    }

    draw() {
        ctx.fillStyle = '#f45f42';
        ctx.fillRect(this.x,this.y,scale, scale);
    }
    
}

