//initializing an empty array
var correctAnswers = [];

//Initializing an array with letters that will represent the correct answer to the question and creating 8 questions that will be used in my quiz.
var question= [{prompt: "1.What is 15+8? \n (a)12 \n (b)6 \n (c)23", answer: "c"},
{prompt: "2.What is 29-4? \n (a)21 \n (b)25 \n (c)16", answer: "b"},
{prompt: "3.What is 30*0? \n (a)30 \n (b)0 \n (c)3", answer: "b"},
{prompt: "4.What is 20/4? \n (a)5 \n (b)16 \n (c)4", answer: "a"},
{prompt: "5.What is 15+23? \n (a)30 \n (b)27 \n (c)38", answer: "c"},
{prompt: "6.What is 5*5? \n (a)5 \n (b)25 \n (c)30", answer: "b"},
{prompt: "7.What is 43-4? \n (a)44 \n (b)36 \n (c)39", answer: "c"},
{prompt: "8.What is 19+2? \n (a)12 \n (b)20 \n (c)21", answer: "c"},]

var score = 0;

//a for-loop and an if-statement after each question is answered to check if the users’ input is correct/incorrect
for(var i=0; i<question.length; i++){
    var result = window.prompt(question[i].prompt);
    if(result == question[i].answer){
        score++;
        alert("CORRECT!!!");
    } else {
        alert("INCORRECT!!!");
    }
}
//displaying the results of the quiz on the console
console.log("Correct answers " + score + "/" + question.length);