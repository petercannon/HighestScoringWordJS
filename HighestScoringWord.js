function high(x){
  var arr = x.split(" ");
  var scores = [];
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    console.log(word);
    var wordScore = 0;
    for (var j = 0; j < word.length; j++) {
      var letter = word[j]
      wordScore += letterScore(letter);
    }
    scores.push(wordScore);
    console.log(wordScore);
  }
  console.log(scores);
  
  const max = Math.max.apply(null, scores);
  console.log(max);
  const index = scores.indexOf(max);
  console.log(index);
  return arr[index];
}
  
function letterScore(x) {
  return x.charCodeAt(0) - 96;
}

/*
high('man i need a taxi up to ubud')             // 'taxi'
high('what time are we climbing up the volcano') // 'volcano'
high('take me to semynak')                       //'semynak'   
high('aa b')                                     // 'aa'
high('b aa')                                     // 'b'
high('bb d')                                     // 'bb'
high('d bb')                                     // 'd'
high('aaa b')                                    // 'aaa'
*/
