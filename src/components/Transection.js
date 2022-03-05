import React from 'react'
import { ListItem, ListItemText, ListItemIcon, makeStyles } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';


const useStyle = makeStyles({
    listitem: {
        margin: 10,
        border: '1px solid #f6f6f6',
    }
})

const Transection = ({ transection, deletetransection }) => {
    const classes = useStyle();
    const color = transection.amount >= 0 ? 'green' : 'red';
    return (
        <>
            <ListItem className={classes.listitem} style={{ backgroundColor: `${color}`, color: '#fff' }}>
                <ListItemIcon>
                    <DeleteIcon onClick={() => deletetransection(transection.id)} />
                </ListItemIcon>
                <ListItemText primary={transection.text} />
                <ListItemText primary={transection.amount} />
            </ListItem>
        </>
    )
}

export default Transection
