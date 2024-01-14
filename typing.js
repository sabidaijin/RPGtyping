/* 'use strict' */

window.onload = function(){
  let currentkey = 0;
  const questions = [
    "public",
    "public",
    ".hidden {"
  ];


  const setQuestion = (currentkey) => {
    let currenttext;
    currenttext = questions[currentkey];
    questions.splice(currentkey, 1);
    console.log(currenttext);
   
    remained.textContent = currenttext;
    remainedTextWords = [];
    remainedTextWords = currenttext.split('');
    
    
    inputText.value = '';
    setRemainingQuestions(questions);
  
  };
  
  const setRemainingQuestions = (questions) => {
    let questionText = ''; // 問題文を格納するための文字列
    for (let i = 0; i < questions.length; i++) {
      questionText += questions[i] + '<br>';
    }
    allQ.innerHTML = questionText; // 問題文を表示する
  };
  

  const entered = document.getElementById('entered');
  const remained = document.getElementById('remained');
  const inputText = document.getElementById('inputText');
  const allQ = document.getElementById('allQ');
  const game = document.getElementById('game');
  const message = document.getElementById('message');
  const replayBtn = document.getElementById('replayBtn');

  let remainedTextWords = remained.textContent.split('');
  // 入力済みのものをあえて残しておく
  enteredTextWords = [];
  
  setQuestion(currentkey);
  
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
    }
    
    if (e.key === "Enter") {
      console.log("エンター");
    } else {
      const pressedKey = e.key;
      console.log(currentkey);
      if (pressedKey === remainedTextWords[0]) {
        console.log("正解");
        enteredTextWords.push(remainedTextWords[0]);
        remainedTextWords.shift();
        console.log(enteredTextWords);
        entered.textContent = enteredTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        if (remainedTextWords.length <= 0) {
          console.log("クリア");
          if (questions.length == 0) {
            game.classList.add('hidden');
            message.classList.remove('hidden');
          } else {
            setQuestion(currentkey);
          }
        }
      } else {
        console.log("不正解");
        console.log(remainedTextWords);
      }
    }
  });

  replayBtn.addEventListener('click', () => {
    window.location.reload();
  });
};
