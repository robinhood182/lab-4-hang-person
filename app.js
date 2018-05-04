'use strict';
/* globals words i j */



var listOfGuessedLetters = [];
var answer = '';
var numberOfLetters = 0;
var answerArray;
var numberOfTries = 6;
var correct = true;

function showCorrectLetter(){
    var hidingBlock = document.getElementById('hiding-block');
    hidingBlock.classList.toggle('show');
}

var loadWord = function(){

    var index = randomWord(words.length);
    answer = words[index];
    numberOfLetters = answer.length;
    answerArray = answer.split('');
    console.log(answerArray);
};


console.log(answer);
console.log(answerArray);
console.log(numberOfLetters); //length of the answer - amount of letters


function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));
}



console.log('app.js loaded');


loadWord();

console.log(answer);
console.log(numberOfLetters); //length of the answer - amount of letters


//writes retrieved random word to browser
for(var i = 1; i <= numberOfLetters ; i++){
    var blanks = document.getElementById('word-to-guess');
    blanks.innerHTML = answerArray;

}
//create an input field for guesses and button

function guessLetter(){
    var letter = document.getElementById('letter');
    console.log('the letter is', letter.value);
    listOfGuessedLetters.push(letter.value);
    
    var showLetters = document.getElementById('guessed-letters');
    showLetters.innerHTML += letter.value + ', ';
    correct = false;
    console.log ('the letter is/not included in the array ' + answerArray.includes(letter.value));

    //Compare letter to letters in word
    for(var j = 0; j <= numberOfLetters; j++){
        if(letter.value === answerArray[j]) {
            correct = true;

            console.log (answerArray[j]);
            
            //if letter = answerArray[i] set display to visible. Otherwise display: hidden;
            //showCorrectLetter();
        }
        //add a body part
        //if tries = 0 then you lose.

        console.log ('loop is working');

    }
    if(correct === false){
        numberOfTries--;
        if(numberOfTries === 0){
            alert('Sorry, you are going to hang!');
        }
    //    letter.value = '';
        
    }
    console.log('tries left', numberOfTries);
    console.log(correct);
}

//check win condition:
//get listOfGuessedLetters array
//get answerArray arrat
//compare the two
//if all letters in answerArray are in listOfGuessedLetters = win!
//nested for loops recommended

// for(var k = 0; k < listOfGuessedLetters.length; k++){
//     for(var l = 0; l < answerArray.length; l++){
//         if(listOfGuessedLetters[k] === answerArray[l]){

//         }
//     }
// }



//-------------------
//display correct letters
//display guessed letters
//display hangman model
//alert win or lose
//create a restart button