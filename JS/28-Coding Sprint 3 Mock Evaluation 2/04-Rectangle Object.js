// Rectangle Object

// - Create a rectangle object with length and width properties

// - Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle = {
    length : 5,
    width : 9,
    area : function(){
        return this.length * this.width;
    },

    perimeter : function(){
        return (this.length + this.width) * 2;
    }
};

console.log(rectangle["area"]()); // 45
console.log(rectangle["perimeter"]()); // 28