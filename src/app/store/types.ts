import { Theme } from '@/app/types/theme';

export interface ThemeState {
  appTheme: Theme | null | undefined;
}

export interface SetThemeAction {
  type: typeof SET_THEME;
  payload: Theme;
}

export interface ToggleThemeAction {
  type: typeof TOGGLE_THEME;
}

export type ThemeAction = SetThemeAction | ToggleThemeAction;

export const SET_THEME = 'SET_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';
