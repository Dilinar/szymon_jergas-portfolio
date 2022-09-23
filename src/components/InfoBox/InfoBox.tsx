/* Libraries */
import { makeStyles,} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        padding: 15,
        borderRadius: 16,
        margin: theme.spacing(2),
        maxWidth: 1000,
        '& h2': {
            textAlign: 'center',
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(2),
            borderRadius: 5,
            padding: 2,
        },
        '& p': {
            marginTop: theme.spacing(1)
        },
    }
}));

type Props ={
    header: string,
    text: string
}

export function InfoBox(props: Props) {
    const classes = useStyles();
    const header = props.header;
    const text = props.text;

    return (
        <div className={classes.root}>
            <h2>{header}</h2>
            {(text as unknown as string[]).map((t: string, key: number) => (
                <p key={key}>{t}</p>)
            )}
        </div>
    );
}

export default InfoBox;
