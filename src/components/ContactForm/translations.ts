/* Types */ 
import { AnyObject } from '../../types/Object';
import { Translation } from '../../types/Translation';

export default {
    snackbar: {
        pl: 'Wiadomość wysłana',
        en: 'Message sent'
    },
    header: {
        pl: 'Formularz kontaktowy',
        en: 'Contact form'
    },
    name: {
        pl: 'Imię',
        en: 'Name'
    },
    message: {
        pl: 'Wiadomość',
        en: 'Message'
    },
    button: {
        pl: 'Wyślij',
        en: 'Send'
    },
    fieldError: {
        pl: 'Pole wymagane',
        en: 'Field required'
    },
    emailError: {
        pl: 'Niepoprawny email',
        en: 'Invalid email'
    }
} as AnyObject<Translation>;
