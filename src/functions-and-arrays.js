// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
};

console.log (maxOfTwoNumbers(3, 4))


// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (arr) {
	return words.sort((a, b) => b.length - a.length)[0];
 }
console.log(findLongestWord(words))



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
let arraySum = 0
function sumNumbers() {
  for (let i = 0 ; i < numbers.length ; i++) {
    arraySum += numbers[i]
  }
}
sumNumbers(numbers);
console.log(arraySum)


// Iteration #3.1 Bonus:
function sum(array) {
  let sumCounter = 0;
  for (let i = 0 ; i < numbers.length ; i++) {
    sumCounter+= array[i]  
 }
  return sumCounter;
}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
  let parSum = 0
    for (let i = 0 ; i < numbersAvg.length ; i++) {
    parSum += numbersAvg[i]
  };
  parSum /= numbersAvg.length
 console.log(parSum)
};
    averageNumbers(numbersAvg);


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() {
  let wordsAvg = 0
  for (let i = 0 ; i < wordsArr.length ; i++){
    wordsAvg += wordsArr[i].length
  }
  wordsAvg /= wordsArr.length
  console.log (wordsAvg)
};

averageWordLength(wordsArr);



// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];


let filteredArr  = wordsUnique.filter((element, index) => {
    return wordsUnique.indexOf(element) === index;
});

console.log(filteredArr);


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  return wordsFind.includes(word) 
}
console.log(doesWordExist(wordsFind, 'machine'))



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  let countWords = 0
  for (let i = 0 ; i < wordsCount.length ; i++){
  if (wordsCount[i].includes(word)){
    countWords+= 1
   };
  };
  return countWords;
} 
console.log(howManyTimes(wordsCount, 'matter'))



// Iteration #8: Bonus
const arr = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];

function greatestProduct() {}

//IMPORTANTE...Lo intenté pero esto supera mis niveles de pensamiento...encontré en Google la respuesta que ya incñuye la diagonal y comprobé que efectivamente hubiera necesitado 2 bootcamps para hacerlo :)

let n = 4;
 
    // function to find max product
    function FindMaxProduct(arr,n)
    {
        let max = 0, result;
 
        // iterate the rows.
        for (let i = 0; i < n; i++)
        {
            // iterate the columns.
            for (let j = 0; j < n; j++)
            {
                // check the maximum product
                // in horizontal row.
                if ((j - 3) >= 0)
                {
                    result = arr[i][j] * arr[i][j - 1]
                            * arr[i][j - 2]
                            * arr[i][j - 3];
                    if (max < result)
                        max = result;
                }
 
                // check the maximum product
                // in vertical row.
                if ((i - 3) >= 0)
                {
                    result = arr[i][j] * arr[i - 1][j]
                            * arr[i - 2][j]
                            * arr[i - 3][j];
 
                    if (max < result)
                        max = result;
                }
 
                // check the maximum product in
                // diagonal (going through down - right)
                if ((i - 3) >= 0 && (j - 3) >= 0)
                {
                    result = arr[i][j] * arr[i - 1][j - 1]
                            * arr[i - 2][j - 2]
                            * arr[i - 3][j - 3];
 
                    if (max < result)
                        max = result;
                }
 
                // check the maximum product in
                // diagonal (going through up - right)
                if ((i - 3) >= 0 && (j - 1) <= 0)
                {
                result = arr[i][j] * arr[i - 1][j + 1]
                            * arr[i - 2][j + 2]
                            * arr[i - 3][j + 3];
 
                    if (max < result)
                        max = result;
                }
            }
        }
 
        return max;
    }

console.log(FindMaxProduct(arr, 4))





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}