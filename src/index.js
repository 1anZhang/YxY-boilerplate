import _ from 'lodash';
import './style.css';
import YaYa from './avatar.jpg';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'YxY', '!'], ' ');
  element.classList.add('hello');

  let myPic = new Image();
  myPic.src = YaYa;
  element.appendChild(myPic);

  let btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

// 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
let element = component(); 
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}