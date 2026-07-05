// peint hollow opposite C & take cake of the spaces

// output:

// * * * * *
//         *
//         *
//         *
// * * * * *

let N = 5;
for (let i = 1; i <= N; i++) {
    let bag = "";
    if (i == 1 || i == N) {
        for (let j = 1; j <= N; j++) {
            if (j == N) {
                bag = bag + "*";
            } else {
                bag = bag + "*" + " ";
            }
        }
    }
    else {
        for (let j = 1; j <= N; j++) {
            if (j == N) {
                bag = bag + "*";
            }
            else {
                bag = bag + "  ";
            }
        }
    }
    console.log(bag);
}

// * * * * *
//         *
//         *
//         *
// * * * * *