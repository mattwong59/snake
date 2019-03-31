class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    draw() {
        ctx.fillStyle = '#f1f1f1';
        ctx.fillRect(this.x,this.y,scale, scale);
    }
}
