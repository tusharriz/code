// Last Index Of

// Given information in a data i.e contain the keys as arr and lastIndexOf

// Implement the lastIndexOf : method returns the last index at which a given 
// element can be found in the array, or -1 if it is not present.

// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf


let data = {
    arr : ['Dodo', 'Tiger', 'Penguin', 'Dodo'],
    lastIndexOf : function(element){

        let array = this.arr;

        for(let i=array.length-1; i>=0; i--){
            if(element === array[i]){
                return i;
            }
        }
        return -1;

    }
}

console.log(data["lastIndexOf"]("Dodo"));
// console.log(data["lastIndexOf"]("dodo"));


{
let data = {
    arr : ['Dodo', 'Tiger', 'Penguin', 'Dodo'],
    lastIndexOf : function (str){

        let array = this.arr; //['Dodo', 'Tiger', 'Penguin', 'Dodo']
        for(let i=array.length-1; i>=0; i--){
            if(str == array[i]){
                return i;
                break;
            }
        }
        return -1;


    }
}
console.log(data["lastIndexOf"]("Dodo")); // 3
}