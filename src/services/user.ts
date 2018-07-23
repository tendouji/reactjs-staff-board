import { config } from "../constants";
import { authHeader } from '../helpers';

const handleResponse = response => {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        console.log('>>> LOGOUT!')
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}


const login = (username, password) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
      console.log('>>> LOGIN SUCCESS: sb-token:', user.token)
      if (user.token) {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return user;
    });
}


const logout = () => {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}


const register = user => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
}


function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
}

export const userService = {
  login,
  logout,
  register,
  /* 
  getAll,
  getById,
  update,
  delete: _delete 
  */
};
