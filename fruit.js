class Fruit {
    constructor() {
        this.x;
        this.y;
    }

    getRandomLocation() {
        this.x = Math.floor(Math.random() * rows ) * scale;
        this.y = Math.floor(Math.random() * cols ) * scale;
    }

    getRandomFruit() {
        for(let i=0; i < fruitColours.length -1; i++) {
            ctx.fillStyle = fruitColours[i];
        }
    }

    draw() {    
        ctx.fillStyle = '#f45f42';
        ctx.fillRect(this.x,this.y,scale, scale);
    }
    
}

