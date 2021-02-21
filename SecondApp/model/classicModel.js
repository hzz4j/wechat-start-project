import {HTTP} from '../utils/http';

class ClassicModel extends HTTP{
    getRequest(sCallback){
        this.request({
            url: '/classic/latest',
            success: res => {
                //  回调函数剥夺了return的能力
                sCallback(res)
            }
        })

        //  return  // 回调函数剥夺了return的能力
    }
}

export{
    ClassicModel
}