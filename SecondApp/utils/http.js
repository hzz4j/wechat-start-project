import {config} from '../config';

class HTTP{
    request(params){
        if(!params.method){
            params.method = 'GET'
        }

        wx.request({
            url: `${config.api_base_url}/${params.url}`,
            data: params.data,
            method: params.method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            header: {
                'content-type': 'applicaiton/json',
                'appkey': config.appkey
            }, // 设置请求的 header
            success: (res) => {
                console.log(res)
                let code = res.statusCode.toString();
                if(code.startsWith('2')){
                    params.success(res.data)
                }else{
                    const errorObj = {
                        code: res.data.error_code,
                        msg: res.data.msg
                    }
                    this._show_error(errorObj);
                }
            },
            fail: (err) => {
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