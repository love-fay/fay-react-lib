export const isIE = (ver) => {
    let b = document.createElement('b');
    b.innerHTML = '<!--[if IE '+ ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
};