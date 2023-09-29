import html from '../../assets/svg/html.svg'
import css from '../../assets/svg/css.svg'


import javascript from '../../assets/svg/javascript.svg'
import nextJS from '../../assets/svg/nextJS.svg'
import react from '../../assets/svg/react.svg'
import bootstrap from '../../assets/svg/bootstrap.svg'
import mongoDB from '../../assets/svg/mongoDB.svg'
import tailwind from '../../assets/svg/tailwind.svg'
import firebase from '../../assets/svg/firebase.svg'
import git from '../../assets/svg/git.svg'
import premierepro from '../../assets/svg/premierepro.svg'
import figma from '../../assets/svg/figma.svg'
import microsoftoffice from '../../assets/svg/microsoftoffice.svg'
import nodejs from '../../assets/svg/Nodejs.svg'


import canva from '../../assets/svg/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'css':
            return css;
        case 'html':
            return html;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'tailwind':
            return tailwind;
        case 'firebase':
            return firebase;
        case 'nodejs':
            return nodejs;
        case 'git':
            return git;
        case 'premiere pro':
            return premierepro;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}
