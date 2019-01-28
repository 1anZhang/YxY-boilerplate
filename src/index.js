import _ from 'lodash';
import './style.css';
import YaYa from './avatar.jpg';
import printMe from './print.js';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'YxY'], ' ');
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

document.body.appendChild(component());
