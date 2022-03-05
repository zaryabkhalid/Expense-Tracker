import { React, useState } from 'react'
import { Box, TextField, Typography, makeStyles, Button } from '@material-ui/core';


const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },
    button: {
        backgroundColor: 'green',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#D2F6C5',
            color: 'green',
        },
        fontFamily: 'poppins',

    }
})

const NewTransections = ({ addtransection }) => {
    const classes = useStyles();
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');


    const newtransection = () => {
        const transection = {
            id: Math.floor(Math.random() * 1000),
            text: text,
            amount: +amount,
        }
        addtransection(transection);
        setText('');
        setAmount('');
    }

    const textHandler = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <Typography variant='h5' style={{ fontFamily: 'popins', marginBottom: '10px' }}>New Transections </Typography>
            <Box className={classes.container}>
                <TextField label='Enter Expense' value={text} variant='outlined' onChange={textHandler} />
                <TextField label='Enter Amount' value={amount} variant='outlined' onChange={(e) => setAmount(e.target.value)} />
                <Button variant='outlined' disabled={!text} className={classes.button} onClick={newtransection}> Add New Transection</Button>
            </Box>

        </>
    )
}

export default NewTransections