function filterArray(numbers, value) {
   // Change code below this line
let newArray = [];
  for (i = 0; i < numbers.length; i += 1) {
   if (numbers[i] > value) {
    newArray.push(numbers[i]);
   }
  }
  
    console.log(newArray);
    return newArray
    

  // Change code above this line
}