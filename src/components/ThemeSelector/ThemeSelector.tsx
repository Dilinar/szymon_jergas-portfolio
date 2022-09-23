/* Libraries */
import { makeStyles, IconButton } from '@material-ui/core';
import { useSelector as reduxUseSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from '../../types/Redux';

/* Application files */
import { setThemeMode } from '../../actions/ui';
import lightIcon from '../../assets/icons/light.png';
import darkIcon from '../../assets/icons/dark.png';

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        padding: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    button: {
        border: 0,
        background: 'none',
        cursor: 'pointer',
        padding: 4,
        height: theme.spacing(4),
        marginRight: theme.spacing(1),
        '&:enabled:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        },
        '&:disabled': {
            backgroundColor: theme.palette.primary.main
        },
        '&:last-of-type': {
            marginRight: 0
        }
    },
    image: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    }
}));

export function ThemeSelector () {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const themeMode = useSelector((state) => state.ui.themeMode);

    function set (themeMode: string) {
        return () => {
            dispatch(setThemeMode(themeMode));
        };
    }
    
    return (
        <section className={classes.container}>
            <IconButton
                aria-label="PL"
                onClick={set('dark')}
                className={classes.button}
                disabled={themeMode === 'dark'}
            >
                <img src={darkIcon} className={classes.image} />
            </IconButton>
            <IconButton
                aria-label="EN"
                onClick={set('light')}
                className={classes.button}
                disabled={themeMode === 'light'}
            >
                <img src={lightIcon} className={classes.image} />
            </IconButton>
        </section>
    );
}

export default ThemeSelector;
