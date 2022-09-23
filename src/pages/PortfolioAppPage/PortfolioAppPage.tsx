/* Libraries */
import { makeStyles } from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from 'src/types/Redux';

/* Application files */
import translateUsing from '../../lib/translation';
import translations from './translations';
import ProjectPanel from '../../components/ProjectPanel';
import InfoBox from '../../components/InfoBox';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: 1000,
        maxWidth: '100%',
        boxSizing: 'border-box',
        margin: '0 auto',
        '& h1': {
            marginTop: theme.spacing(10),
            textAlign: 'center',
        },
        '& h3': {
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            marginBottom: theme.spacing(3),
            backgroundColor: theme.palette.primary[theme.palette.type],
            borderRadius: 5,
            padding: 2
        },
    },
    imageContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(8, 1, 3, 1),
    }
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function PortfolioAppPage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);

    return (
        <div className={classes.root}>
            <h1>Prortfolio</h1> 
            <ProjectPanel 
                gitPath='https://github.com/Dilinar/szymon_jergas-portfolio'
                hostPath=''
            />
            <InfoBox 
                header={translate('summaryHeader')}
                text={translate('summary')}
            />
            <InfoBox 
                header={translate('featuresHeader')}
                text={translate('features')}
            />
            <InfoBox 
                header={translate('technologiesHeader')}
                text={translate('technologies')}
            />
            <InfoBox 
                header={translate('lessonsHeader')}
                text={translate('lessons')}
            />
        </div>
    );
}

export default PortfolioAppPage;
