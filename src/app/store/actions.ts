import { storageThemeKey, Theme } from '@/app/types/theme';
import { SET_THEME, TOGGLE_THEME } from './types';

export const setTheme = (theme: Theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});

export const initTheme = () => (dispatch: (arg0: { type: string; payload: Theme; }) => void) => {
  const localTheme:any = window.localStorage.getItem(storageThemeKey);

  if (localTheme) {
    dispatch(setTheme(localTheme));
    return;
  }

  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    dispatch(setTheme(Theme.Dark));
  }
};
