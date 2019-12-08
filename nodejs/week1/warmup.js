class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return 2*this.radius;
    }
    getCircumference(){
        return 2*Math.PI*this.radius;
    }
    getArea(){
        return Math.PI*this.radius*this.radius;
    }
};

let circle1 = new Circle(5);
let circle2 = new Circle(6);

console.log(circle1.getArea());
console.log(circle1.getCircumference());
console.log(circle1.getDiameter());
console.log(circle2.getArea());
console.log(circle2.getCircumference());
console.log(circle2.getDiameter());

