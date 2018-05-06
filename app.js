'use strict';
/* globals words i j */



var listOfGuessedLetters = [];
var answer = '';
var numberOfLetters = 0;
var answerArray; 
var hiddenWordArray; //creates copy of array with just underscores for display
var numberOfTries = 6;
var correct = true;
var youWinArray; //this is a counter array that decreases with wrong guesses. When it is 0 length, the game is lost

function showCorrectLetter(){
    var hidingBlock = document.getElementById('word-to-guess');
    hidingBlock.classList.toggle('show');
}

var loadWord = function(){

    var index = randomWord(words.length);
    answer = words[index];
    numberOfLetters = answer.length;
    answerArray = answer.split('');
    youWinArray = answerArray.slice();
    hiddenWordArray = answerArray.slice(' ');

    for(var i = 0; i < numberOfLetters; i++) {
        hiddenWordArray[i] = '_';
    } 

    console.log(answerArray);
    console.log(hiddenWordArray);
    console.log('youWin = ' + youWinArray);
};


console.log(answer);
console.log(answerArray);
console.log(numberOfLetters); //length of the answer - amount of letters


function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));
}


loadWord();

console.log(answer);
console.log(numberOfLetters); //length of the answer - amount of letters


//writes retrieved random word to browser but uses hiddenWordArray to only display underscores
for(var i = 1; i <= numberOfLetters ; i++){
    var blanks = document.getElementById('word-to-guess');
    blanks.innerHTML = hiddenWordArray; 

}
//create an input field for guesses and button

function guessLetter(){
    var letter = document.getElementById('letter');
    console.log('the letter is', letter.value);
    listOfGuessedLetters.push(letter.value);
    
    var showLetters = document.getElementById('guessed-letters');
    showLetters.innerHTML += letter.value + ' ';
    correct = false;
    console.log ('the letter is/not included in the array ' + answerArray.includes(letter.value));

    //Compare letter to letters in word
    for(var j = 0; j <= numberOfLetters; j++){
        if(letter.value.toLowerCase() === answerArray[j]) {
            correct = true;
            hiddenWordArray[j] = letter.value;
            
            for(var i = 1; i <= numberOfLetters ; i++){
                var blanks = document.getElementById('word-to-guess');
                blanks.innerHTML = hiddenWordArray; 
            }
            youWinArray.pop();

            //show win message
            if(youWinArray.length === 0){
                
            }

            console.log (answerArray[j]);
            console.log ('after popping, the length of youWin =' + youWinArray.length);
            
            
        }
        

        console.log ('loop is working');

    }
    if(correct === false){
        numberOfTries--;

        var gallowsPicture = document.getElementById('gallows');
        gallowsPicture.innerHTML ='<img src="img/' + numberOfTries + '.png" width="400" />';

        if(numberOfTries === 0){
            gallowsPicture = document.getElementById('gallows');
            gallowsPicture.innerHTML ='<img src="img/' + numberOfTries + '.png" width="400" />';

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
