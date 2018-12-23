export default function addClass(el, className) {
    try {
        [].concat(className).forEach(function (n) {
            el.classList.add(n);
        });
        console.log('addClass ');
    } catch (error) {
        console.log('Error in addClass()');
        console.error(error);
    }
}