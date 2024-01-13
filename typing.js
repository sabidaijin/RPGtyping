/* 問題文を用意


それをランダムでwordに入れる
受け取った値を問題文と一文字ずつチェックする処理を作る
全て与えられた文字が打ち込まれたら問題文を新しくする処理
 */
/* 'use strict' */

window.onload = function(){

  const questions = [
    'javascript',
    'window',
    'getelement'
  ];
  
  const setQestion=()=>{
  /*"""問題文のセットをする関数"""*/
    let currentkey;
    let currenttext;
    // 配列questionsからランダムに一つ選んで、新しい問題を表示する
    currentkey=Math.floor(Math.random()*questions.length);
    currenttext=questions[currentkey];

    // 一度選ばれた問題を配列から削除する
    questions.splice(currentkey,1);
    console.log(questions);
   
    // 現在の問題文のhtml側をリセットする
    entered.textContent="";
    remained.textContent=currenttext;
    // javascript側もリセットする
    remainedTextWords=[];
    remainedTextWords=currenttext.split('')
    enteredTextWords=[];

    // 入力されたフォームの値をリセットする(form要素なので他と違ってvalue)
    inputText.value='';
    
  };
 
  const entered = document.getElementById('entered');
  const remained = document.getElementById('remained');
  const inputText = document.getElementById('inputText');

  const game = document.getElementById('game');
  const message = document.getElementById('message');
  const replayBtn = document.getElementById('replayBtn');

  
  let remainedTextWords = remained.textContent.split('');
  let enteredTextWords = [];

 setQestion();



document.addEventListener('input',(e)=>{
  if(e.data==remainedTextWords[0]){
    console.log("正解");
    enteredTextWords.push(remainedTextWords[0]);
    remainedTextWords.shift();
    console.log(enteredTextWords);
    entered.textContent=enteredTextWords.join('');
    remained.textContent=remainedTextWords.join('');
    if(remained.textContent.length<=0){
      console.log("クリア");
      if(questions.length<=0){
        game.classList.add('hidden');
        message.classList.remove('hidden');
      }else{
      setQestion();
    }}

  }else{

    console.log("不正解");

}})
// 終了時に出てくるボタン。押したら画面がリロードされる
 replayBtn.addEventListener('click', () => {
        window.location.reload();
    });





}

