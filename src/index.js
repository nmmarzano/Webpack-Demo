import _ from 'lodash';
import './style.scss';
import Icon from './logo_bp.ico';
import XmlData from './data.xml';
import CsvData from './data.csv';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log('XmlData', XmlData);
    console.log('CsvData', CsvData);

    return element;
}

document.body.appendChild(component());
