import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import {FC, memo, SyntheticEvent, useEffect, useState} from "react";
type SnackBarPropsType = {
    type: 'success' | 'info' | 'warning' | 'error'
    message: string
    show: boolean
}
export const SnackBar: FC<SnackBarPropsType> = memo(({type, message, show}) => {
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        setOpen(show)
    }, [show])

    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return
        setOpen(false)
    };

    return (
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} variant='filled'>
                    {message}
                </Alert>
            </Snackbar>
    );
})