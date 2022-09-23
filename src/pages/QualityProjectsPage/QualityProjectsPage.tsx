/* Libraries */
import { makeStyles } from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from 'src/types/Redux';

/* Application files */
import translateUsing from '../../lib/translation';
import translations from './translations';
import InfoBox from '../../components/InfoBox';
import LinkImage from '../../components/LinkImage';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        boxSizing: 'border-box',
        '& h1': {
            marginTop: theme.spacing(10),
            marginBottom: theme.spacing(5),
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
    },
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function QualityProjectsPage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);

    return (
        <div className={classes.root}>
            <h1>{translate('header')}</h1>
            <InfoBox 
                header={translate('why')}
                text={translate('description')}
            />
            <div className={classes.imageContainer}>
                <LinkImage 
                    img={'/static/images/box-sizer.png'}
                    text={'The Box-Sizer'}
                    path={'/box-sizer'}
                />
                <LinkImage 
                    img={'/static/images/increase-calculator.png'}
                    text={'Increase Calculator'}
                    path={'/increase_calculator'}
                />
                <LinkImage 
                    img={'/static/images/feel-good.png'}
                    text={'Feel Good App'}
                    path={'/feel_good'}
                />
            </div>
        </div>
    );
}

export default QualityProjectsPage;
