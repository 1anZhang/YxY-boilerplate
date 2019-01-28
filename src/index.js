import _ from 'lodash';
import './style.css';
import YaYa from './avatar.jpg';

function component() {
  let element = document.createElement('div');
  element.innerHTML = _.join(['hello', 'YxY'], ' ');
  element.classList.add('hello');

  let myPic = new Image();
  myPic.src = YaYa;
  element.appendChild(myPic);

  return element;
}

document.body.appendChild(component());
