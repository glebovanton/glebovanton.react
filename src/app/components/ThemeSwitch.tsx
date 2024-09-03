import React, { MouseEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { initTheme, toggleTheme } from '@/app/store/actions';
import { Theme } from '@/app/types/theme';

export default function ThemeSwitch() {
  const dispatch = useDispatch<AppDispatch>();
  const appTheme = useSelector((state: RootState) => state.theme.appTheme);

  useEffect(() => {
    dispatch(initTheme());
  }, [dispatch]);

  useEffect(() => {
    if (Object.values(Theme).includes(appTheme)) {
      window.localStorage.setItem('storageThemeKey', appTheme);
      document.documentElement.classList[appTheme === Theme.Dark ? 'add' : 'remove'](Theme.Dark);
    }
  }, [appTheme]);

  const handleToggleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(toggleTheme());
  };

  return (
    <button
      id="toggle-theme"
      aria-label="Toggle theme"
      type="button"
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleToggleTheme}
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"
        />
      </svg>
    </button>
  );
}
