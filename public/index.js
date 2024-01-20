document.addEventListener("DOMContentLoaded", function () {

    let remainedTextWords = [];
  
    //  改行と、スペース、タブを入れるべきところを処理する
    
      const remained = document.getElementById('remained');
      const inputText = document.getElementById('inputText');
      const typeSound = new Audio('./audio/typing-sound.mp3');
      const wrongSound = new Audio('./audio/wrong.mp3');
    
    const setQuestion = () => {
      const questions = "type the word";
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
  
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        // Enterキーが押されたとき、ボタンのクリックイベントをトリガー
        document.querySelector('.startbotton').click();
      }
    });
  
    let index = 0;
    document.addEventListener('keydown', (e) => {
      const allowedKeysPattern = /^[a-zA-Z0-9!@#$%^&*=()_+{}\[\]:;<>,.?~|'" \s]+$/;
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
    
    setQuestion();
  });
  