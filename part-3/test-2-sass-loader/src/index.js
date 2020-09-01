import {Logger} from './libs/logger';
import turtle from './assets/turtle.jpg';
import style from './style.scss';

Logger('Live reload successful ahihi2');

document.body.innerHTML = '<div id="myAvatar"></div>';
document.getElementById("myAvatar").innerHTML = `
  <h1>And his name is...</h1>
  <img src="${turtle}"/>
`;