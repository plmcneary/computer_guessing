var msg = document.querySelector('h1');
var numArr = [];
var numRange;
var guess;

startRange = 10;

function reset (){
  numArr = [];
  numRange = startRange;
  for(i=0; i<numRange; ++i){
    numArr.push(i+1);
  }
  guess = numArr[Math.floor((numRange/2)-1)];
  msg.textContent = guess;
}

reset();

var btnLow = document.querySelector('.low');
var btnHigh = document.querySelector('.high');
var btnCorrect = document.querySelector('.correct');
var btnReset = document.querySelector('.reset');


btnLow.addEventListener('click', function(){
  numArr = numArr.splice((numRange/2), numRange);
  numRange = numArr.length;
  guess = numArr[Math.floor(numRange/2)];
  msg.textContent = guess;

});

btnHigh.addEventListener('click', function(){
  numArr = numArr.splice(0, numRange/2);
  numRange = numArr.length;
  guess = numArr[Math.floor(numRange/2)];
  msg.textContent = guess;
});

btnCorrect.addEventListener('click', function(){
  msg.textContent = 'Hooray!';
});

btnReset.addEventListener('click', function(){
  reset();
});
