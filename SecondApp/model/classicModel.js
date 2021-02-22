import {HTTP} from '../utils/http';

class ClassicModel extends HTTP{
    static LASEST_INDEX_KEY = "classicMode_lastest_index";
    getLatestRequest(sCallback){
        this.request({
            url: '/classic/latest',
            success: res => {
                this._setLatestIndex(res.index)
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

    getNextRequest(index,sCallback){
        this.request({
            url: `/classic/${index}/next`,
            success: res => {
                sCallback && sCallback(res);
            }
        })
    }

    isFirst(index){
        return index === 1;
    }
    isLastest(index){
        console.log(index,"<====>",this._getLatestIndex())
        return index === this._getLatestIndex();
    }

    _setLatestIndex(index){
        wx.setStorageSync(ClassicModel.LASEST_INDEX_KEY,index);
    }
    _getLatestIndex(index){
       return wx.getStorageSync(ClassicModel.LASEST_INDEX_KEY);
    }
}

export{
    ClassicModel
}