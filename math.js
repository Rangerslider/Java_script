1. // Printing PI value
document.write(Math.PI);  // Prints: 3.141592653589793
 
// Function to calculate circle area
function calculateCircleArea(radius){
    var area = (Math.PI) * radius * radius;
    return area;
}
document.write(calculateCircleArea(5));  // Prints: 78.53981633974483
document.write(calculateCircleArea(10));  // Prints: 314.1592653589793



2. //Math.abs()   : is used to calculate the absolute (positive) value of a number
document.write(Math.abs(-1));  // Prints: 1
document.write(Math.abs(1));  // Prints: 1
document.write(Math.abs(-5));  // Prints: 5
document.write(Math.abs(-10.5));  // Prints: 10.5



3. //Math.random()  : is used to generate a floating-point random number in the range from 0 inclusive up to but not including 1.
document.write(Math.random());  // Expected output: a number between 0 and 1 it will be floating number also
// Function to create random integer 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
 
document.write(getRandomInt(3));  // Expected output: 0, 1 or 2
document.write(getRandomInt(1));  // Expected output: 0



4. //Math.sqrt()   : is used to calculate the square root of a number: Math.sqrt(x) = x
document.write(Math.sqrt(4));  // Prints: 2
document.write(Math.sqrt(16));  // Prints: 4
document.write(Math.sqrt(0.25));  // Prints: 0.5
document.write(Math.sqrt(-9));  // Prints: NaN


5. /* Function to calculate hypotenuse.
Hypotenuse is the longest side of a right-angled triangle. */
function calculateHypotenuse(a, b) {
    return Math.sqrt((a * a) + (b * b));
}
 
document.write(calculateHypotenuse(3, 4));  // Prints: 5
document.write(calculateHypotenuse(5, 12));  // Prints: 13



//6. Math.ceil()  : it rounds a number up to the next highest integer. So, 3.5 becomes 4, -5.7 becomes -5 (because -5 is greater than -6).
document.write(Math.ceil(3.5));  // Prints: 4
document.write(Math.ceil(-5.7));  // Prints: -5
document.write(Math.ceil(9.99));  // Prints: 10
document.write(Math.ceil(-9.99));  // Prints: -9
document.write(Math.ceil(0));  // Prints: 0



//7. Math.floor()  :it rounds a number down to the next lowest integer. So, 3.5 becomes 3, -5.7 becomes -6 (because -6 is lesser than -5).
document.write(Math.floor(3.5));  // Prints: 3
document.write(Math.floor(-5.7));  // Prints: -6
document.write(Math.floor(9.99));  // Prints: 9
document.write(Math.floor(-9.99));  // Prints: -10
document.write(Math.floor(0));  // Prints: 0




//8. Math.round() : it rounds a number to the nearest integer in such a way that if the decimal part is .5 or greater, number is rounded up, otherwise rounded down
document.write(Math.round(3.5));  // Prints: 4
document.write(Math.round(-5.7));  // Prints: -6
document.write(Math.round(7.25));  // Prints: 7
document.write(Math.round(4.49));  // Prints: 4
document.write(Math.round(0));  // Prints: 0



//9.Math.max() and Math.min() methods is used to find which number is the largest or smallest in a group of numbers
document.write(Math.max(1, 3, 2));  // Prints: 3
document.write(Math.max(-1, -3, -2));  // Prints: -1
 
document.write(Math.min(1, 3, 2));  // Prints: 1
document.write(Math.min(-1, -3, -2));  // Prints: -3
//apply() method
var numbers = [1, 3, 2];
document.write(Math.max.apply(null, numbers));  // Prints: 3
document.write(Math.min.apply(null, numbers));  // Prints: 1




//10.Math.pow() method is used to raise a number to a specified power
document.write(Math.pow(3, 2));  // Prints: 9
document.write(Math.pow(0, 1));  // Prints: 0
document.write(Math.pow(5, -2));  // Prints: 0.04
document.write(Math.pow(16, 0.5));  // Prints: 4 (square root of 4)
document.write(Math.pow(8, 1/3));  // Prints: 2 (cube root of 8)



//11. Trigonometric Operations:   sin(), cos(), tan() to perform trigonometric operations .these need to multiply any degree measurements by π/180 before using them.
//Since, pi radians are equal to 180 degrees: π rad = 180°. Therefore, π/2 radians is equal 90 degrees, π/3 radians is equal to 60 degrees.

document.write(Math.sin(0 * Math.PI / 180));  // Prints: 0
document.write(Math.sin(90 * Math.PI / 180));  // Prints: 1
document.write(Math.cos(0 * Math.PI / 180));  // Prints: 1
document.write(Math.cos(180 * Math.PI / 180));  // Prints: -1
document.write(Math.tan(0 * Math.PI / 180));  // Prints: 0