1. Calculate the sum of all even numbers between 1 and 100
    Test case 1: Verify that the sum of all even numbers 
                         between 1 and 100 is 2550.
    Test case 2: Verify that the sum of all even numbers
                         between 1 and 50 is 650.

PROGRAM:
let loop_start = parseInt(prompt("Enter the starting number: "));
let loop_end = parseInt(prompt("Enter the ending number: "));
let sum = 0;
for (let i = loop_start; i <= loop_end; i++) {
    if (i % 2 == 0) {
        sum += i;  //sum=sum+i
    }
}
console.log(`Sum of ${loop_start} to ${loop_end} even numbers is : 
    ${sum} `)

OUTPUT: 
    Enter the starting number: 1
    Enter the ending number: 100
    Sum of 1 to 100 even numbers is: 2550

    Enter the starting number: 1
    Enter the ending number: 50
    Sum of 1 to 50 even numbers is: 650

2. Write a program to find the factorial of a given number
     Test case 1: Input: 5, Expected output: 120
     Test case 2: Input: 3, Expected output: 6

PROGRAM:
Factorial = parseInt(prompt("Enter the Number : "))
result = 1
for (i = Factorial; i >= 1; i--) {
    result *= i    // result=result*i
}
console.log(`Factorial of ${Factorial} is : ${result}`)

OUTPUT: 
    Enter the Number: 5
    Factorial of 5 is: 120
    
    Enter the Number: 3
    Factorial of 3 is: 6

3. Determine the number of digits in a given number
    Test case 1: Input: 123, Expected output: 3
    Test case 2: Input: 4567, Expected output: 4
PROGRAM:
number = prompt("Enter the Number : ")
result = number.length
console.log(`Number of Digits in a ${number} number is 
           :${result}`)

OUTPUT: 
     Enter the Number: 123
     Number of Digits in a 123 number is: 3
     Enter the Number: 4567
     Number of Digits in a 4567 number is: 4


// Else - If Ladder:

1. Write a program to determine the fare for a taxi ride based on the distance travelled:
- 0 - 5 km: $5
    - 5 - 10 km: $10
        - 10 - 20 km: $20
            - Above 20 km: $30 + $5 for every additional km

PROGRAM:
    taxi_ride = parseInt(prompt("Enter the Number : "))
if (taxi_ride >= 0 && taxi_ride <= 5) {
    console.log(`You have Travelled ${taxi_ride} kms, you have to 
                   pay $5 Dollars`)
}
else if (taxi_ride > 5 && taxi_ride <= 10) {
    console.log(`You have Travelled ${taxi_ride} kms, you have to 
                  pay $10 Dollars`)
}
else if (taxi_ride > 10 && taxi_ride <= 20) {
    console.log(`You have Travelled ${taxi_ride} kms, you have to 
                   pay $20 Dollars`)
}
else if (taxi_ride > 20)
    total = 30 + (25 - 20) * 5
{
    console.log(`You have Travelled ${taxi_ride} kms, you have to 
                  pay ${total} Dollars`)
}
OUTPUT: 
Enter the Number: 23
You have Travelled 23 kms, you have to pay 55 Dollars

2. Write a program to determine the discount on a product based on the quantity purchased:
- 1 - 5 units: No discount
    - 6 - 10 units: 5 % discount
        - 11 - 20 units: 10 % discount
            - Above 20 units: 15 % discount

PROGRAM:
discount = parseInt(prompt("Enter No.of Units : "))
if (discount > 0 && discount <= 5) {
    console.log(`You have ${discount} units so you have No Discount 
              on purschased items`)
}
else if (discount > 5 && discount <= 10) {
    console.log(`You have ${discount} units so you have 5% Discount
            on purschased items`)
}
else if (discount > 10 && discount <= 20) {
    console.log(`You have ${discount} units so you have 10% 
            Discount on purschased items`)
}
else if (discount > 20) {
    console.log(`You have ${discount} units so you have 20% 
      Discount on purschased items`)
}
else {
    console.log("Enter Positive Number Only")
}

OUTPUT: 
Enter No.of Units: 15
You have 15 units so you have 10 % Discount on purchased items

// Switch Statement:
1. Write a program to determine the type of coffee based on the user's selection:
    - 1: Espresso
    - 2: Cappuccino
    - 3: Latte
    - 4: Mocha

PROGRAM:
user_selection = parseInt(prompt("Enter the number : "))
switch (user_selection) {
    case 1: console.log(`You number is ${user_selection} so your type of coffee is Espresso`)
        break
    case 2: console.log(`You number is ${user_selection} so your type of 
              coffee is Cappuccino`)
        break
    case 3: console.log(`You number is ${user_selection} so your type of 
            coffee is Latte`)
        break
    case 4: console.log(`You number is ${user_selection} so your type of 
               coffee is Mocha`)
        break
    default: console.log("Invaild Number")
}

OUTPUT: 
Enter the number: 3
You number is 3 so your type of coffee is Latte

2. Write a program to determine the shipping cost based on the region:
- 1: North America($10)
- 2: South America($20)
- 3: Europe($30)
- 4: Asia($40)
- 5: Australia($50)

PROGRAM:
region = prompt("Enter Your Region : ")
switch (region) {
    case "North America": console.log(`Shipping Cost to ${region} is : $10 `)
        break
    case "South America": console.log(`Shipping Cost to ${region} is : $20 `)
        break
    case "Europe": console.log(`Shipping Cost to ${region} is : $30 `)
        break
    case "Asia": console.log(`Shipping Cost to ${region} is : $40 `)
        break
    case "Australia": console.log(`Shipping Cost to ${region} is : $50 `)
        break
    default: console.log(`Invaild Region`)
}

OUTPUT: 
Enter Your Region: Asia
Shipping Cost to Asia is: $40





