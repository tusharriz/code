// calculate the area of a triangle
// formula = 0.5*b*h (right angled traingle)

let traingle = {
    height: 10,
    base: 20,
    area : function (){
        return (0.5*this.height*this.base);
    }
};

let result = traingle["area"]();
console.log(result);    


