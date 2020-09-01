import { combineReducers } from 'redux';
import counter from './counter';
import counter, { counterSaga } from './counter';
import sample from './sample';
import loading from './loading';
const rootReducer = combineReducers({
  counter,
  sample,
  loading
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할을 합니다.
  yield all([counterSaga()]);
}



export default rootReducer;