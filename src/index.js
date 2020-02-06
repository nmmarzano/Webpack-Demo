import _ from 'lodash';
import './style.scss';
import Logo from './logo_bp.ico';

function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myLogo = new Image();
    myLogo.src = Logo;

    element.appendChild(myLogo);

    return element;
}

document.body.appendChild(component());
