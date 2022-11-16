//Write a program that prints the following figure for given number of lines.

function printtimes(n) {
    let line = "";
    for (let i = 1; i <= n; i ++) {
        for (let j = 0; j < n-i; j++) {
            line+= " ";
        }
        for (let k = 0; k < i; k ++) {
            line += "+";
        }
        if (i != n) {
            line += "\n";
        }
    }
    console.log(line);
}

printtimes(4)