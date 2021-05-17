import {GETDATA} from '../constant/index'

export const getData = (data) =>{
    return{
        type:GETDATA,
        payload:data
    }
}