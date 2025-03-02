'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="btn btn-circle btn-ghost"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '🌞' : '🌙'}
        </button>
    );
}