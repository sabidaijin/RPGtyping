document.addEventListener("DOMContentLoaded", function () {

  // クエリパラメータからステージ番号を取得し、ステージに合わせた問題と文章をを設定
  const urlParams = new URLSearchParams(window.location.search);
  const stageNumber = urlParams.get("stage");
  let questions="";

  if (stageNumber === "1") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "🌄 ステージ1: 冒険の始まり-Hello,world-";
    // questions = 'let message: string = "Hello, World!";○console.log(message);';
    questions="a"

  } else if (stageNumber === "2") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "🌿 ステージ2: 旅立ち-型宣言-";
    questions = 'let num: number = 1;○let str1: string = \'a\';○let str2: string = \'b\';○let str3: string = \'c\';○let bool = true;○let num = 1;○let str1 = \'a\';○let str2 = \'b\';○let str3 = \'c\';○let h;○h = \'a\';○h = 1;';
   

  } else if (stageNumber === "3") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ3: 草原地帯-for文-";
    questions = 'for (initialization; condition; increment/decrement) {○→statement(s)○};';
  } else if (stageNumber === "4") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ4: 草原地帯のボス-FIZZBUZZ-";
    questions = 'for (let i = 1; i <= 100; i++) {○→if (i % 15 === 0) {○→→console.log("FizzBuzz");○→} else if (i % 3 === 0) {○→→console.log("Fizz");○→} else if (i % 5 === 0) {○→→console.log("Buzz");○→} else {○→→console.log(i);○→}○}'

  } else if (stageNumber === "5") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ5: 砂漠地帯-アロー関数-";
    questions = 'for (initialization; condition; increment/decrement) {○→statement(s)○};';
  } else if (stageNumber === "6") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ6: 砂漠地帯のボス-クラス-";
    questions = 'class Person {○→name: string;○→age: number;○→constructor(name: string, age: number) {○→→this.name = name;○→→this.age = age;○→}○}○○const person = new Person("John", 20);○console.log(person.name);○console.log(person.age);'
  } else if (stageNumber === "7") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ7: 氷河地帯-例外処理-";
    questions = 'try {○→// 例外が発生する可能性のある処理○} catch (e) {○→// 例外が発生した場合の処理○} finally {○→// 例外の有無に関わらず実行される処理○}';


  } else if (stageNumber === "8") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ8: 氷河地帯のボス-ユニオン型-";
    questions = 'type UnionType = string | number | boolean;○○const unionTypeVariable: UnionType = "string";○○function unionTypeFunction(○→unionTypeVariable: UnionType) {○→console.log(unionTypeVariable);○}○○unionTypeFunction("string");○unionTypeFunction(1);○unionTypeFunction(true);';
  } else if (stageNumber === "9") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ9: 火山地帯-リテラル型-";
    questions = 'type LiteralType = "string" | 1 | true;○○const literalTypeVariable: LiteralType = "string";○○function literalTypeFunction(○→literalTypeVariable: LiteralType) {○→console.log(literalTypeVariable);○}○○literalTypeFunction("string");○literalTypeFunction(1);○literalTypeFunction(true);';
  } else if (stageNumber === "10") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ10: 火山地帯のボス-エニー型-";
    questions = 'type AnyType = any;○○const anyTypeVariable: AnyType = "string";○○function anyTypeFunction(○→anyTypeVariable: AnyType) {○→console.log(anyTypeVariable);○}○○anyTypeFunction("string");○anyTypeFunction(1);○anyTypeFunction(true);○anyTypeFunction({});';
    
  } else if (stageNumber === "11") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ11: 魔界-コールバック関数-";

    questions = 'function callbackFunction(○→callback: () => void) {○→callback();○}○○callbackFunction(() => {○→console.log("callback function");○});';
  } else if (stageNumber === "12") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ12: 魔王-プロミスを用いた非同期処理-";
    questions = 'function promiseFunction(○→promise: Promise<void>) {○→promise.then(() => {○→→console.log("promise function");○→});○}○○promiseFunction(new Promise((resolve) => {○→resolve();○}));';
  } 






 
  let remainedTextWords = [];
  
