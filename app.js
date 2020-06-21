// Chapter # 21-25
// Task # 1
var userFname = prompt("Enter your first name");
var userLname = prompt("Enter your last name");
var fullName = userFname + " " + userLname;
alert("Hello " + fullName);


// Task # 2
var userInput = prompt("Enter your favorite mobile phone model");
var favMob = userInput.length;
document.write("My favorite phone is: " + userInput);
document.write("<br>")
document.write("Length of string: " + favMob);


// Task # 3
var str = "Pakistani";
var strIndex = str.indexOf("n");
document.write("String : " + str);
document.write("<br>");
document.write("Index of 'n' : " + strIndex);


// Task # 4
var str = "Hello World";
var strLastindex = str.lastIndexOf("l");
document.write("String : " + str);
document.write("<br>");
document.write("Last index of 'l' is " + strLastindex);


// Task # 5
var str = "Pakistani";
var charOfstr = str.charAt(3);
document.write("String : " + str);
document.write("<br>");
document.write("Character at index 3 : " + charOfstr);


// Task # 6                    
var userFname = prompt("Enter your first name");
var userLname = prompt("Enter your last name");
var fullName = userFname.concat(" " + userLname);
alert("Hello " + fullName);


// Task # 7
var word = "Hyderabad";
var replacedWord = word.replace("Hyder","Islam");
document.write("City : " + word);
document.write("<br>");
document.write("After replacement : " + replacedWord);


// Task # 8                           
var message = "Ali and Sami are best friends. They play cricket and football together. ";
var updatedMsg = message.replace(/and/g ,"&");
document.write(message);
document.write("<br>");
document.write(updatedMsg);


// Task # 9                       
var str = "472";
var updatedStr = Number(str);
document.write("Value : " + str);
document.write("<br>");
document.write("Type : " + typeof(str));
document.write("<br>");
document.write("Value : " + updatedStr);
document.write("<br>");
document.write("Type : " + typeof(updatedStr));



// Task # 10
var userInput = prompt("Enter any message you want to show");
var updatedUserinput = userInput.toUpperCase();
document.write("User input : " + userInput);
document.write("<br>");
document.write("Upper case : " + updatedUserinput);


// Task # 11                
var userInput = prompt("Enter any message you want to show");
var updatedUserinput1 = userInput.charAt(0);
var updatedUserinput2 = userInput.slice(1);
document.write("User input : " + userInput);
document.write("<br>");
document.write("Title case : " + updatedUserinput1.toUpperCase() + updatedUserinput2);


// Task # 12                       
var num = 35.36;
var numTostr = num.toString();
var numChanged = numTostr.split(".").join("");
document.write("Number : " + num);
document.write("<br>");
document.write("Result : " + numChanged);


// Task 13                                     
var userName = prompt("Enter your name");
for(var i = 0 ; i <= userName.length ; i++){
if(userName.charCodeAt(i) <= 33 || userName.charCodeAt(i) >= 44 || userName.charCodeAt(i) <= 46 
|| userName.charCodeAt(i)  >= 64 ){
        alert("Please enter a valid username!");
        break;
}
}

// Task 14                         
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var searchByuserInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var b = searchByuserInput.toLowerCase();
for(var i = 0 ; i < A.length ; i++){
    if(b === A[i]){
        alert(b + " is available at " + "index " + A.indexOf(b) + " in our bakery");
    }
        else{
        alert("We are sorry. " + b + " is not available in our bakery");
    }
    break;      
}


// Task 15                            
var userPswd = prompt("Enter Password");
for(var i = 0 ; i <= userPswd.length ; i++){
    if(userPswd.charCodeAt(i) >= 48 && userPswd.charCodeAt(i) <= 57 || userPswd.charCodeAt(i) >= 65 && userPswd.charCodeAt(i) <= 90 
    || userPswd.charCodeAt(i) >= 97 && userPswd.charCodeAt(i) <= 122 ){
            alert("Please enter a valid Password!");
            break;
    }
}


// Task 16                        
var uni = "University of Karachi";
var splitUni = uni.split("");
document.write(uni);
document.write("<br>");
for(var i = 0 ; i < uni.length ; i++){
    document.write(splitUni[i] + "<br>");
}


// Task 17
var userInput = prompt("Enter some text");
var userInputLastchar = userInput.charAt(userInput.length-1);
document.write(userInput);
document.write("<br>");
document.write("Last character of Input : " + userInputLastchar);


// // Task 18                           
var str = "the quick brown fox jumps over the lazy dog";
var word = "the";
var wordCount = str.split(word).length - 1;
document.write("Text : " + str);
document.write("<br>");
document.write("There are " + wordCount + " occurence(s) of the word(the)");


