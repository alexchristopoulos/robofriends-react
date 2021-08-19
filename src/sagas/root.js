import { put, takeEvery, all, delay } from 'redux-saga/effects';

function* fetchRobots() {
    try{
        let robots = [];

        yield delay(1000);

        yield fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=> res.json())
            .then((data) => robots = data);

        yield put({type: 'robots/fetchSuccess', payload: robots})
    } catch(err) {

        yield put({type: 'robots/fetchError', payload: []})
    }
}

function* watchFetchRobots() {
    yield takeEvery('robots/requestRobots', fetchRobots);
}

export default function* rootSaga() {
    yield all([
        watchFetchRobots()
    ])
};