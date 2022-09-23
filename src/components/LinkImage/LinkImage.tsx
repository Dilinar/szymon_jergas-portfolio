/* Libraries */
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(8, 1, 3, 1),
        textAlign: 'center',
        textDecoration: 'none',
        color: 'inherit',
        '& img': {
            width: '100%',
            maxWidth: 350, 
            borderRadius: 16
        },
        '& h3': {
            textAlign: 'center',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            marginBottom: theme.spacing(3),
            backgroundColor: theme.palette.primary[theme.palette.type],
            borderRadius: 5,
            padding: 2
        },
        '&:hover': {
            textDecoration: 'underline',
        }
    },
}));

type Props ={
    img: string,
    text: string,
    path: string
}

export function LinkImage(props: Props) {
    const classes = useStyles();
    const image = props.img;
    const text = props.text;
    const path = props.path;

    return (
        <a href={path} className={classes.root}>
            <img src={image} />
            <h3>{text}</h3>
        </a>
    );
}

export default LinkImage;
