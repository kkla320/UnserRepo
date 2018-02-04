class Ball {
    constructor(x, y, radius, canvas) {
        this.x = x
        this.y = y
        this.radius = radius
        this.canvas = canvas
    }

    render() {
        this.canvas.beginPath();
        this.canvas.arc(this.x,this.y,this.radius,0,2*Math.PI);
        this.canvas.stroke();
    }
}