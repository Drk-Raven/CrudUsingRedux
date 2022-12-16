import {getUsersAPI ,getUserByIdAPI,createUserAPI,updateUserAPI,deleteUserByIdAPI} from '../../apis/index'
import { setUserSlice } from '../slice/user'
import { getUsersSlice ,addUserSlice,editUserSlice,deleteUserSlice} from '../slice/users'
import {put,takeEvery} from 'redux-saga/effects'
import {GET_USERS,GET_USER_BY_ID,CREATE_USERS,UPDATE_USER_BY_ID,DELETE_USER_BY_ID} from './types'

export function* getUsersSaga() {
    const users = yield getUsersAPI()
    yield put(getUsersSlice(users.data))
}

export function* getUserByIdSaga(action) {
    yield getUserByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}
export function* createUserSaga(action) {
    yield createUserAPI(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga(action) {
    console.log("Inside updateSaga Fn",action)
    yield updateUserAPI(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserByIdSaga(action) {
    yield deleteUserByIdAPI(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUsersAsync  ()  {
    yield takeEvery(GET_USERS,getUsersSaga)
    yield takeEvery(GET_USER_BY_ID,getUserByIdSaga)
    yield takeEvery(CREATE_USERS,createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID,updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID,deleteUserByIdSaga)

}