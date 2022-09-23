export function setLanguage (language: string) {
    return {
        type: 'UI_SET_LANGUAGE',
        language
    };
}
export function setThemeMode (themeMode: string) {
    return {
        type: 'UI_SET_THEME_MODE',
        themeMode
    };
}
