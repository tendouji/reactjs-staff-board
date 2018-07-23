import { backgroundConstants } from '../constants';

const initialState = { 
  isPreloaderShown: false,
};

export const backgroundServices = (state = initialState, action) => {
  switch (action.type) {
    case backgroundConstants.PRELOADER:
      return {
        isPreloaderShown: action.val
      };
    default:
      return state
  }
}