import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        backgroundColor: 'green',
    },

}));


export default function OnlineUser(props) {
    const classes = useStyles();
    return (
        <div>
            <ListItem >
                <ListItemAvatar>
                    <Avatar alt={props.user} className={classes.small} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText className={classes.fonte} primary={props.user} />
            </ListItem>


        </div>
    )

}
