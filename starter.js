////////////////////////
////// CALCULATOR //////
////////////////////////

function add(num1, num2){  //add two numbers together
  return num1 + num2
}

const subtract = function(num1, num2){  //subtract two numbers from each other
  return num1 - num2
}

const multiply = (num1, num2) =>{ //multiply two numbers together
  return num1 * num2
}

const divide = (num1, num2) => num1 / num2 //divide two numbers

const calculator = (num1, num2, cback) => { //callback function to one
                                        //of the math functions prior
  if(+num1 && +num2){ //if arguments passed can be made into numbers
    num1 = +num1  //convert strings into numbers
    num2 = +num2
    return cback(num1, num2) //invoke the callback function with numbers
  } else {
    return 'Invalid data' //If a string is submitted and cannot become number
  }                       //return invalid
}

console.log(calculator(4, 2, add))
console.log(calculator(7, 9, subtract))
console.log(calculator(11, 3, multiply))
console.log(calculator(64, 8, divide))
console.log(calculator(111, 74, subtract))

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [  //array of objects (different products)
    {
      name: 'leash',
      colors: ['red', 'blue', 'green'],
      category: 1,
      inventory: 30,
      basePrice: 13.99,
      displayPrice: 13.99
    },
    {
      name: 'chew toy',
      colors: ['brown'],
      category: 2,
      inventory: 120,
      basePrice: 6.00,
      displayPrice: 6.00
    },
    {
      name: 'rope',
      colors: ['blue & green', 'red & yellow'],
      category: 2,
      inventory: 75,
      basePrice: 4.99,
      displayPrice: 4.99
    }
]

const catProducts = [ //array of objects (different products)
  {
    name: 'mouse toy',
    colors: ['pink', 'grey', 'black'],
    category: 2,
    inventory: 125,
    basePrice: 2.50,
    displayPrice: 2.50
  },
  {
    name: 'cat sweater',
    colors: ['black'],
    category: 1,
    inventory: 15,
    basePrice: 10.00,
    displayPrice: 10.00
  },
  {
    name: 'straching post',
    colors: ['tan'],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99
  }
]

// CODE HERE

/*if we want to apply a percent discount on products, we pass in the array
name and the discount in floating numbers. The function will then access
the product displayPrice and apply the discount, by multiplying
basePrice by (1 - discount)
*/
const percentDiscount = (product, discount) =>{
  product.displayPrice = product.basePrice * (1 - discount)
}

/*if we want to apply a flat rate discount ($ amount), we pass in the array
name and the discount desired. The function will then access the product
displayPrice and update the value to the basePrice - discount
*/
const flatRateDiscount = (product, discount) =>{
  product.displayPrice = product.basePrice - discount
}
/*this function will invoke a callback. Pass in the array (product name),
which discount to apply flat or percent, then the discount amount
*/
const discountedPrice = (arr, cback, discount) =>{
  for(let i = 0; i < arr.length; i++){ //this will apply the discount to
                                    //every item in the product line
    cback(arr[i], discount)
  }
}

/*This function allows us to discount based on category. It will take the
array (product name), which category to discount, (rather than discount
every item). The Callback function we want (flat or percent) with the
discount amount
*/
const categoryDiscount = (arr, category, cback, discount) =>{
  for(let i = 0; i < arr.length; i++){
    if(arr[i].category === category){ //this will discount every item within
                                    //the indicated category
      cback(arr[i], discount)
    }
  }
}

/* This function allows us to discount items that are almost out of stock.
Take the array (product name), the amount is whatever limit we set for the
discount to take effect (ex: 50 inventory remaining), which callback function
we want to invoke for the discount and it's discount amount
*/
const inventoryDiscount = (arr, amount, cback, discount) =>{
  for(let i = 0; i < arr.length; i++){
    if(arr[i].inventory < amount){ //this will only apply to the products passed
                                  // to it with
                                  //inventory lower than a certain amount
      cback(arr[i], discount)
    }
  }
}

inventoryDiscount(dogProducts, 50, percentDiscount, .75)

// categoryDiscount(catProducts, 2, flatRateDiscount, 2)

// discountedPrice(dogProducts, flatRateDiscount, 3)
// discountedPrice(catProducts, percentDiscount, .25)

console.log(dogProducts)
// console.log(catProducts)

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE


//this function allows us to make a sandwich, by inserting ingredients
//on certain types of bread
const makeSandwich = bread =>{ //bread passed to the higher order function
  return function(ingredients){ //returns anonymous function which accepts
                            //ingredients parameters (singular or array) then
                              // compiles
                              //the sequence of ingredients
    let order = `You ordered a ` //we start with nothing on the sandwich

    for(let i = 0; i < ingredients.length; i++){
      if(i === ingredients.length - 1 && i !== 0){ //this only executes if there
                                                //is more than one ingredient
                                                //and will be last to be performed
        order += `and ${ingredients[i]} sandwich on ${bread} bread.`
      } else if(ingredients.length === 1){ //this line runs with only one ingredient passed
        order += `${ingredients[i]} sandwich on ${bread} bread.`
      } else { //if there is more ingredients to be added after this, this line will run
        order += `${ingredients[i]}, `
      }
    }
    return order //once the sandwich is completed the order variable has been updated
                 // and will have a finished sandwich to return
  }
}

const wholeWheat = makeSandwich('whole wheat') //passes whole wheat to makeSandwich function

//this passes the ingredients array into the anonymous function part of makeSandwich
console.log(wholeWheat(['avocado', 'bacon', 'ham', 'lettuce', 'tomato']))


const makeGyro = makeSandwich('pita')
//this takes place of individually inputting ingredients, by using an array assigned to variable
let gyroIngredients = ['lamb', 'tzatziki', 'tomatoes', 'lettuce']

console.log(makeGyro(gyroIngredients))
