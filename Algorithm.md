const a = [1, 3, 5, 7, 9]
const b = []

function calculate(a) {
    for (var i = 0; i < a.length; i++) {
        let result = 0
        for (var j = 0; j < a.length; j++) {
            if (j == i) {
                continue;
            }
            result += a[j]
        }
        b.push(result)
    }
}
calculate(a)

let max = b[0]
let min = b[0]
for (var i = 1; i < b.length; i++) {
    if (b[i] > b[0]) {
        max = b[i]
    }
    if (b[i] < b[0]) {
        min = b[i]
    }
}
console.log("max", max)
console.log("min", min)
