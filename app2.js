`use strict`

const hitung = () => {
    return new Promise((resolve, reject) => {
        for (let i = 1; i <= 3; i++) {
            setTimeout(() => {
            console.log(i)
            }, 1000);
        }
    })
}
console.log("1,2,3,Done");
