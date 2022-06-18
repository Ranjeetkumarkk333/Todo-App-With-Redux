import { call } from "redux-saga/effects";
import getStudents from "../api";

export function* getStudentsSaga(): Generator{
    const data= yield call(getStudents);
}