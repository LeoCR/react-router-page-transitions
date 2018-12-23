import removeClass from '../removeClass';
import addClass from '../addClass';
import {TweenMax} from "gsap";
export default function moveFromLeft(){
        var el=document.querySelector('.js-page:not(.is-current)');
        addClass(el, ['is-onTop', 'is-current']);
        TweenMax.fromTo(el, 0.8, {
                xPercent: -100
            }, {
                xPercent: 0,
                clearProps: 'xPercent',
                onComplete: function () {
                    removeClass(el, ['is-onTop']);
                }
        });
}