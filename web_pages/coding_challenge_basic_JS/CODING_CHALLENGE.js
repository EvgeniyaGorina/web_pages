/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
GOOD LUCK ðŸ?€
*/



console.log( 'CODING CHALLENGE 1');
var markBMI, johnBMI;
function calclBMI(mass, height){
return  BMI= mass / (height * height);
}
 
markBMI=calclBMI(68,1.75);
johnBMI=calclBMI(78,1.63);
console.log(markBMI,johnBMI);
function hiegherBMI(){
    if ( markBMI >= johnBMI){
    console.log('Mark\'s BMI is higher then John\'s BMI' );
}
else if ( markBMI <= johnBMI){
    console.log('John\'s BMI is higher then Mark\'s BMI');
}
else{
    console.log('John && Mark BMIs are same');
}

}
hiegherBMI();




/*****************************
* CODING CHALLENGE 2
*/
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK ðŸ?€
*/


console.log( 'CODING CHALLENGE 2');
var johnTeam=[89,120,103];
var makeTeam=[116,94,123];
var maryTeam=[97,134,105];
//reduce metod is a function that calculate all numbers in array
function calcAverage(john){
var sum = john. reduce(function(a, b){return a + b;}, 0);
console. log(sum +' sume of score ');
return average= sum /john.length; 
}

var averageJohn=calcAverage(johnTeam);
var averageMake=calcAverage(makeTeam);
var averageMary=calcAverage(maryTeam);
console.log(averageJohn  + ' John team average;',averageMake + ' Make team average; ',averageMary + ' Mary  team average;');

function hiegherAverage(a,b,c){
    if(a > b && a > c){
        console.log('John\'s team is average score hiegher then other '+averageJohn);
    } else if(b > a && b > c){
        console.log('Mike\'s team is average score hiegher then other '+averageMake);
    } else{
    console.log('Mary\'s team is average score hiegher then other  '+averageMary);
    
}
}

hiegherAverage(averageJohn, averageMake,averageMary);
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function).
 He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200,
  and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK ðŸ?€
*/

console.log('CODING CHALLENGE 3');
var bills=[124,48,268];
function calcTips(a){   
   
   
      for(var i=0;i<a.length;i++) {
       var  percentage;
       var bill = a[i];
       if(bill < 50){
       percentage=.2; 
     }else if(bill > 50 && bill< 200){
         percentage=.15;
     } else{
         percentage=.1;

     }  
  result[i]= bill* percentage;
  resultAmount[i]= bill+(bill* percentage);

 }
 
}
var result= [];
var resultAmount= [];
calcTips(bills);

  console.log(result, resultAmount);

/*****************************
* CODING CHALLENGE 4
*/
/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK ðŸ?€
*/

var john={
    name:"John",
    mass:78,
    height:1.75,
    calculationBMI: function(){
     return this.BMI=this.mass / (this.height * this.height);  
    }
};

var mark={
    name:"Mark",
    mass:69,
    height:1.85,
    calculationBMI: function(){
     return this.BMI=this.mass / (this.height * this.height);  
    }
};
var markBMI=mark.calculationBMI();
var johnBMI=john.calculationBMI();
console.log(markBMI, mark, johnBMI,john );

if(markBMI > johnBMI){
    console.log('Mark\''+markBMI+' BMI is hiegher then John\' BMI');
} else if (markBMI < johnBMI){
     console.log('John\''+johnBMI+' BMI is hiegher then Mark\' BMI');
}
else {
   console.log('Both BMI are same');
}





/*****************************
* CODING CHALLENGE 5
*/
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK ðŸ?€
*/


var markPaiment={
    name:'Mark',
    surname:'Muller',
    bill:[77,375,110,45],
    calculTips: function(){
        this.tips=[];
        this.amountBill=[];
        for (var i =0; i < this.bill.length; i++){
     
        var percentage;
        
        if(this.bill[i]< 100){
            percentage=.2;
            
        }
        else if (this.bill[i]> 100 && this.bill[i]< 300){
            percentage=.1;
        } else{
             percentage=.25;
        }
       this.tips[i]=percentage*this.bill[i];
     this.amountBill[i]=(percentage*this.bill[i])+this.bill[i];
    }
}
    
};
var johnPaiment={
    name:'John',
    surname:'Smith',
    bill:[124,48,268,180,42],
    calculTips: function(){
        this.tips=[];
        this.amountBill=[];
        for (var i =0; i < this.bill.length; i++){
     
        var percentage;
        
        if(this.bill[i]< 50){
            percentage=.2;
            
        }
        else if (this.bill[i]> 50 && this.bill[i]< 200){
            percentage=.15;
        } else{
             percentage=.1;
        }
       this.tips[i]=percentage*this.bill[i];
     this.amountBill[i]=(percentage*this.bill[i])+this.bill[i];
    }
}

};
johnPaiment.calculTips();
markPaiment.calculTips();
//console.log(johnPaiment,markPaiment );



function calculAverage(x){  
var sum = x. reduce(function(a, b){return a + b;}, 0);
console. log(sum +' sume of tips ');
return average= sum /x.length; 

}


var averJohn=calculAverage(johnPaiment.tips);
var averMark=calculAverage(markPaiment.tips);
console. log(averMark+' Mark ',averJohn+' John ');

if( averJohn >= averMark ){
    console.log('John\'s average is hiegher ');
} else if(averMark > averJohn){
    console.log('Mark\'s average is hiegher ');
}else{
    console.log('Both are same');
}
