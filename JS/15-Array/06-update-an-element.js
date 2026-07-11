//update-an-element

let vegNames = ["carrot","tomato","cucumber","potato"];
console.log(vegNames);

// [ 'carrot', 'tomato', 'cucumber', 'potato' ]

vegNames[2] = "onion";
console.log(vegNames);

// [ 'carrot', 'tomato', 'onion', 'potato' ]

//potato replace with brinjal

vegNames[3] = "Brinjal";
console.log(vegNames);

// [ 'carrot', 'tomato', 'onion', 'Brinjal' ]

//or, we can also do this

vegNames[vegNames.length-1] = "Brinjal";
console.log(vegNames);

// [ 'carrot', 'tomato', 'onion', 'Brinjal' ]

