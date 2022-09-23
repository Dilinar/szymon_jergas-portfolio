/* Libraries */
import {
    Fade,
    makeStyles,
    Slide
} from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from '../../types/Redux';

/* Application files */
import translateUsing from '../../lib/translation';
import translations from './translations';
import LinkImage from '../../components/LinkImage';
import InfoBox from '../../components/InfoBox';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        margin: '0 auto',
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxSizing: 'border-box',
        margin: theme.spacing(8, 0, 3, 0),
        '@media (min-width: 732px)': {
            flexFlow: 'row wrap',
            justifyContent: 'center'
        },
    },
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function AboutMePage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);
 
    return (
        <div className={classes.root}>
            <Slide direction='right' in={true} appear={true} timeout={1200} mountOnEnter unmountOnExit>
                <div>
                    <LinkImage 
                        img={'../../docs/static/images/portrait.png'}
                        text={'Szymon Jergas'}
                        path={'https://github.com/Dilinar'}
                    />
                </div>
            </Slide>
            <Slide direction='left' in={true} appear={true} timeout={1200} mountOnEnter unmountOnExit>
                <div>
                    <InfoBox 
                        header={translate('header')}
                        text={translate('bio')}
                    />
                </div>
            </Slide>
            <Fade in={true} appear={true} timeout={1200} mountOnEnter unmountOnExit>
                <div className={classes.imageContainer}>
                    <LinkImage 
                        img={'/static/images/projects.png'}
                        text={translate('projects')}
                        path={'/projects'}
                    />
                    <LinkImage 
                        img={'/static/images/shop.png'}
                        text={translate('shop')}
                        path={'https://slavicayarns.pl/'}
                    />
                </div>
            </Fade>
        </div>
    );
}

export default AboutMePage;
