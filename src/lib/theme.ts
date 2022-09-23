import { createTheme, PaletteType } from "@material-ui/core";

export function ThemeCreator(themeMode: PaletteType) {
    const t = createTheme({
        palette: {
            type: themeMode,
            primary: {
                light: 'rgb(250,250,250,0.5)',
                main: '#81c784',
                dark: 'rgb(0,0,0,0.5)',
            },
            secondary: {
                light: 'rgb(0,0,0,0.5)',
                main: '#81c784',
                dark: 'rgb(250,250,250,0.5)'
            }
        },
    });

    return t;
}

export default ThemeCreator;
