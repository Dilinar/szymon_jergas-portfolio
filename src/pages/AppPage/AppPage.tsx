/* Libraries */
import { Route, Switch } from 'react-router-dom';
import { makeStyles, Paper } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

/* Application files */
import ThemeSelector from '../../components/ThemeSelector';
import DarkThemeBackground from '../../assets/images/dark.jpg';
import LightThemeBackground from '../../assets/images/bright.jpg';
import LanguageSelector from '../../components/LanguageSelector';
import AboutMePage from '../AboutMePage';
import ProjectsPage from '../ProjectsPage';
import ContactForm from '../../components/ContactForm';
import WorkAppPage from '../WorkAppPage';
import QualityProjectsPage from '../QualityProjectsPage';
import PortfolioAppPage from '../PortfolioAppPage';
import BoxSizerPage from '../BoxSizerPage';
import IncreaseCalculatorPage from '../IncreaseCalculatorPage';
import FeelGoodPage from '../FeelGoodPage';
import Buffout from '../Buffout';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: 
        theme.palette.type === 'dark' ?
            `url(${DarkThemeBackground})` :
            `url(${LightThemeBackground})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
    },
    langSelector: {
        display: 'flex',
        position: 'fixed',
        marginRight: '50vw',
        width: '50vw',
        backgroundColor: theme.palette.primary[theme.palette.type],
    },
    themeSelector: {
        display: 'flex',
        position: 'fixed',
        justifyContent: 'flex-end',
        width: '50vw',
        marginLeft: '50vw',
        backgroundColor: theme.palette.primary[theme.palette.type],
    },
    '@global': {
        '*::-webkit-scrollbar': {
            width: 10
        },
        '*::-webkit-scrollbar-track': {
            backgroundColor: theme.palette.primary[theme.palette.type],
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.secondary[theme.palette.type],
            borderRadius: 5
        },
        '*::-webkit-scrollbar-track:hover': {
            backgroundColor: theme.palette.secondary[theme.palette.type]
        },
        '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.primary[theme.palette.type]
        },
    }
}));

export function AppPage() {

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <div className={classes.langSelector}>
                <LanguageSelector />
            </div>
            <div className={classes.themeSelector}>
                <ThemeSelector />
            </div>
            <Router basename='/szymon_jergas-portfolio'>
                <Switch>
                    <Route path='/' exact component={AboutMePage} />
                    <Route path='/projects' component={ProjectsPage} />
                    <Route path='/work_management_app' component={WorkAppPage} />
                    <Route path='/portfolio' component={PortfolioAppPage} />
                    <Route path='/quality_of_life' component={QualityProjectsPage} />
                    <Route path='/box-sizer' component={BoxSizerPage} />
                    <Route path='/increase_calculator' component={IncreaseCalculatorPage} />
                    <Route path='/feel_good' component={FeelGoodPage} />
                    <Route path='/buffout' component={Buffout} />
                </Switch>
            </Router>
            <ContactForm />
        </Paper>
    );
}

export default AppPage;
