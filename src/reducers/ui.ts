/* Libraries */
import { AnyAction } from 'redux';

/* Types */
import { StateUI } from '../types/Redux';

function getInitialState (): StateUI {
    const language = localStorage.getItem('language') || 'pl';
    document.body.setAttribute('lang', language);
    const themeMode = localStorage.getItem('themeMode') || 'dark';

    return {
        language,
        themeMode
    };
}

export default function (state: StateUI = getInitialState(), action: AnyAction): StateUI {
    switch (action.type) {
 
        case 'UI_SET_LANGUAGE': {
            if (state.language === action.language) return state;

            localStorage.setItem('language', action.language);
            document.body.setAttribute('lang', action.language);

            return { ...state, language: action.language };
        }
        case 'UI_SET_THEME_MODE': {
            if (state.themeMode === action.themeMode) return state;

            localStorage.setItem('themeMode', action.themeMode);

            return { ...state, themeMode: action.themeMode };
        }
        default: return state;
    }
}
