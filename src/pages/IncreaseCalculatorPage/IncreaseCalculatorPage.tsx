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

export function IncreaseCalculatorPage() {
    const classes = useStyles();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);

    return (
        <div className={classes.root}>
            <h1>Increase Calculator</h1>
            <ProjectPanel 
                gitPath='https://github.com/Dilinar/increase_calculator'
                hostPath='https://dilinar.github.io/increase_calculator/'
            />
            <InfoBox 
                header={translate('descriptionHeader')}
                text={translate('description')}
            />
        </div>
    );
}

export default IncreaseCalculatorPage;
