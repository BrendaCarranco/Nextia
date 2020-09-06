import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import photo from '../../assets/images/partner1.png'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList() {
    const classes = useStyles();

    return (

        <List className={classes.root}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="photoClient" src={photo} />

                </ListItemAvatar>
                <ListItemText
                    primary="Nacimiento con Arca de Noé"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"2 artículos en existencia"}
                            </Typography>
                        </React.Fragment>
                    }

                />
                <KeyboardArrowRightIcon fontSize="small" />

            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Jaime Torre Blanca" src={photo} />
                </ListItemAvatar>
                <ListItemText
                    primary="Bastón con Ave"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"5 artículos en existencia"}
                            </Typography>
                        </React.Fragment>
                    }
                />
                <KeyboardArrowRightIcon fontSize="small" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Jaime Torre Blanca" src={photo} />
                </ListItemAvatar>
                <ListItemText
                    primary="Jaime Torre Blanca"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"05 / 09 / 2020 "}
                            </Typography>
                            {" 2 Artículos"}
                        </React.Fragment>
                    }
                />
                <KeyboardArrowRightIcon fontSize="small" />
            </ListItem>

        </List>
    );
}