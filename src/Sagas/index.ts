import createSagaMiddleware from "redux-saga"
import {takeEvery} from "redux-saga/effects"
import { FETCH_STUDENTS } from "../Actions/students"
import getStudents from "../api"

const sagaMiddleware= createSagaMiddleware();

export function* rootSaga(){
    yield takeEvery(FETCH_STUDENTS, getStudents)
}
export default sagaMiddleware;