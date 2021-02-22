import {HTTP} from '../utils/http';

class ClassicModel extends HTTP{
    getLatestRequest(sCallback){
        this.request({
            url: '/classic/latest',
            success: res => {
                //  回调函数剥夺了return的能力
                sCallback && sCallback(res)
            }
        })
        //  return  // 回调函数剥夺了return的能力
    }

    getPreviousRequest(index,sCallback){
        this.request({
            url: `/classic/${index}/previous`,
            success: res => {
                sCallback && sCallback(res);
            }
        })
    }
}

export{
    ClassicModel
}