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

import photo from '../../assets/images/partner1.png';
import user1 from '../../assets/images/user1.jpeg';
import user2 from '../../assets/images/user2.jpeg';
import user3 from '../../assets/images/user3.jpeg';
import user4 from '../../assets/images/user4.jpeg';

const useStyles = makeStyles((theme) => ({
    inline: {
        display: 'inline',
    },
}));

export default function AlignItemsList() {
    const classes = useStyles();

    return (

        <List>
            <Typography style={{ backgroundColor: '#FAFAFA' }} >
                Pendientes
            </Typography>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="photoClient" src={user1} />

                </ListItemAvatar>
                <ListItemText
                    primary="Susana Balzi"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"06 / 09 / 2020 "}

                            </Typography>
                            {" 1 Artículos"}
                        </React.Fragment>
                    }

                />
                <KeyboardArrowRightIcon fontSize="small" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Jaime Torre Blanca" src={user2} />
                </ListItemAvatar>
                <ListItemText
                    primary="Alex Figueroa"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"08 / 09 / 2020 "}
                            </Typography>
                            {" 2 Artículos"}
                        </React.Fragment>
                    }
                />
                <KeyboardArrowRightIcon fontSize="small" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <Typography style={{ backgroundColor: '#FAFAFA' }} >
                Enviados
            </Typography>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Jaime Torre Blanca" src={user3} />
                </ListItemAvatar>
                <ListItemText
                    primary="Daniela Hernández Lara"
                    secondary={
                        <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                className={classes.inline}
                                color="textPrimary"
                            >
                                {"01 / 09 / 2020 "}
                            </Typography>
                            {" 1 Artículos"}
                        </React.Fragment>
                    }
                />
                <KeyboardArrowRightIcon fontSize="small" />
            </ListItem>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="Jaime Torre Blanca" src={user4} />
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