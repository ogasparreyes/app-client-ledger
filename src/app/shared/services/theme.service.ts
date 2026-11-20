import { DOCUMENT } from '@angular/common';
import { Injectable, effect, inject, signal } from '@angular/core';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {

    private readonly document = inject(DOCUMENT);

    readonly theme = signal<Theme>(this.readStoredTheme());

    constructor() {
        effect(() => {
            const theme = this.theme();
            this.document.documentElement.setAttribute('data-bs-theme', theme);
            localStorage.setItem(STORAGE_KEY, theme);
        });
    }

    toggle(): void {
        this.theme.update((current) => (current === 'light' ? 'dark' : 'light'));
    }

    private readStoredTheme(): Theme {
        return localStorage.getItem(STORAGE_KEY) === 'dark' ? 'dark' : 'light';
    }

}
