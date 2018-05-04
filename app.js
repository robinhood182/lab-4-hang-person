'use strict';
/* globals words i j */



var guessedLetters = [];
var answer = '';
var blankSpaces = 0;
var answerArray;
var numberOfTries = 6;
var correct = true;

var loadWord = function(){

    var index = randomWord(words.length);
    answer = words[index];
    blankSpaces = answer.length;
    answerArray = answer.split('');
    console.log(answerArray);
};


console.log(answer);
console.log(answerArray);
console.log(blankSpaces); //length of the answer - amount of letters


function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));
}



console.log('app.js loaded');


loadWord();

console.log(answer);
console.log(blankSpaces); //length of the answer - amount of letters


//draw right amount of blank spaces
for(var i = 1; i <= blankSpaces ; i++){
    var blanks = document.getElementById('word-to-guess');
    blanks.innerHTML += '_ ';

}
//create an input field for guesses and button

function guessLetter(){
    var letter = document.getElementById('letter');
    console.log('the letter is', letter.value);
    guessedLetters.push(letter.value);
    console.log(guessedLetters);
    correct = true;

    //Compare letter to letters in word
    for(var j = 0; j <= blankSpaces; j++){
        if(letter.value === answerArray[j]) {
            console.log (answerArray[j]);
            //if letter = answerArray[i] set display to visible. Otherwise display: hidden;

        }
        else {
            correct = false;
        }
        //add a body part
        //if tries = 0 then you lose.

        console.log ('loop is working');
    }
    if(correct === false){
        numberOfTries--;
    }
    console.log('tries left', numberOfTries);
    console.log(correct);
}




//display correct letters
//display guessed letters
//display hangman model
//alert win or lose
//create a restart button