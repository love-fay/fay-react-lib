import {reqPostBrace, promise} from './request';

export default ({path, data, appSn, contentType, acceptType, filename, callback}) => {
    promise(path, reqPostBrace({method: 'POST', params: data, appSn, contentType, acceptType})).then(
        res => res.blob()
    ).then(
        res => {
            if(window.navigator.msSaveOrOpenBlob){
                window.navigator.msSaveOrOpenBlob(res, filename);
            }else{
                const a = document.createElement('a');
                const url = window.URL.createObjectURL(res);
                a.href = url;
                a.download = filename;
                a.click();
                window.URL.revokeObjectURL(url);
            }
            callback && callback();
        }
    );
};