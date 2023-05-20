
// Assigning the value 293 to the constant variable named kelvin;
const kelvin=293;

// Assigning the value kelvin-293 to the constant variable named celsius;
const celsius=kelvin-273;

//calculating farenheit by using celsius with the below formula
var fahrenheit=celsius*(9/5)+32;

//Round up the farenheit to the floor value
fahrenheit=Math.floor(fahrenheit);


console.log(`The temperature is ${celsius} degrees Celsius.`)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${Math.floor(celsius*(33/100))} degrees Newton` )
