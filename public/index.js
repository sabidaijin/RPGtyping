document.addEventListener("DOMContentLoaded", function () {

    let remainedTextWords = [];
  
    //  改行と、スペース、タブを入れるべきところを処理する
    
      const remained = document.getElementById('remained');
      const inputText = document.getElementById('inputText');
      const typeSound = new Audio('./audio/typing-sound.mp3');
      const wrongSound = new Audio('./audio/wrong.mp3');
    
      const setQuestion = () => {
      const questions = "Type Sprint";
      remainedTextWords = questions.split('');
      
      remained.innerHTML = ''; // 以前のテキストを削除
      
      remainedTextWords.forEach(character => {
        const characterSpan = document.createElement('span');
        characterSpan.innerHTML = character;
        remained.appendChild(characterSpan);
        characterSpan.classList.add('yet');
      });
      inputText.value = '';
    };
  
    
    let index = 0;
    document.addEventListener('keydown', (e) => {
      const allowedKeysPattern = /^[a-zA-Z0-9!@#$%^&*=()_+{}\[\]:;<>,.?~|'" \s]+$/;
        if (e.key === 'Enter') {
          typeSound.play();
          typeSound.currentTime = 0;
          // Enterキーが押されたとき、ボタンのクリックイベントをトリガー
          document.querySelector('.startbotton').click();
        }
    
      // 禁止文字の処理
      if (e.key === 'Enter' || e.key === 'Tab' || e.key === 'Backspace' || e.key === 'Shift'||e.key === 'Meta' ||e.key==='Eisu'||e.key==='KanjiMode'||e.key==='Control'||e.key==='Alt') {
        return false;
      }
      
      console.log(e.key);
      
      if (allowedKeysPattern.test(e.key)) {
        typeSound.play();
        typeSound.currentTime = 0;
        
        const remainedTextWords = remained.querySelectorAll('span');
        
        let characterSpan = remainedTextWords[index];
        const character = characterSpan.innerText;
        
        if (e.key === character) {
          characterSpan.classList.remove('yet');
          characterSpan.classList.remove('incorrect');
          characterSpan.classList.add('correct');
          index++;
          
          if (remainedTextWords.length === index) {
            document.querySelector('.startbotton').click();
          }
        } else {
          characterSpan.classList.remove('yet');
          characterSpan.classList.remove('correct');
          characterSpan.classList.add('incorrect');
          wrongSound.play();
          wrongSound.currentTime = 0;
        }
      }else{
        return false;
      }
    });
    

 // アニメーションを開始するためにこの関数を呼び出す


 let kusaElement0 = document.getElementById('kusa0');
 let kusaElement1 = document.getElementById('kusa1');
 let kusaElement2 = document.getElementById('kusa2');
 let monsterElement = document.getElementById('monster0');
 let step = 20;
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
         console.log(this.currentPosition);
         // currentPositionが画面の左端に到達したかチェック
         if (this.currentPosition > 1700) {
             // アニメーションが終了したら初期位置に戻す
             this.currentPosition = 0; // 初期位置にリセット
             Element.style.right = this.currentPosition + 'px';
         }
         requestAnimationFrame(() => this.animate(Element));
     }
 }
 
 let animationkusa = new Animation();
 let animationkusa1 = new Animation();
 let animationkusa2 = new Animation();
 let animationmonster = new Animation();


 window.addEventListener("load", function () {
  setTimeout(() => executeAfter5Seconds(animationkusa, kusaElement0), 50); // 5秒後にexecuteAfter5Seconds関数を実行
  setTimeout(() => executeAfter5Seconds(animationkusa1, kusaElement1), 700); // 5秒後にexecuteAfter5Seconds関数を実行
  setTimeout(() => executeAfter5Seconds(animationkusa2, kusaElement2), 1000); // 5秒後にexecuteAfter5Seconds関数を実行
  
  setTimeout(() => executeAfter5Seconds(animationmonster, monsterElement), 1000); // 5秒後にexecuteAfter5Seconds関数を実行
});

setQuestion();


});


