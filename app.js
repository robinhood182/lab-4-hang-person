/* globals words */
var guessedLetters = [];
var answer = '';
var blankSpaces = 0;

var loadWord = function(){

    var index = randomWord(words.length);
    answer = words[index];
    blankSpaces = answer.length;

    
};

console.log(answer);
console.log(blankSpaces); //length of the answer - amount of letters  


function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));
}



console.log('app.js loaded');


loadWord();

console.log(answer);
console.log(blankSpaces); //length of the answer - amount of letters


//draw right amount of blank spaces
for(i = 1; i <= blankSpaces ; i++){
    var blanks = document.getElementById('word-to-guess');
    blanks.innerHTML += '_ ';

}

function guessLetter(){
    var letter = document.getElementById('letter');
    console.log('the letter is', letter.value);
    guessedLetters.push(letter.value);
    console.log(guessedLetters);
}

console.log(letter);

//display correct letters
//display guessed letters
//create an input field for guesses and button
//display hangman model
//alert win or lose
//create a restart button