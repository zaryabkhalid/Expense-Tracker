import React from 'react'
import { Card, CardContent, Typography, Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    cardWrapper: {
        display: 'flex',
        marginBottom: 30,
        gap: 10,
        '& > *': {
            flex: 1,
        }
    },
    green: {
        color: 'green',
        fontSize: 20
    },
    red: {
        color: 'red',
        fontSize: 20
    },
    expenseBg: {
        background: '#F7DBF0',
    },
    incomeBg: {
        background: '#D2F6C5',
    }
})

const ExpenseCard = ({ transections }) => {
    const classes = useStyles();
    const amount = transections.map((transection) => transection.amount);
    const income = amount.filter((item) => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) * -1).toFixed(2);


    return (
        <>
            <Box className={classes.cardWrapper}>
                <Card className={classes.incomeBg}>
                    <CardContent>
                        <Typography>Income</Typography>
                        <Typography className={classes.green}>{income} Rs</Typography>
                    </CardContent>
                </Card>
                <Card className={classes.expenseBg}>
                    <CardContent>
                        <Typography>Expense</Typography>
                        <Typography className={classes.red}>{expense} Rs</Typography>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}

export default ExpenseCard
