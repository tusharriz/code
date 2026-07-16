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


let obj = {
    height : 15,
    base : 20,

    areaOfTriangle : function (){
        let calculate = (this.height*this.base)/2
        return calculate;
    }
}

let ans = obj["areaOfTriangle"]();
console.log(ans); // 150