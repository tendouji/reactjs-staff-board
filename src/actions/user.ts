import { history } from "../helpers";
import { userConstants } from "../constants";
import { alertActions } from "./alert";
import { userService } from "../services";
import { backgroundActions } from "./background";


const login = (username, password) => {
  let request = user => { return { type: userConstants.LOGIN_REQUEST, user } },
    success = user => { return { type: userConstants.LOGIN_SUCCESS, user } },
    failure = error => { return { type: userConstants.LOGIN_FAILURE, error } };

  return dispatch => {
    dispatch(request({ username }));

    userService.login(username, password)
      .then(
        user => {
          dispatch(backgroundActions.togglePreloader(false));
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(backgroundActions.togglePreloader(false));
          dispatch(failure(error.toString()));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}

const logout = () => {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

const register = (user) => {
  let request = user => { return { type: userConstants.REGISTER_REQUEST, user } },
    success = user => { return { type: userConstants.REGISTER_SUCCESS, user } },
    failure = error => { return { type: userConstants.REGISTER_FAILURE, error } };

  return dispatch => {
    dispatch(request(user));

    userService.register(user)
      .then(
        user => {
          dispatch(success(user));
          history.push('/login');
          dispatch(backgroundActions.togglePreloader(false));
          dispatch(alertActions.success('Registration successful'));
        },
        error => {
          dispatch(failure(error.toString()));
          dispatch(backgroundActions.togglePreloader(false));
          dispatch(alertActions.error(error.toString()));
        }
      );
  };
}


export const userActions = {
  login,
  logout,
  register,
  /*
  getAll,
  delete: _delete
  */
};