import _ from 'lodash';
import './style.scss';
import Icon from './logo_bp.ico';
import XmlData from './data.xml';
import CsvData from './data.csv';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    element.appendChild(btn);

    console.log('XmlData', XmlData);
    console.log('CsvData', CsvData);

    return element;
}

document.body.appendChild(component());
