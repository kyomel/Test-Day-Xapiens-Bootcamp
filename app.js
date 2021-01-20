// Test no 1
let first = ['Behind', 'every', 'great', 'man']
let second = ['is', 'a', 'woman']
let third = ['rolling', 'her', 'eyes']

let result = first.join(' ') + ' ' + second.join(' ') + ' ' + third.join(' ');
console.log(result);

// // Test no 2
function checkNumber(number){
    if(number%2) {
        console.log("Imperio")
    } else {
        console.log("Crucio")
    }
}
checkNumber(1);
// Test no 4
function panjangKata(k) {
    let panjang = 0;
    while (k[panjang] !== undefined)
        panjang++;
    return panjang;
}
console.log(panjangKata("ilmiah"));
console.log(panjangKata("lari pagi"));

// Test no 5
Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+2; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

const list_fruit_andi = ["grape","apple","orange","guava"];
const list_fruit_andin = ["watermelon","apple","orange","strawberry"];
const arrayResult = list_fruit_andi.concat(list_fruit_andin).unique();
console.log(arrayResult);

// Test no 6
const prices = [15, 10, 12, 20, 30];
const menus = ["chicken strip", "beef burger", "steakhouse", "mushroom swiss", "whopper"];

// moving value on array
let valueIndex1 = menus[0];
menus.splice(3, 0, valueIndex1);
menus.shift();

// sorting
const pricesSort = prices.sort();

// merge array to object

let result1 =  pricesSort.reduce(function(result1, field, index) {
  result1[menus[index]] = field;
  return result1;
}, {})

console.log(result1);

// Test no 8
function bubble_sort(numbers)
{
    let swapp;
    let n = numbers.length-1;
    let x=numbers;
    do {
        swapp = false;
        for (let i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

(bubble_sort([12,3,5,4,8,9]));

// Test no 9
const secret_text = "23dn3ir30fd2eddd";

function masking() {
  if (secret_text.length <=3) {
    return secret_text
  } else {
    let masking = secret_text.substring(0, secret_text.length - 3).replace(/[a-z\d]/gi,"*") + 
    secret_text.substring(secret_text.length - 3, secret_text.length)
    return masking;
  }
}

console.log(masking(secret_text));

// Test no 10
const findMissingLetter = (array) => {
    for (let i = 1; i < array.length; i++) {
      const prev = array[i - 1].charCodeAt();
      const current = array[i].charCodeAt();
      if (current - prev !== 1) { 
        return String.fromCharCode(prev + 1);
      }
    }  
    return null; 
  }

  console.log(findMissingLetter(["c","d","e","g","h"]));
  console.log(findMissingLetter(["X","Z"]));

//   Test no 11
let numbers = [9,4,2,4,1,5,3,0],
    indices = [];

numbers
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => numbers[indices[i]] = v);

console.log(numbers);

// Test no 12 
function generatePyramid(n) {
    let getPiramid = n.split('')
    for(let i=0; i < getPiramid.length; i++) {
        console.log(String(i+1).padEnd((getPiramid.length - i), '0'))
    }
}

generatePyramid('1234567');
