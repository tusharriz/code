// Counting Characters

function countOccurence(N, str) {
  //write code here
  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1;
  }
  //   console.log(obj);

  let bag = "";
  for (let key in obj) {
    bag += obj[key] + " ";
  }
  console.log(bag);
}
countOccurence(5, "aaeiou");
// 2 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0

countOccurence(6, "abbcz"); 
// 1 2 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1

// OR

let str = "aaeiou";

let obj = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
  e: 0,
  f: 0,
  g: 0,
  h: 0,
  i: 0,
  j: 0,
  k: 0,
  l: 0,
  m: 0,
  n: 0,
  o: 0,
  p: 0,
  q: 0,
  r: 0,
  s: 0,
  t: 0,
  u: 0,
  v: 0,
  w: 0,
  x: 0,
  y: 0,
  z: 0,
};

for(let ele of str){
  if(obj[ele] == undefined){
    obj[ele] = 1;
  }else{
    obj[ele]++;
  }
}
// console.log(obj);
let bag = "";
for(let key in obj){
  bag += obj[key] + " ";
}
console.log(bag); // 2 0 0 0 1 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0