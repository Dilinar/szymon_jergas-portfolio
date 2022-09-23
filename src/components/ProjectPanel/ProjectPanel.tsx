/* Libraries */
import { makeStyles } from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from '../../types/Redux';

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(3),
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
        '@media (min-width: 312px)': {
            flexFlow: 'row wrap',
            justifyContent: 'center'
        },
        '& img': {
            maxWidth: 100, 
        },
    },
    icon: {
        margin: theme.spacing(2),
    }
}));

type Props ={
    gitPath: string,
    hostPath: string
}

export function ProjectPanel(props: Props) {
    const classes = useStyles();
    const gitPath = props.gitPath;
    const hostPath = props.hostPath;

    const themeMode = useSelector((state) => state.ui.themeMode);


    return (
        <div className={classes.root}>
            <a href={gitPath} className={classes.icon}>
                {themeMode === 'dark' ?
                    <img src={'/static/icons/githubDark.png'} /> :
                    <img src={'/static/icons/githubBright.png'} />
                }
            </a>
            <a href={hostPath} className={classes.icon}>
                {themeMode === 'dark' ?
                    <img src={'/static/icons/hostedDark.png'} /> :
                    <img src={'/static/icons/hostedBright.png'} />
                }
            </a>
        </div>
    );
}

export default ProjectPanel;
