import removeClass from '../removeClass';
import addClass from '../addClass';
import {TweenMax} from "gsap";
export default function moveToRight(){
        var el = document.querySelector('.is-current');
        addClass(el, ['is-onTop', 'is-current']);
        TweenMax.fromTo(el, 0.8, {
            xPercent: 0
        }, {
            xPercent: -100,
            clearProps: 'xPercent',
            onComplete: function () {
                removeClass(el, ['is-onTop', 'is-current']);
            }
        });
}