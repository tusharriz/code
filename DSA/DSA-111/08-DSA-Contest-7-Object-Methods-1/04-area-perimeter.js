// find area and perimeter

let land = {
    length : 80,
    width : 50,

    area : function(){
        console.log(this.length * this.width);
    },

    perimeter : function(){
        console.log(2 * (this.length + this.width));
    } 
}

land["area"]();
land["perimeter"]();