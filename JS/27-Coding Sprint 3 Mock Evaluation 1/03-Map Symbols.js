// Map Symbols

function mapSymbols(N) {
  // Write code here
  let symbol = "!@#$%^&*";
  let obj = {};

  for (let i = 0; i <= symbol.length - 1; i++) {
    if (obj[symbol[i]] === undefined) {
      obj[symbol[i]] = N;
      N = N + 2;
    }
  }
  // console.log(obj);

  for (let key in obj) {
    console.log(key + "-" + obj[key]);
  }
}
mapSymbols(20);

// !-20
// @-22
// #-24
// $-26
// %-28
// ^-30
// &-32
// *-34
