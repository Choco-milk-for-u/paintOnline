import Tool from "./Tools";

export default class Circle extends Tool {
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
        this.startX = e.pageX - e.target.offsetLeft;
        this.startY = e.pageY - e.target.offsetTop;
        this.saved = this.canvas.toDataURL();

        this.ctx.beginPath();
    }
    mouseUnClicked(e) {
        this.mouseClick = false;
    }
    mouseMove(e) {
        if (this.mouseClick) {
            let currentX = e.pageX - e.target.offsetLeft;
            let currentY = e.pageY - e.target.offsetTop;
            let width = currentX - this.startX;
            let hieght = currentY - this.startY;
            let r = Math.sqrt(width ** 2 + hieght ** 2);

            this.draw(this.startX, this.startY, r);
        }
    }
    draw(x, y, r) {
        const img = new Image();
        img.src = this.saved;
        img.onload = () => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            this.ctx.beginPath();
            this.ctx.arc(x, y, r, 0, 2 * Math.PI);
            this.ctx.stroke();
            this.ctx.fill();
        }


    }
}