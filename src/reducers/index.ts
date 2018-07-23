import { combineReducers } from 'redux';

import { authentication } from './authentication';
import { backgroundServices } from './background';
import { registration } from './registration';
// import { users } from './users.reducer';
import { alert } from './alert';

const rootReducer = combineReducers({
  authentication,
  backgroundServices,
  registration,
  /* 
  users,
  */
  alert 
});

export default rootReducer;