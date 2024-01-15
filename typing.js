/* 'use strict' */

window.onload = function(){
  let currentkey = 0;
  const questions = [
    "const greeting: string = 'Hello';",
    "const target: string = 'world!';",
    "console.log(greeting + target);"
  ];


  const setQuestion = (currentkey) => {
    let currenttext;
    currenttext = questions[currentkey];
    questions.splice(currentkey, 1);
    console.log(currenttext);
    
    remained.innerHTML = currenttext;

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
        
        entered.innerHTML= enteredTextWords.join('');
        remained.textContent = remainedTextWords.join('');

        if (remainedTextWords.length <= 0) {
          console.log("クリア");
          entered.innerHTML+= "<br>";
          enteredTextWords.push("<br>");
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


// ここからthree.jsのコード
// Path: three.js
/* 'use strict' */
let camera, scene, renderer, cube;// カメラ、シーン、レンダラー、立方体



// 3Dコンテンツのセットアップ
function setup3DContent() {
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.set(0, 0, 600);

    scene = new THREE.Scene();

    let dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    let ambLight = new THREE.AmbientLight(0x333333);
    scene.add(ambLight);

    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three').appendChild(renderer.domElement);

    let geometry = new THREE.BoxGeometry(200, 200, 200);
    let material = new THREE.MeshLambertMaterial({ color: 0x00ddff });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}

// アニメーションループ
function animate() {
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    cube.rotation.z += 0.002;

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

window.onload = () => {
    setup3DContent();
    animate();
};