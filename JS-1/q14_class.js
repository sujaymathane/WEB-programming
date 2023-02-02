class Rectangle{
    constructor(l,b) {
    this.l=l;
    this.b=b;
    }

    rectangleArea(){
        return this.l*this.b;
    }

    rectanglePerimeter(){
        return 2*this.l*this.b;
    }   

}

class Circle{
    constructor(r){
        this.r=r;
    }
    circleArea(){
        return 3.14*this.r*this.r;
    }
     circlePerimeter(){
        return Math.round(3.14*2*this.r);
     }
}