//calculate the perimeter and area of a rectangle

let obj = {
    l : 10,
    b : 5,
    area : function(){
        return this.l * this.b;
    },
    perimeter : function(){
        return (this.l + this.b) * 2;
    }
};

let area = obj["area"]();
console.log(area);

let perimeter = obj["perimeter"]();
console.log(perimeter);




let obj2 = {
    l : 10,
    b : 5,

    area : function(){
        return this.l * this.b
    },

    perimeter : function(){
        return 2*(this.l + this.b);
    }
};

console.log(obj2["area"]());
console.log(obj2["perimeter"]());