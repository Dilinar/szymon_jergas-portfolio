/* Libraries */
import { makeStyles, IconButton } from '@material-ui/core';
import { useSelector as reduxUseSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from '../../types/Redux';

/* Application files */
import { setLanguage } from '../../actions/ui';
import flagPl from '../../assets/icons/flag-pl.svg';
import flagEn from '../../assets/icons/flag-en.svg';

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: theme.spacing(1)
    },
    button: {
        background: 'none',
        cursor: 'pointer',
        padding: 4,
        border: 0,
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

export function LanguageSelector () {
    const classes = useStyles();
    
    const dispatch = useDispatch();
    const language = useSelector((state) => state.ui.language);

    function set (language: string) {
        return () => {
            dispatch(setLanguage(language));
        };
    }

    return (
        <section className={classes.container}>
            <IconButton
                aria-label="PL"
                onClick={set('pl')}
                className={classes.button}
                disabled={language === 'pl'}
            >
                <img src={flagPl} className={classes.image} />
            </IconButton>
            <IconButton
                aria-label="EN"
                onClick={set('en')}
                className={classes.button}
                disabled={language === 'en'}
            >
                <img src={flagEn} className={classes.image} />
            </IconButton>
        </section>
    );
}

export default LanguageSelector;
