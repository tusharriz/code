// endsWith : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

let data = {

    str: 'The quick brown fox jumps over the lazy dog.',

    endsWith: function (word,index) {
        let string = this.str;
        console.log(string.endsWith(word, index));
    },
}

data["endsWith"]("."); // true
data["endsWith"]("jumps", 25); // true
