/* Libraries */
import { useRef, useState } from 'react';
import { TypedUseSelectorHook, useSelector as reduxUseSelector } from 'react-redux';
import { makeStyles, TextField, Button, Paper, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { useForm } from '@formspree/react';

/* Types */
import { State } from 'src/types/Redux';

/* Application Files */
import translateUsing from '../../lib/translation';
import translations from './translations';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.primary[theme.palette.type],
        borderRadius: 16,
        margin: theme.spacing(7, 2, 2, 2),
        '& h3': {
            marginBottom: theme.spacing(1),
            borderRadius: 5,
            padding: 2
        },
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: 16,
        margin: theme.spacing(1),
    },
    contactInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '50vw',
        '@media (min-width: 732px)': {
            flexFlow: 'row wrap',
            justifyContent: 'space-between'
        },
    },
    contactInfoField: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        margin: theme.spacing(1),
        width: '50vw',
        '@media (min-width: 732px)': {
            width: '21vw',
            margin: theme.spacing(1, 0)
        },
    },
    messageField: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        margin: theme.spacing(1),
        width: '50vw',
    },
    button: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        width: 100
    }
}));

const useSelector = reduxUseSelector as TypedUseSelectorHook<State>;

export function ContactForm () {
    const classes = useStyles ();
    const language = useSelector((state) => state.ui.language);
    const translate = translateUsing(translations, language);
    const form = useRef();

    const [ state, handleSubmit ] = useForm('xeqdenor');
    const [ snackbarOpen, setSnackbarOpen ] = useState(false);
    const [ name, setName ] = useState('');
    const [ nameError, setNameError ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ emailError, setEmailError ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ messageError, setMessageError ] = useState('');


    function Alert(props: AlertProps) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    function handleClose (event?: React.SyntheticEvent, reason?: string) {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    }

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    function onNameChange (e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value);
        if (e.target.value === '') setNameError(translate('fieldError'));
        else setNameError('');
    }

    function onEmailChange (e: React.ChangeEvent<HTMLInputElement>) {
        setEmail(e.target.value);
        if (e.target.value === '') setEmailError(translate('fieldError'));
        if (!isValidEmail(e.target.value)) setEmailError(translate('emailError'));
        else setEmailError('');
    }

    function onMessageChange (e: React.ChangeEvent<HTMLInputElement>) {
        setMessage(e.target.value);
        if (e.target.value === '') setMessageError(translate('fieldError'));
        else setMessageError('');
    }

    const sendEmail = (e: any) => {
        e.preventDefault();
        if (name === '') setNameError(translate('fieldError'));
        if (email === '') setEmailError(translate('fieldError'));
        if (message === '') setMessageError(translate('fieldError'));
        
        else if (name && email && message){
            handleSubmit({name, email, message});
            setSnackbarOpen(true);
            e.target.reset();
            setNameError('');
            setEmailError('');
            setMessageError('');
        }
    };

    return (
        <Paper className={classes.root}>
            <Snackbar open={snackbarOpen} 
                autoHideDuration={6000} 
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Alert onClose={handleClose} severity='success'>
                    {translate('snackbar')} 
                </Alert>
            </Snackbar>
            <h3>{translate('header')}</h3>
            <form  className={classes.form} ref={form} onSubmit={sendEmail} noValidate>
                <div className={classes.contactInfoContainer}>
                    <TextField className={classes.contactInfoField}
                        id='outlined-basic' 
                        label={translate('name')} 
                        variant='outlined' 
                        type='text' 
                        size='small'
                        name='name'
                        error={!!nameError}
                        helperText={nameError}
                        onChange={onNameChange}
                    />
                    <TextField className={classes.contactInfoField}
                        id='outlined-basic' 
                        label='Email' 
                        variant='outlined' 
                        type='email' 
                        size='small'
                        name='email'
                        error={!!emailError}
                        helperText={emailError}
                        onChange={onEmailChange}
                    />
                </div>
                <TextField className={classes.messageField} 
                    id='outlined-basic' 
                    label={translate('message')} 
                    variant='outlined' 
                    type='text' 
                    size='small'
                    name='message'
                    minRows={10}
                    multiline
                    error={!!messageError}
                    helperText={messageError}
                    onChange={onMessageChange}
                />
                <Button className={classes.button}
                    variant='outlined' 
                    color='primary'
                    type='submit'
                    disabled={state.submitting}>
                    {translate('button')}
                </Button>
            </form>
        </Paper>
    );

}

export default ContactForm;