//  改行と、スペース、タブを入れるべきところを処理する

  const remained = document.getElementById('remained');
  const inputText = document.getElementById('inputText');
  const game = document.getElementById('game');
  const message = document.getElementById('message');
  const replayBtn = document.getElementById('replayBtn');
  const typeSound = new Audio('./audio/typing-sound.mp3');
  const wrongSound = new Audio('./audio/wrong.mp3');

  const setQuestion = () => {
    // 問題文を一文字ずつ区切ったものを配列に格納
    remainedTextWords = questions.split('');
    // 区切ったものの一つずつをキャラクターに入れてspanタグで囲む
    remainedTextWords.forEach(character => {
    // enterキーの処理
    if (character==='○'){
      let enter=document.createElement('br');
      remained.appendChild(enter);
      return;
      
    }
  // タブキーの処理まだ
   if (character === '→') {
    const tab = document.createElement('div');
    tab.innerText = '\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'; // 空白文字のコード（&nbsp;）を挿入
    remained.appendChild(tab);
    tab.classList.add('tab');
    return;
  } 

    const characterSpan = document.createElement('span');
    characterSpan.innerHTML = character;
    remained.appendChild(characterSpan);
    characterSpan.classList.add('yet');
    });

    inputText.value = '';
  };

  setQuestion();
  let index = 0;

  document.addEventListener('keydown', (e) => {
    // キー入力された時の処理
    const allowedKeysPattern = /^[a-zA-Z0-9!@#$%^&*=()_+{}\[\]:;<>,.?~|'" \s]+$/;
    // 禁止文字の処理
    if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Shift'||e.key === 'Meta' ||e.key==='Eisu'||e.key==='KanjiMode'||e.key==='Control'||e.key==='Alt') {
      return false;
    }
    
    if (allowedKeysPattern.test(e.key)) {
      typeSound.play();
      typeSound.currentTime = 0;
      
      const remainedTextWords = remained.querySelectorAll('span');
      
      
      let characterSpan=remainedTextWords[index];
      const character = characterSpan.innerText;
      // もしも入力がnullだったら、正解不正解のクラスを削除する
        if (e.key== null) {
          characterSpan.classList.remove('yet');
          characterSpan.classList.remove('incorrect');
          characterSpan.classList.remove('correct');
          // もしも入力が正解だったら、正解のクラスを追加する
        } else if (character == e.key) {
          characterSpan.classList.remove('yet');
          characterSpan.classList.add('correct');
          characterSpan.classList.remove('incorrect');
          index++;
          console.log(index);
          console.log(remainedTextWords.length);
          // 入力が正解の場合、counter を増加させます
          if (remainedTextWords.length == index) {
            game.classList.add('hidden');
            message.classList.remove('hidden');
          }
        } else if (character != e.key){
          characterSpan.classList.remove('yet');
          characterSpan.classList.remove('correct');
          characterSpan.classList.add('incorrect');
        
          wrongSound.play();
          wrongSound.currentTime = 0;
    
        }
      }else{
        concole.log('入力できない文字が含まれています')
        return false;
      }
    
  });

  // ゲーム終了時のボタンを出す処理
  replayBtn.addEventListener('click', () => {
    window.location.reload();
  });

  window.goToNextStage =function() {
    // 現在のURLからクエリパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    // ステージ番号を取得し、数値に変換
    let currentStage = parseInt(urlParams.get('stage'));
  
    // ステージ番号を1増やす
    let nextStage = currentStage + 1;
  
    // 新しいステージのURLを作成
    window.location.href = 'game.html?stage=' + nextStage;
  }

  window.backToBeforeStage =function() {
    // 現在のURLからクエリパラメータを取得
    const urlParams = new URLSearchParams(window.location.search);
    // ステージ番号を取得し、数値に変換
    if (stageNumber === "1"){
      return;
    }
    let currentStage = parseInt(urlParams.get('stage'));
  
    // ステージ番号を1増やす
    let nextStage = currentStage - 1;
  
    // 新しいステージのURLを作成
    window.location.href = 'game.html?stage=' + nextStage;
  }
  
});

 // アニメーションを開始するためにこの関数を呼び出す


 let TreeElement0 = document.getElementById('Tree0');

 let TreeElement1 = document.getElementById('Tree1');
 let HouseElement0 = document.getElementById('House0');
 let HouseElement1 = document.getElementById('House1');

 let step = 15;
 function executeAfter5Seconds(instance,element) {
  instance.animate(element);
  element.style.display = 'block';
}
 class Animation {
     constructor() {
         this.currentPosition = 0;
     }
 
     animate(Element) {
         this.currentPosition += step; // ステップの距離だけ左に移動
         Element.style.right = this.currentPosition + 'px';
  
         // currentPositionが画面の左端に到達したかチェック
         if (this.currentPosition > 900) {
             // アニメーションが終了したら初期位置に戻す
             this.currentPosition = 0; // 初期位置にリセット
             Element.style.right = this.currentPosition + 'px';
         }
         requestAnimationFrame(() => this.animate(Element));
     }
 }
 
 let animationTree = new Animation();
 let animationTree1 = new Animation();
 let animationHouse = new Animation();
 let animationHouse1 = new Animation();


 window.addEventListener("load", function () {
  setTimeout(() => executeAfter5Seconds(animationTree, TreeElement0), 0); // 5秒後にexecuteAfter5Seconds関数を実行
  setTimeout(() => executeAfter5Seconds(animationTree1, TreeElement1), 250); // 5秒後にexecuteAfter5Seconds関数を実行
  setTimeout(() => executeAfter5Seconds(animationHouse, HouseElement0), 550); // 5秒後にexecuteAfter5Seconds関数を実行
  setTimeout(() => executeAfter5Seconds(animationHouse1, HouseElement1), 800); // 5秒後にexecuteAfter5Seconds関数を実行

  
});



