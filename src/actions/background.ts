import { backgroundConstants } from '../constants';

export const backgroundActions = {
  togglePreloader,
};

function togglePreloader(val) {
  return { type: backgroundConstants.PRELOADER, val };
}