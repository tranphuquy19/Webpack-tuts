import {Logger} from './libs/logger';
import turtle from './assets/turtle.jpg';

Logger('Live reload successful ahihi');

document.body.innerHTML = '<div id="myAvatar"></div>';
document.getElementById("myAvatar").innerHTML = `
  <h1>And his name is...</h1>
  <img src="${turtle}"  style="max-width: 35vw;"/>
`;