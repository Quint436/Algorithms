// Chapter-1: Fundamentals
// Add-Seven-to-Most
// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array

// Assume the argument sent is an array and it contains numbers
function Add7(arr){
  var result = []
  for(let i = 1; i < arr.length; i++){
    result.push(arr[i] + 7)
  }
  return result
}

var myArr = [1,2,3,4,5,6,7,8]
console.log(`The original array is ${myArr}`)
console.log(`The Add7 array is ${Add7(myArr)}`)

// Always-Hungry
// Create a function that accepts an array and prints "yummy" each time one of the values is equal to "food". If no array element is "food", then print "I'm hungry" once

// Assume the argument passed is an array
function yummy(arr){
  var hungry = 1
  arr.forEach(function(i){
    if (i === 'food'){
      hungry = 0
      console.log(`Yummy`)
    }
  })
  if (hungry){
    console.log(`I'm hungry`)
  }
}

myArr = ['I', 'food', 'to', 'food']
yummy(myArr)

// Chapter-1: Fundamentals
// Biggie-Size
// Given an array write a function that changes all positive numbers in the array to "big".

// Assume the argument passed is an array containing numbers
function makeItBig(arr){
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){ arr[i] = 'big' }
  }
}

var myArr = [1,-1,2,4,-5,-2,8,-7]
console.log(`Array before making it big - ${myArr}`)
makeItBig(myArr)
console.log(`Array after making it big - ${myArr}`)

// Celsius-to-Fahrenheit
// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius and returns the equivalent temperature in Fahrenheit degrees
// Fahrenheit = (9/5 * Celsius) + 32

function celsiusToFahrenheit(cDegrees){
  var fahrenheit = (9/5 * cDegrees) + 32
  return fahrenheit
}

var cD = 40
console.log(`${cD} degrees celsius = ${celsiusToFahrenheit(cD)} degrees fahrenheit`)

module.exports = celsiusToFahrenheit

// Count-Positives
// Given array of numbers create a function to replace the last value with the number of positive values. e.g., countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it

// Assume argument sent is an array, is non-zero and consists of numbers
function countPositives(arr){
  var count = 0
  for(let i = 0; i < arr.length; i++){
    count += ((arr[i] > 0) ? 1 : 0)
  }
  arr[arr.length - 1] = count
}

var myArr = [-1,1,1,1]
console.log(`The array is ${myArr}`)
countPositives(myArr)
console.log(`The changed array is ${myArr}`)

// You-say-its-your-Birthday:
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day..."

var myBDate = [3, 6]

function bd(num1, num2){
    if ((myBDate.indexOf(num1) > -1) && (myBDate.indexOf(num2) > -1)){
        console.log("How did you know?")
    } else {
        console.log("Just another day...")
    }
}

bd(1, 2)
bd(3, 6)
bd(6, 3)
bd(5 ,4)

// What-really-Happened
// (refer to Poor Kenny for background)
// Kyle notes that the chance of one disaster is totally unrelated to the chance of another. Change whatHappensToday() to whatReallyHappensToday(). In this new function test for each disaster independantly instead of assuming exactly one disaster will happen. In other words, in this new function, all five might occur today or none. Maybe kenny will survive!!

// Assume the probabilities of disasters from the Poor-Kenny question
// 10% chance of volcano, 15% chance of tsunami, 20% chance of earthquake, 25% chance of blizzard and 30% chance of meteor strike
function whatReallyHappensToday(){
  var rVol = Math.floor(Math.random() * 20),
      rTsu = Math.floor(Math.random() * 20),
      rEqu = Math.floor(Math.random() * 20),
      rBli = Math.floor(Math.random() * 20),
      rMet = Math.floor(Math.random() * 20),
      none = 1

  if (rVol >= 0 && rVol <= 1){ console.log(`Volcano`); none = 0 }
  if (rTsu >= 0 && rTsu <= 2){ console.log(`Tsunami`); none = 0 }
  if (rEqu >= 0 && rEqu <= 3){ console.log(`Earthquake`); none = 0 }
  if (rBli >= 0 && rBli <= 4){ console.log(`Blizzard`); none = 0 }
  if (rMet >= 0 && rMet <= 5){ console.log(`Meteor Strike`); none = 0 }
  if (none){ console.log(`Nothing Happens Today`) }
}

whatReallyHappensToday()


// Scale-the-Array
// Given an array "arr" and number "num" multiply all values in "arr" by "num" and return the changed array "arr"

