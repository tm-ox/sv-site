import { readable } from 'svelte/store';
import { browser } from '$app/environment';

export const domTheme = readable('light', (set) => {
    if (browser) {
        const htmlEl = document.documentElement;

        const initialMode = htmlEl.classList.contains('dark') ? 'dark' : 'light';
        // if DataStore -- const initialMode = htmlEl.getAttribute('data-mode') || 'light';
        set(initialMode);

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    const newMode = htmlEl.classList.contains('dark') ? 'dark' : 'light';
                    set(newMode);
                    // if DaataStore -- const newMode = htmlEl.getAttribute('data-mode');
                    //                  set(newMode || 'light'); // Add the null check here
                }
            });
        });

        observer.observe(htmlEl, { attributes: true });

        return () => observer.disconnect();
    }
});
