import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary[theme.palette.type],
        padding: 15,
        borderRadius: 16,
        margin: theme.spacing(2),
        maxWidth: 1000,
        textAlign: 'center',
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
    },
    link: {
        cursor: 'pointer',
        // color: theme.palette.primary.main,
        textDecoration: 'none',
        margin: theme.spacing(1, 0),
        '&:hover': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
        }
    },
    dialogContent: {
        padding: 0,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
        borderRadius: 25,
    },
}));

type FilesListProps = {
    files: { name: string, path: string }[];
    header: string;
};

export function FilesList(props: FilesListProps, ) {
    const classes = useStyles();
    const [ open, setOpen ] = useState(false);
    const [ selectedFile, setSelectedFile ] = useState<string | null>(null);

    const { files, header } = props;

    const handleClickOpen = (pdfPath: string) => {
        setSelectedFile(pdfPath);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedFile(null);
    };

    return (
        <div className={classes.root}>
            <h2>{header}</h2>
            {files.map((file, index) => (
                <div key={index} className={classes.link} onClick={() => handleClickOpen(file.path)}>
                    {file.name}
                </div>
            ))}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>
                    File Preview
                    <Button 
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                            X
                    </Button>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    {selectedFile && (
                        <iframe
                            src={selectedFile}
                            width="100%"
                            height="600px"
                            title="PDF Preview"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default FilesList;