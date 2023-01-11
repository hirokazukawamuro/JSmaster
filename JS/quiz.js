// クイズの選択肢と答え
const quiz = [
  {
    answers: [
      'モンキー・D・ルフィ','ロロノア・ゾロ','ニコ・ロビン','サンジ'
    ],
    correct:'ニコ・ロビン'
  }, 
  {
    answers: [
      'キャプテン・クロ','フォクシー','ヨコヅナ','オイモ'
    ],
    correct:'オイモ'
  },
  {
    answers: [
      'トラファルガー・ロー','ボア・ハンコック','ハモンド','チェス'
    ],
    correct:'チェス'
  },
  {
    answers: [
      'ブルック','フルボディ','クロッカス','エネル'
    ],
    correct:'クロッカス'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $btn = document.getElementsByClassName('btn');

//クイズの問題
const setupQuiz = () =>{
  for (let i = 0;i <$btn.length;i++){
    $btn[i].textContent = quiz[quizIndex].answers[i];
  } 
}
setupQuiz();

//ボタンを押したら正誤判定
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  }
  else {
    window.alert('不正解！');
  }
  quizIndex++;
  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert('終了！');
    const $main = document.getElementById('main');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'あなたのスコアは、'+ score + '/' + quizLength + '点です！';
    $main.appendChild(h1);
  }
}

  for (let i = 0;i <$btn.length;i++){
    $btn[i].addEventListener('click',(e) =>{
      clickHandler(e);
    }); 
}
const pics_src = new Array("../IMG/oimo.jpg","../IMG/cyesu.jpg","../IMG/kurokkasu.jpg","../IMG/otukare.png");
// ボタン押すと設問数増える
let num = 2;
function changeButton(){
  document.getElementById('target').textContent =`第 ${num} 問`;
  document.getElementById('img_change').src=pics_src[quizIndex];
  num ++;
  if(num ===6){
    document.getElementById('target').textContent ='間違えたら海賊王にはなれませんねぇ。。。';
    document.getElementById('question').textContent =' ';
  }
  
}








