import Tool from "./Tools";

export default class Brush extends Tool {
    constructor(canvas) {
        super(canvas);
        this.listen();
    }
    listen() {
        this.canvas.onmousemove = this.mouseMove.bind(this);
        this.canvas.onmouseup = this.mouseUnClicked.bind(this);
        this.canvas.onmousedown = this.mouseClicked.bind(this);
    }
    mouseClicked(e) {
        this.mouseClick = true;
        this.ctx.beginPath();
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
    mouseUnClicked(e) {
        this.mouseClick = false;
    }
    mouseMove(e) {
        if (this.mouseClick) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }
    draw(x,y) {
        this.ctx.lineTo(x,y);
        this.ctx.stroke();
    }
}