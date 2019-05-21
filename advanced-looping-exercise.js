const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Function that takes an array as a parameter and returns the 
//biggest number.

const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4



function biggestNumberInArray(arr) {
  console.log(Math.max.apply(0, array));
}


const array2 = ['a', 3, 4, 2]
function findNumber(arr) {
  for (let i=0; i < array2.length; i++) {
    if ( array2[i] < array2[i + 1] ) {
      
      array2[i] = 0;
      
    }
    else if ( array2[i] > array2[i+1]) {
      
      array2[i+1] = 0;
      
    }
    else if (array2[i] === "a") {

      array2[i] = 0;
    }

    else if ( array2[i] < array2[i-1]) {
      
      array2[i] = 0;
      
    }

    else {
      
    }
  }

  function getSum(total, num) {
  return total + num;
  }

  function sorting(item) {
    console.log(array2.reduce(getSum));
  }

  sorting();
}



findNumber(array2);

