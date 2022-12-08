import {getUsersAPI } from '../../apis/index'

export const getUsersSaga = () =>{
    const users = yield getUsersAPI()
}