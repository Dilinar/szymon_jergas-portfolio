/* Types */
import { AnyObject } from '../types/Object';
import { Translation } from '../types/Translation';

export default function translate (texts: AnyObject<Translation>, language: string = document.body.getAttribute('lang')) {
    return (key: string): string => {
        if (!texts[key] || !texts[key][language]) return '';

        return texts[key][language];
    };
}
