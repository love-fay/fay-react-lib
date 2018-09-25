import {reqPostBrace, promise} from './request';

export default (path, data, appSn, defaultJson, acceptType, filename, callback) => {
    promise(path, reqPostBrace('POST', data, appSn, defaultJson, acceptType)).then(
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