/**
 * Create by fay on 2018-10-25 10:06
 */
function banBackSpace(e) {
    const ev = e || window.event;
    //各种浏览器下获取事件对象
    const obj = ev.relatedTarget || ev.srcElement || ev.target || ev.currentTarget;
    //按下Backspace键
    if (ev.keyCode === 8) {
        const tagName = obj.nodeName.toUpperCase(); //标签名称
        //如果标签不是input或者textarea则阻止Backspace
        if (tagName !== 'INPUT' && tagName !== 'TEXTAREA' && obj.getAttribute('contenteditable') === false) {
            return stopIt(ev);
        }
        const tagType = obj.type && obj.type.toUpperCase();//标签类型
        //input标签除了下面几种类型，全部阻止Backspace
        if (tagName === 'INPUT' && (tagType !== 'TEXT' && tagType !== 'TEXTAREA' && tagType !== 'PASSWORD')) {
            return stopIt(ev);
        }
        //input或者textarea输入框如果不可编辑则阻止Backspace
        if ((tagName === 'INPUT' || tagName === 'TEXTAREA') && (obj.readOnly === true || obj.disabled === true)) {
            return stopIt(ev);
        }
    }
}
function stopIt(ev) {
    if (ev.preventDefault) {
        //preventDefault()方法阻止元素发生默认的行为
        ev.preventDefault();
    }
    if (ev.returnValue) {
        //IE浏览器下用window.event.returnValue = false;实现阻止元素发生默认的行为
        ev.returnValue = false;
    }
    return false;
}

export const disabledBackHistory = () => {
    //实现对字符码的截获，keypress中屏蔽了这些功能按键
    document.onkeypress = banBackSpace;
    //对功能按键的获取
    document.onkeydown = banBackSpace;
};
