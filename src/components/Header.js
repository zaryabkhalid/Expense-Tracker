import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'


const useStyle = makeStyles({
    header: {
        color: '#fff',
        textAlign: 'center',
        margin: ' 25px 0',
        textTransform: 'uppercase',
        fontWeight: '600',

    },
    header_div: {
        height: '80',
        backgroundColor: 'green',
        width: '100vw',
        marginBottom: 80,
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }
})


const Header = () => {

    const classes = useStyle();

    return (
        <>
            <div className={classes.header_div}>
                <Typography className={classes.header} variant='h4' > React Expense Tracker </Typography>
            </div>
        </>
    )
}

export default Header