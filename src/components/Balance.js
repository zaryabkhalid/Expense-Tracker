import { Box, Typography, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles({
    balance: {
        marginBottom: 50,
        textAlign: 'center',
        fontFamily: 'popins',
    }
})

const Balance = ({ transections }) => {
    const classes = useStyle();

    const amount = transections.map((transection) => transection.amount);
    const total = amount.reduce((amount, item) => {
        return amount += item;
    }, 0).toFixed(2);
    return (
        <Box>
            <Typography className={classes.balance} variant='h5'>Balance: {total} Rupees</Typography>
        </Box>
    )
}

export default Balance
