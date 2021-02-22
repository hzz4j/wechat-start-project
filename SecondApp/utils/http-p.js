import {config} from '../config';

const tips = {
    1: '抱歉，出现了一个错误',
    1000: '传参错误',
    1005:'appkey无效，请前往www.7yue.pro申请',
    3000:'期刊不存在'
}

class HTTP{

    request({url,data={},method="GET"}){
        return new Promise((resolve,reject) =>{
            this._request(url,resolve,reject,data,method);
        });
    }
    
    _request(url,resolve,reject,data={},method="GET"){

        wx.request({
            url: `${config.api_base_url}${url}`,
            data: data,
            method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type':'application/json',
                "appkey": config.appkey
            }, // 设置请求的 header
            success: (res) => {
                console.log(res)
                let code = res.statusCode.toString();
                if(code.startsWith('2')){
                    resolve(res.data);
                }else{
                    reject();
                    const code = res.data.error_code;
                    const errorObj = {
                        code: code,
                        msg: tips[code]
                    }
                    this._show_error(errorObj);
                }
            },
            fail: (err) => {
                reject();
                this._show_error({
                    msg: '抱歉，出现一个错误'
                })
            },
            complete: function() {
                // complete
            }
        })
    }

    _show_error(error){
        wx.showToast({
            title: error.msg,
            icon: 'none',
            duration: 2000
        })
    }
}

export{
    HTTP
}