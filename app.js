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
console.log(answer);
console.log(words[2]);