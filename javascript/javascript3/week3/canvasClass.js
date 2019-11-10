

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x=x;
        this.y=y;
        this.r=r;
        this.startAngle=startAngle;
        this.endAngle=endAngle;
        this.fillColor=fillColor;
    }
    draw(){
        ctx.beginPath()
        ctx.arc( this.x,this.y,this.r,this.startAngle,this.endAngle)
        ctx.fillStyle=this.fillColor
        ctx.stroke();
    }

}



const c1 = new Circle(280, 30, 20, 0, 2 * Math.PI, '#964587');

c1.draw();
