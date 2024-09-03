import { SET_THEME, TOGGLE_THEME } from './actionTypes';
import { Theme } from '@/app/types/theme'

const initialState = {
    appTheme: null,
};

const themeReducer = (state = initialState, action) => {
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

