/* Libraries */
import { makeStyles } from '@material-ui/core';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';

/* Types */
import { State } from 'src/types/Redux';

/* Application files */
import translateUsing from '../../lib/translation';
import translations from './translations';
import InfoBox from '../../components/InfoBox';
import ProjectPanel from '../../components/ProjectPanel';

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
            marginBottom: theme.spacing(5),
            textAlign: 'center',
        },
    },
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function WorkAppPage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);

    return (
        <div className={classes.root}>
            <h1>Work Management App</h1>
            <ProjectPanel 
                gitPath='https://github.com/Dilinar/work_management_app'
                hostPath='https://dilinar.github.io/work_management_app/'
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

export default WorkAppPage;
