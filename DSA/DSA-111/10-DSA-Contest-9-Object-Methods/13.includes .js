// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

let data = {

    str: 'The quick brown fox jumps over the lazy dog.',

    includes: function (word) {
        let string = this.str;
        console.log(string.includes(word));
    }
}

data["includes"]("brown"); // true
data["includes"]("."); // true
data["includes"](" "); // true
data["includes"]("dog."); // true
