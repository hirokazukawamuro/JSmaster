let startGreet = window.prompt('こんにちは！お名前を教えてね！');
let userName = document.getElementById('subTitle');
let  welcome = document.createElement('p');
welcome.textContent = ` ${startGreet}さん、がんばれ～`;
userName.appendChild(welcome);  

