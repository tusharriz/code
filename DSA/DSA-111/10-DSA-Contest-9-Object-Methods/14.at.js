// at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at

let data = {

    str: 'The quick brown fox jumps over the lazy dog.',

    at: function (index) {
        let string = this.str;
        console.log(string.at(index));
    }
}

data["at"](6); // i
data["at"](0); // T
data["at"](-6); // y