// Chapter # 26-30
// Task 1
var userInput = +prompt("Enter any positive integer");
document.write("number : " + userInput);
document.write("<br>");
document.write("round off value : " + Math.round(userInput));
document.write("<br>");
document.write("floor value : " + Math.floor(userInput));
document.write("<br>");
document.write("ceil value : " + Math.ceil(userInput));
document.write("<br>");


// Task # 2
var userInput = +prompt("Enter any negative integer");
document.write("number : " + userInput);
document.write("<br>");
document.write("round off value : " + Math.round(userInput));
document.write("<br>");
document.write("floor value : " + Math.floor(userInput));
document.write("<br>");
document.write("ceil value : " + Math.ceil(userInput));
document.write("<br>");


// Task 3
var num1 = -5;
var num2 = 4;            
var absoluteValue1 = Math.abs(num1);
var absoluteValue2 = Math.abs(num2);
document.write("The absolute value of " + num1 + " is " + absoluteValue1);
document.write("<br>");
document.write("The absolute value of " + num2 + " is " + absoluteValue2);



// Task 4 
var num = Math.random();
var diceValue = Math.round(num*4);
var diceValue1 = Math.round(num*6);
document.write("random dice value : " + diceValue);
document.write("<br>");
document.write("random dice value : " + diceValue1);


// Task 5
var num = Math.random();
var coinValue = Math.round(num*4);
var coinValue1 = Math.round(num*6);
document.write(coinValue);
document.write("<br>");
document.write("random coin value : " + "Heads");
document.write("<br>");
document.write(coinValue1);
document.write("<br>");
document.write("random coin value : " + "Tails");


// Task 6
var num = Math.round(Math.random());
document.write("random number between 1 and 100 : " + num);


// Task 7
var userInput = +prompt("Enter your weight in kilograms");
var userWeight = parseInt(userInput);
document.write("The weight of user is " + userWeight + " kilograms");


// Task 8
var secretNum = 5;
var userInput = +prompt("Enter any number between 1 and 10");
if(secretNum === userInput){
      alert("Congratulation! You entered correct number");
}
else{
      alert("Try again!")
}


// Chapter # 31 - 34
// Task 1
var date_today = new Date(); 
document.write(date_today); 


// Task 2
var date = new Date();
var date_str = date.toString();
var currentMonth = date_str.slice(4,7); 
alert("Current month : " + currentMonth);


// Task 3
var date = new Date();
var date_str = date.toString();
var currentDay = date_str.slice(0,3); 
alert("Today is " + currentDay);


// Task 4
var date = new Date();
var date_str = date.toString();
var currentDay = date_str.slice(0,3); 
if(currentDay === "Sat" || currentDay === "Sun"){
    alert("It's Fun day");
}


// // Task 5              
var d = new Date();
var date_str = d.toString();
var currentTime = date_str.slice(8,10); 
if(currentTime >= 1 && currentTime <= 15){
    alert("First fifteen days of the month");
}
else{
    alert("Last fifteen days of the month");
}


