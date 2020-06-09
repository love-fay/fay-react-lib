/**
* 获取传递的参数
* @param {string}name -参数名
* @returns {*} -返回参数值或者null
*/
export const getQueryString = (name: string) => {
   var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
   var r = window.location.search.substr(1).match(reg);
   if (r !== null) {return decodeURI(r[2]);} return null;
}
