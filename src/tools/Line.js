import Tool from "./Tools";

export default class Line extends Tool {
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
        this.currentX = e.pageX-e.target.offsetLeft
        this.currentY = e.pageY-e.target.offsetTop

        this.ctx.beginPath();
        this.ctx.moveTo(this.currentX, this.currentY )
        this.saved = this.canvas.toDataURL();
    }
    mouseUnClicked(e) {
        this.mouseClick = false;
    }
    mouseMove(e) {
        if (this.mouseClick) {
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
        }
    }
    draw(x, y) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();

            this.ctx.moveTo(this.currentX, this.currentY )
            this.ctx.lineTo(x, y)
            this.ctx.stroke()
        }
    }
}