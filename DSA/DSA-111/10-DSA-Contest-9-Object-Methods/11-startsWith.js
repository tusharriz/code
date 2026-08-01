// startsWith : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

let data = {

    str: 'The quick brown fox jumps over the lazy dog.',

    startsWith: function (word) {
        let string = this.str;
        console.log(string.startsWith(word));
    },
}

data["startsWith"]("The"); // true;