// Task 6
var todayDate = new Date();
var secFind = todayDate.getTime();
document.write("Current Date : " + todayDate);
document.write("<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + secFind);
document.write("<br>");
document.write("Elapsed minutes since January 1, 1970: " + Math.ceil(secFind / (1000*60*60)));


// Task 7                             
var userInput = +prompt("Enter digital time");
var d = new Date();
var dStr = d.toString();
var currentTime = dStr.slice(16,18);
if(currentTime >=1 && currentTime <= 12){
      alert("It's AM");
}
else{
    alert("It's PM");
}


// Task 8                            
var laterDate = new Date("december 31, 2020");
document.write("Later Date : " + laterDate);


// Task 9
var d = new Date("april 25, 2020");
var dToday = new Date();
var diff = (dToday - d) / (1000 * 60 * 60 * 24);
alert(Math.floor(diff) + " days have been passed since 1st Ramazan, 2020");


// Task 10
var d = new Date();
var todayDate = new Date().getTime();
var givenDate = new Date("january 01 2015").getTime();
var diff = Math.floor((todayDate - givenDate) / (1000));
document.write("On reference date " + d + "<br>" + diff + " seconds had passed since beginning of the year 2015");


// Task 11                
var d = new Date();
document.write("current date : " + d);
d.setHours(6);
document.write("<br>");
document.write("1 hour ago , it was " + d);


// Task 12
var d = new Date();
var previousDate = new Date("june 17, 1020");
document.write("current date : " + d);
document.write("<br>");
document.write("100 years back, it was " + previousDate);


// Task 13               
var userInput = +prompt("Enter your age");
var d = new Date().getFullYear();
console.log(userInput);
console.log(d);
var birthYear = d - userInput;
document.write("Your age is " + userInput);
document.write("<br>");
document.write("Your birth year is " + birthYear);


// Task 14
var customerName = "ABC Customer";
var currentMonth = "February";
var unitsNum = +prompt("Enter no. of units you consumed this month");
var perUnitprice = +prompt("Enter per unit price of your consumed unit");
var amount_withinDD = unitsNum * perUnitprice;
var penalty = 350;
var amount_afterDD = amount_withinDD + penalty;
document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name : " + customerName);
document.write("<br>");
document.write("Month : " + currentMonth);
document.write("<br>");
document.write("Number of units : " + unitsNum);
document.write("<br>");
document.write("Charges per unit : " + perUnitprice);
document.write("<br>");
document.write("<br>");
document.write("Net Amount Payable (within Due Date) : " + amount_withinDD);
document.write("<br>");
document.write("Late payment surcharge : " + penalty);
document.write("<br>");
document.write("Gross Amount Payable (within Due Date) : " + amount_afterDD);



// Chapter # 35-38

// Task 1
function date(){
    document.write(new Date);
}
date();


// Task 2
function userName(){
    var userFname = prompt("Enter your first name");
    var userLname = prompt("Enter your last name");
    alert("Welcome " + userFname + " " + userLname);
}
userName();


// Task 3
    var userInput1 = +prompt("Enter first number for adding");
    var userInput2 = +prompt("Enter second number for adding");

function add(){
    return(userInput1 + userInput2);
}
var sum = alert(add());


// Task 4
    var num1 = +prompt("Enter first number");
    var num2 = +prompt("Enter second number");
    var opr = prompt("Enter operator for further calculation")

function add(){
if(opr === "+"){
    return(num1 + num2);
}    
else if(opr === "-"){
    return(num1-num2);
}
else if(opr === "*"){
    return(num1 * num2);
}
else if(opr === "/"){
    return(num1 / num2);
}    
else if(opr === "%"){
    return(num1 % num2);
} 
else{
    return("You entered wrong operator!")
}
}
var calc = document.write(add(num1,opr,num2));


// Task 5            
function square(num1){
    return num1 * num1;
}
var sqNum = square(5);
document.write(sqNum);


// Task 6            
var userInput = +prompt("Enter any number for finding factorial!");
function factorial(){
    var answer = 1;
       if(userInput === 0 || userInput === 1){
           return answer;
       }
       else{
           for(var i = userInput ; i > 1 ; i--){
               answer = answer * i;
           }
           return answer = answer * i;
       } 
}  

alert("Factorial of " + userInput + " is " + factorial(userInput));  



// Task 7
function num(){
var strtNum = prompt("Enter start number for counting");
var endNum = prompt("Enter end number for counting");
    for(var i = strtNum ; i <= endNum ; i++){
         document.write(i + "<br>");
    }
}    
num();  


// // Task 8
function calculateHypotenuse(){
    var userInput1 = +prompt("Enter base of a right angle triangle");
    var userInput2 = +prompt("Enter perpendicular of a right angle triangle");
    var a = Math.pow(userInput1,2);
    var b = Math.pow(userInput2,2);
    var hypotenuse = a + b;
    document.write("Hypotenuse = " + hypotenuse);
}
    function calculateSquare(){  
    }
calculateHypotenuse();
calculateSquare();


// // Task 9               
function calcArea1(width , height){
    alert("Area of a rectangle is " + width * height);
}
calcArea1(5 , 6);
function calcArea2(){
        alert("Area of a rectangle is " + width * height);
}
calcArea2(width = 3 , height = 4);



// Task 10
function palindrome(){
    var userInput = prompt("Enter any word you want to search");
    var check = "";
    for(var i = userInput.length-1 ; i>=0 ;i--){
         check+=userInput[i];

    }    
        if(userInput === check){
            alert(userInput + " is a palindrome word");
        }
        else{
            alert(userInput + " is not a palindrome word");
        }
    }
palindrome();


// Task 11                 
var str = prompt("Enter any text");
function titleCase(str){
    var str = str.split(" ");
    for(var i = 0 ; i < str.length ; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
document.write(titleCase(str));


// Task 12                 


// Task 13
function countOccurence(str , letterSearch){
    var letterCount = 0;
    for(var i = 0 ; i < str.length ; i++){
        if(str.charAt(i) === letterSearch){
        letterCount += 1;
        }
    }
        return letterCount;
    }
alert("The number of occurence is " + (countOccurence("Hello! How are you?" , "o"))); 


// Task 14
function calcCircumference(radius){
    alert("The Circumference of a circle is " + 2 * 3.142 * radius);
}
calcCircumference(4);

function calcArea(radius){
      alert("The Area of a circle is " + 3.142 * Math.pow(radius,2));
}
calcArea(2);