// Assume the argument passed is an array and consists of numbers
function scale(arr, num){
  for(let i = 0; i < arr.length; i++){
    arr[i] *= num
  }
}

var myArr = [1,2,3,4,5,6],
    myNum = 3
console.log(`The original array is ${myArr}`)
scale(myArr, myNum)
console.log(`The changed array is ${myArr}`)


// Reverse-Array
// Given array write a function that reverses values in-place. e.g., reverse([3,1,6,4,2]) returns same array containing [2,4,6,1,3]

// Assume the argument passed is a non-empty array
function reverse(arr){
  var len = arr.length,
      numberOfSwitches = Math.floor(len / 2),
      idx = 0,
      temp

  for(let i = 1; i <= numberOfSwitches; i++){
    temp = arr[idx]
    arr[idx] = arr[len - (idx + 1)]
    arr[len - (idx + 1)] = temp
    idx++
  }
}

var myArr = [1,2,3]
console.log(`The original array is ${myArr}`)
reverse(myArr)
console.log(`The reversed array is ${myArr}`)


// Printing-Integers-with-While:
// Print integers from 2000 to 5280 using a WHILE

var x = 2000
while (x <= 5280){
    console.log(`Integer is ${x}`)
    x++
}

// Print-and-Return
// Your function will receive an array with two numbers. Print the first value and return the second

// Assuming that the parms passed to the function are valid. Not doing validations
function pNr(arr){
  console.log(`The first element in the array printed inside the function is ${arr[0]}`)
  return arr[1]
}

var myArr = [2,1]
console.log(`The second element in the array returned from the function is ${pNr(myArr)}`)

// Print and Count:
// Print all integer multiples of 5, from 512 to 4096. Afterward, log how many there were

var start = 515 //515 is the first multiple of 5 greater than 512
var end = 4095  //4095 is the last multiple of 5 less than 4096
var count = 0

for(let i = start; i <= end; i+=5){
    console.log(`The multiple of 5 is ${i}`)
    count++
}

console.log(`The number of multiples of 5 between 512 and 4096 is ${count}`)

// Print-One-Return-Another
// Build a function that takes array of numbers. The function should print second to last value in the array and return first odd value in array

// Assume the argument passed is an array and it consists of numbers
// Assume the array has 2 or more elements
function pora(arr){
  console.log(`The second to last element is ${arr[arr.length - 2]}`)

  for(let i = 0; i < arr.length; i++){
    if (arr[i] % 2) { return arr[i] }
  }

  return "No odd numbers in the array"
}

var myArr = [2,4,6,8,0]
console.log(`The first odd number is "${pora(myArr)}"`);

// Print-Low-Return-High
// Create a function that takes array of numbers. The function should print the lowest value in the array and return the highest value in the array

// Assume the argument passed is an array and it contains numbers
function plrh(arr){
  var low = arr[0],
      high = arr[0]

  for(let i = 1; i < arr.length; i++){
    low = ((low > arr[i]) ? arr[i] : low)
    high = ((high < arr[i]) ? arr[i] : high)
  }
  console.log(`The lowest element in ${arr} is ${low}`)
  return high
}

var myArr = [5,2,7,3,5,6,3,3,2,1]
console.log(`The highest element in ${myArr} is ${plrh(myArr)}`);


//Invert Hash. Build invertHash(assocArr) to convert hash keys to values and values to keys. //

function invert_hash(arr_obj){
    var object2 = {}
    var arr_keys = Object.keys(arr_obj)
    for(var i = 0; i < arr_keys.length; i++){
        object2[arr_obj[arr_keys[i]]] = arr_keys[i]
    }
    return resonse_obj
}
var arr_obj = {"name": "Zaphod", "charm": "high", "morals": "dicey"}
console.log(arr_obj)

function invertHash(assocArr){
  var invertedObj = {};
  var keyArr=[];
  var valArr=[];

  for(key in assocArr){
    keyArr.push(key);
    valArr.push(assocArr[key]);
  }

  for(var j = 0;j < keyArr.length;j++){
    invertedObj[valArr[j]]=keyArr[j];
  }
  return invertedObj
}

// console.log(zipArrays([1,2,3],["a","b","c"]))

// var invertMe = {0:"A", 1:"B", 2:"C"};
// invertHashInPlace(invertMe);
// console.log(invertMe);

// console.log(invertHash({0:"A", 1:"B", 2:"C"}));
