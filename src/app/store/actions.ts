import { SET_THEME, TOGGLE_THEME } from './actionTypes';
import { storageThemeKey } from '@/app/types/theme';
import { Theme } from '@/app/types/theme'

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});

export const initTheme = () => {
    return (dispatch) => {
        const localTheme = window.localStorage.getItem(storageThemeKey);

        if (localTheme) {
            dispatch(setTheme(localTheme));
            return;
        }

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            dispatch(setTheme(Theme.Dark));
        }
    };
};
