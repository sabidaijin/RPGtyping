window.onload = function(){
  const questions = "aiueokakikukeko";
  let remainedTextWords = [];
  let pressedKey = [];
  let counter = 0;
  const setQuestion = () => {
    remainedTextWords = questions.split('');
    remainedTextWords.forEach(character => {
      const characterSpan = document.createElement('span');
      characterSpan.innerText = character;
      remained.appendChild(characterSpan); 
      characterSpan.classList.add('correct');
    });

    inputText.value = '';
  };

  const remained = document.getElementById('remained');
  const inputText = document.getElementById('inputText');
  const game = document.getElementById('game');
  const message = document.getElementById('message');
  const replayBtn = document.getElementById('replayBtn');
  const typeSound = new Audio('./audio/typing-sound.mp3');
  const wrongSound = new Audio('./audio/wrong-sound.mp3');
  
  setQuestion();

  document.addEventListener('keydown', (e) => {
    typeScound.play();
    typeSound.currentTime=0;
    if (e.key === 'Backspace') {
      e.preventDefault();
    } else if (e.key === "Enter") {
      console.log("エンター");
    } else {
      pressedKey.push(e.key);
      const remainedTextWords = remained.querySelectorAll('span');
      remainedTextWords.forEach((characterSpan, index) => {
        const character = characterSpan.innerText;
        if (pressedKey[index] == null){
          characterSpan.classList.remove('incorrect');
          characterSpan.classList.remove('correct');
        } else if (character === pressedKey[index]) {
          characterSpan.classList.add('correct');
          characterSpan.classList.remove('incorrect');
          counter++;
          if (questions.length == counter) {
            game.classList.add('hidden');
            message.classList.remove('hidden');
          }
        } else {
          characterSpan.classList.add('incorrect');
          characterSpan.classList.remove('correct');
          e.preventDefault();
        }
      });

      if (questions.length != counter) {
        // 不正解の場合に counter を減少させ、問題をやり直す
        if (characterSpan.classList.contains('incorrect')) {
          counter--;
        }
      }
    }
  });

  replayBtn.addEventListener('click', () => {
    window.location.reload();
  });
};
