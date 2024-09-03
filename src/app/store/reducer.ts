import { Theme } from '@/app/types/theme';
import {
  ThemeAction, ThemeState, SET_THEME, TOGGLE_THEME,
} from './types';

const initialState: ThemeState = {
  appTheme: null,
};

const themeReducer = (
  state: ThemeState = initialState,
  action: ThemeAction
): ThemeState => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        appTheme: action.payload,
      };
    case TOGGLE_THEME:
      return {
        ...state,
        appTheme: state.appTheme === Theme.Light ? Theme.Dark : Theme.Light,
      };
    default:
      return state;
  }
};

export default themeReducer;
