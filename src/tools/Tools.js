export default class Tool {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.destroy();
    }
    set fillColour(colour){
        this.ctx.fillStyle = colour;
    }
    set strokeColour(colour){
        this.ctx.strokeStyle = colour;
    }
    set lineWidth(width){
        this.ctx.lineWidth = width;
    }
    destroy(){
        this.canvas.onmousemove = null;
        this.canvas.onmouseup = null;
        this.canvas.mousedown = null;
    }
}