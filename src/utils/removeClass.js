export default function removeClass(el, className) {
    try {
        [].concat(className).forEach(function (n) {
            el.classList.remove(n);
        });
        console.log('removeClass executed');
    } 
    catch (error) {
        console.log('Error in removeClass()');
        console.error(error);
    }

}
