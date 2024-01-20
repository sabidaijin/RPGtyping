document.addEventListener("DOMContentLoaded", function () {

  // クエリパラメータからステージ番号を取得し、ステージに合わせた問題と文章をを設定
  const urlParams = new URLSearchParams(window.location.search);
  const stageNumber = urlParams.get("stage");
  let questions="";

  if (stageNumber === "1") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ1: Typescriptの基本を学ぼう";
    questions = `function generateSyllables(): string[] {縁→const bases = ['a', 'i', 'u', 'e', 'o'];縁→const prefixes = ['', 'k', 's', 't']; }`;
  } else if (stageNumber === "2") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ2: Typescriptの応用を学ぼう";
    questions = "kakikkukeko";
  } else if (stageNumber === "3") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ3: さらに進んだ内容を学ぼう";
    questions = "さらに進んだ問題";
  } else if (stageNumber === "4") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ4: データベースとの連携を学ぼう";
    questions = "a";
  } else if (stageNumber === "5") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ5: フロントエンド開発の基本";
    questions = "フロントエンド問題";
  } else if (stageNumber === "6") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ6: セキュリティとベストプラクティス";
    questions = "セキュリティ問題";
  } else if (stageNumber === "7") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ7: クラウドコンピューティングの基礎";
    questions = "クラウド問題";
  } else if (stageNumber === "8") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ8: マルチプラットフォーム開発";
    questions = "マルチプラットフォーム問題";
  } else if (stageNumber === "9") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ9: アプリケーションの最適化";
    questions = "最適化問題";
  } else if (stageNumber === "10") {
    const stageContent = document.getElementById("stageContent");
    stageContent.innerHTML = "ステージ10: プロジェクトの総仕上げ";
    questions = "総仕上げ問題";
  } 
  
// 他のステージに対する条件分岐も追加

  // ""”””問題を設定”””"



 
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
    if (character==='縁'){
      let enter=document.createElement('br');
      remained.appendChild(enter);
      return;
      
    }
  // タブキーの処理まだできない
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
    let currentStage = parseInt(urlParams.get('stage'));
  
    // ステージ番号を1増やす
    let nextStage = currentStage - 1;
  
    // 新しいステージのURLを作成
    window.location.href = 'game.html?stage=' + nextStage;
  }
  
});



