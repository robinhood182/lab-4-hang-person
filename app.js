var answer = '';
var loadWord = function(){
    //retrieve array
    //take a word from word.js
    var index = randomWord(words.length);

    answer = words[index];

    return answer;
}

function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));

}
console.log('app.js loaded');
loadWord();
//get length of answer
//draw right amount of blank spaces
//display correct letters
//display guessed letters
//create an input field for guesses and button
//display hangman model
//alert win or lose
//create a restart button