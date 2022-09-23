/* Libraries */
import { Fade, makeStyles } from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Application files */
import translateUsing from '../../lib/translation';
import translations from './translations';
import { State } from 'src/types/Redux';
import LinkImage from '../../components/LinkImage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        boxSizing: 'border-box',
        margin: '0 auto',
        '& h1': {
            marginTop: theme.spacing(10),
            textAlign: 'center',
        },
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(8, 0, 3, 0),
        '@media (min-width: 732px)': {
            flexFlow: 'row wrap',
            justifyContent: 'center'
        },
    }
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function ProjectsPage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);

    return (
        <div className={classes.root}>
            <h1>{translate('header')}</h1> 
            <Fade in={true} appear={true} timeout={1200} mountOnEnter unmountOnExit>
                <div className={classes.imageContainer}>
                    <LinkImage 
                        img={'/static/images/work-app.png'}
                        text={'Work Management App'}
                        path={'/work_management_app'}
                    />
                    <LinkImage 
                        img={'/static/images/portfolio.png'}
                        text={translate('portfolio')}
                        path={'/portfolio'}
                    />
                    <LinkImage 
                        img={'/static/images/quality.png'}
                        text={translate('quality')}
                        path={'/quality_of_life'}
                    />
                </div>
            </Fade>
        </div>
    );
}

export default ProjectsPage;
