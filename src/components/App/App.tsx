/* Libraries */
import { PaletteType } from '@material-ui/core';
import { TypedUseSelectorHook, useSelector as reduxUseSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { FormspreeProvider } from '@formspree/react';

/* Types */
import { State } from '../../types/Redux';

/* Application files */
import { ThemeCreator } from '../../lib/theme';
import AppPage from '../../pages/AppPage';

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function App() {
    const theme = useSelector((state) => state.ui.themeMode);

    return (
        <ThemeProvider theme={ThemeCreator(theme as PaletteType)}>
            <FormspreeProvider>
                <AppPage />
            </FormspreeProvider>
        </ThemeProvider>
    );
}

export default App;
