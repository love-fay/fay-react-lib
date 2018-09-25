/**
 * Created by cth on 2017/3/7.
 */
function getHeight(id){
    if(id==undefined || id==null){
        if(/MSIE ([^;]+)/.test(window.navigator.userAgent)){
            return document.documentElement.clientHeight;
        }else{
            return document.getElementsByTagName("body")[0].clientHeight;
        }
    }else{
        return document.getElementById(id).clientHeight;
    }

}

function getBodyWidth(){

    if(/MSIE ([^;]+)/.test(window.navigator.userAgent)){
        return document.documentElement.clientWidth;
    }else{
        return document.getElementsByTagName("body")[0].clientWidth;
    }

}
function getBodyHeight(){
    if(/MSIE ([^;]+)/.test(window.navigator.userAgent)){
        return document.documentElement.clientHeight;
    }else{
        return document.getElementsByTagName("body")[0].clientHeight;
    }
}
function setHeightById(id,newheight){
    document.getElementById(id).style.height=newheight+"px";
}

function setWidthById(id,newwidth){
    document.getElementById(id).style.width=newwidth+"px";
}

function  isIE(){
    /MSIE ([^;]+)/.test(window.navigator.userAgent);
    let version = parseInt(RegExp.$1);
    return version == 8;
}
/**
 * 获取三级菜单
 * @param firstMenu
 * @param secondMenu
 * @param MenuList
 * @returns {*}
 */
function matchMenuInfo(firstMenu,secondMenu,MenuList){
    for(let menu of MenuList){
        if(firstMenu==menu.key && menu.children!=undefined && menu.children!=null){
            for(let childMenu of menu.children){
                if(childMenu.key==secondMenu){
                    if(childMenu.children!=undefined && childMenu.children!=null){
                        return childMenu;
                    }else{
                        return null;
                    }
                }
            }
        }
    }
    return null;
}

function dateFormatter(date){
    var newDate=date.toString();
    if(newDate.length>=5){
        if(newDate.indexOf('.')==-1){
            date=parseFloat((parseFloat(date)/10000).toFixed(2));
            newDate=date.toString();
            if(newDate.indexOf('.')>-1){
                newDate=newDate.split('.')[0].split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('')+"."+newDate.split('.')[1]+"万";
            }else{
                newDate=newDate.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('')+"万";
            }
        }else{
            newDate=newDate.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
        }

    }else{
        newDate=newDate.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
    }
    return newDate;
    //return newDate.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
};
function dataFomttIgnoreTenThousand(date){
    var newDate=date.toString();
    return newDate.split('').reverse().join('').replace(/(\d{3})/g,'$1,').replace(/\,$/,'').split('').reverse().join('');
}

function getPointOnCanvas(canvas,evt){
    let rect=canvas.getBoundingClientRect();
    return {
        x:evt.clientX-rect.left*(canvas.width/rect.width),
        y:evt.clientY-rect.top*(canvas.height/rect.height)
    }
}
function creatRoute(location,newSrc){
    let url="";
    if(location!=null){
        let pathname = location.pathname;
        let paths=pathname.split('/');
        if(paths.length>3){
            for(let i=0;i<paths.length;i++){
                if(i!=paths.length-1){
                    url+=paths[i]+"/";
                }else {
                    url+=newSrc;
                }
            }
        }else{
            url=pathname+'/'+newSrc;
        }
    }else{
        url=newSrc;
    }
    return url;
}

function attachEvent(element,event,evenFun){
    if(isIE()){
        element.attachEvent('on'+event,evenFun,false);
    }else{
        element.addEventListener(event,evenFun,false);
    }
}

function getFZJCActualHeight(){
    let bodyDiv=getHeight();
    if(bodyDiv>850){
        return (bodyDiv-87)
    }else {
        return 763;
    }
}

function date_formatter(date){
    var date_year = date.getFullYear();
    var date_month = date.getMonth() + 1;
    var date_day = date.getDate();
    return date_month+'/'+date_day+'/'+date_year;
}

function formatDate (time, format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}

let common = {
    getHeight: getHeight,
    setHeight:setHeightById,
    setWidth:setWidthById,
    isIE:isIE,
    getBodyWidth:getBodyWidth,
    matchMenuInfo:matchMenuInfo,
    dateFormatter:dateFormatter,
    dataFomttIgnoreTenThousand:dataFomttIgnoreTenThousand,
    getPointOnCanvas:getPointOnCanvas,
    creatRoute:creatRoute,
    attachEvent:attachEvent,
    getFZJCActualHeight:getFZJCActualHeight,
    date_formatter:date_formatter,
    formatDate:formatDate
};

export default common;