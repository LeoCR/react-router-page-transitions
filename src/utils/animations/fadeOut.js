import removeClass from '../removeClass';
import addClass from '../addClass';
import {TweenMax} from "gsap";
export default function fadeOut(){
    var el=document.querySelector('.is-current');
    addClass(el, 'is-current');
    TweenMax.fromTo(el, 0.8, {
            opacity: 1
        }, {
            opacity: 0.3,
            clearProps: 'opacity, scale',
            onComplete: function () {
                removeClass(el, ['is-onTop', 'is-current']);
            }
    });
}