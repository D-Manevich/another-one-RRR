import { takeEvery, put } from 'redux-saga/effects'
import { RESET, changeText } from 'app/otherReducerShit'

function* resetFormSaga() {
  yield put(changeText('saga work!!!'))
}

export default function* rootSaga() {
  yield takeEvery(RESET, resetFormSaga)
}
