//import _ from 'lodash';
import add from 'bee_add';


/* function component () {
  var element = document.createElement('div');

  //lodash is required for the next line to work
  element.innerHTML = _.join(['Hello','xm946300'], ' ');

  return element;
} */

function component2 () {
  var element = document.createElement('div');

  element.innerHTML = '计算的结果是：'+add(99,1);

  return element;
}

//document.body.appendChild(component());
document.body.appendChild(component2());