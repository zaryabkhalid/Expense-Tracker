import React from 'react'

import { Box, Typography, makeStyles, Divider, List } from '@material-ui/core'
import Transection from './Transection';

const useStyles = makeStyles({
    compponent: {
        '&>*': {
            marginBottom: 10,
        }
    },
    list: {
        height: 350,
        overflowY: 'scroll',
        scrollBehavior: 'smooth',
        overflowX: 'hidden'
    }
});

const Transections = ({ transections, deletetransection }) => {
    const classes = useStyles();
    return (
        <Box className={classes.compponent}>
            <Typography variant='h5' style={{ textAlign: 'center', fontFamily: 'popins' }}>Transections History</Typography>
            <Divider />
            <List className={classes.list}>
                {
                    transections.map(transection => {
                        return <Transection transection={transection} key={transection.id} deletetransection={deletetransection} />

                    })
                }
            </List>

        </Box>
    )
}

export default Transections
