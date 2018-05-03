var loadWord = function(){
    //retrieve array
    //take a word from word.js
    var index = randomWord(words.length);

    var answer = words[index];

    return answer;
}

function randomWord(max){
    return Math.floor(Math.random() * Math.floor(max));

}