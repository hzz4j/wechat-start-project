import {HTTP} from '../utils/http';

class ClassicModel extends HTTP{
    static LASEST_INDEX_KEY = "classicMode_lastest_index";
    getLatestRequest(sCallback){
        this.request({
            url: '/classic/latest',
            success: res => {
                this._setLatestIndex(res.index)
                wx.setStorageSync(this._getKey(res.index),res);
                //  回调函数剥夺了return的能力
                sCallback && sCallback(res)
            }
        })
        //  return  // 回调函数剥夺了return的能力
    }

    getClassicRequest(index,nextOrPrevious,sCallback){
        const pathObj = {
            "next":"next",
            "previous":"previous"
        }

        const key = nextOrPrevious==="next" ?
                         this._getKey(index+1):this._getKey(index-1);

        const classic = wx.getStorageSync(key);

        if(!classic){   //  缓存中不存在则请求服务器
            this.request({
                url: `/classic/${index}/${pathObj[nextOrPrevious]}`,
                success: res => {
                    //  设置缓存
                    wx.setStorageSync(this._getKey(res.index),res);
                    sCallback && sCallback(res);
                }
            })
        }else{
            //  返回缓存中的数据
            console.log("缓存命中");
            sCallback && sCallback(classic);
        }
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
    _getKey(index){
        return "classic-"+index;
    }
}

export{
    ClassicModel
}