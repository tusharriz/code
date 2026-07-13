let grandFather = {
    s1: ["c1", "c2", "c3"],
    s2: ["c1", "c2"],
    s3: ["d1"]
}

console.log(grandFather["s1"][0]);

// or

{
    let grandFather = {
        s1: { c1: "Bharma", c2: "Vishnu", c3: "Mahesh" },
        s2: { c1: "Ram", c2: "Shayam" },
        s3: { d1: "Mandakini" }
    }
    console.log(grandFather);
    console.log(grandFather["s3"]["d1"]);
}

