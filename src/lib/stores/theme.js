// src/lib/stores/themeStore.js
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// The store holds the current theme ('light' or 'dark')
export const theme = writable('light');

// Set the initial value based on localStorage, if available
if (browser) {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    theme.set(storedTheme);
  }
}

// Subscribe to the store to save changes to localStorage
if (browser) {
  theme.subscribe(value => {
    localStorage.setItem('theme', value);
  });
}
