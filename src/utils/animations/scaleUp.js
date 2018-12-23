import addClass from '../addClass';
import {TweenMax} from "gsap";
export default function scaleUp(){
        var el=document.querySelector('.js-page:not(.is-current)');
        addClass(el, 'is-current');
        TweenMax.fromTo(el, 0.8, {
            opacity: 0,
            scale: .8
        }, {
            opacity: 1,
            scale: 1,
            clearProps: 'opacity, scale'
        });
}
