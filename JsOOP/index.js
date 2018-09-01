// oop programing
const PI=3.14;
// object factory 
function creareCircle (radius){
    return {
        radius,
        draw:function () {
            console.log('circle created!');
        },
        size:function () {
          console.log('size:',radius*radius*PI)  
        }
    }
}

// circle=creareCircle(4);
// circle.size();

//constructors
function Circle(radius) {
    this.radius=radius;
    this.draw=function () {
        console.log('circle drawed!');
    };
    this.size=function () {
        console.log('size: ',this.radius*this.radius*PI);
    };
}

// const circle = new Circle(3.5);
// circle.size();
// circle.draw();
// console.log(circle.radius);
c=creareCircle(3);

let name='John';

const foo={};



