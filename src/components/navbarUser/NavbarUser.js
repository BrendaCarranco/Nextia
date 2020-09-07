import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalAtmSharpIcon from '@material-ui/icons/LocalAtmSharp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import { UserContext } from '../../context/UserProvider';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    img: {
        height: 50,
        width: 50,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
    }
}));

export default function SearchAppBar() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        if (event.key === 'Tab') {
            setOpen(false);
        }
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const [expanded, setExpanded] = React.useState(false);

    const { globalUser, setGlobalUser } = useContext(UserContext);

    const [user, setUser] = useState(globalUser.role);
    console.log(user);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                    >
                        <MenuIcon style={{ color: 'white' }} />
                    </IconButton>
                    <Typography variant="h6" style={{ color: 'white' }}>
                        Nextia
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="flex-end"
                        alignItems="center"
                    >
                        <IconButton aria-label="search" style={{ color: 'white' }}>
                            <SearchIcon />
                        </IconButton>
                        <IconButton aria-label="display more actions" edge="end" style={{ color: 'white' }}>
                            <MoreIcon />
                        </IconButton>
                    </Grid>


                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <Grid item xs={12} justify="center" container direction="row">
                                        <img src="assets/nextia-icon.png" alt="logo" />
                                    </Grid>
                                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={handleClose}>

                                            <ListItemIcon>
                                                <HomeIcon fontSize="small" color='primary' />
                                            </ListItemIcon>

                                            <Typography variant="inherit"><NavLink to="/" style={{ textDecoration: 'none' }}>Inicio</NavLink></Typography>
                                        </MenuItem>
                                    </MenuList>
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography className={classes.heading}>Productos</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}>Cacao</MenuItem>
                                                <MenuItem onClick={handleClose}>Café</MenuItem>
                                                <MenuItem onClick={handleClose}>Madera</MenuItem>
                                                <MenuItem onClick={handleClose}>Miel</MenuItem>
                                                <MenuItem onClick={handleClose}>Otros productos</MenuItem>
                                            </MenuList>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel2bh-content"
                                            id="panel2bh-header"
                                        >
                                            <Typography className={classes.heading}>Artesanías</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}>Barro</MenuItem>
                                                <MenuItem onClick={handleClose}>Fibras vegetales</MenuItem>
                                                <MenuItem onClick={handleClose}>Metales</MenuItem>
                                                <MenuItem onClick={handleClose}>Textiles</MenuItem>
                                                <MenuItem onClick={handleClose}>Varios</MenuItem>
                                            </MenuList>
                                        </AccordionDetails>
                                    </Accordion>

                                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel3bh-content"
                                            id="panel3bh-header"
                                        >
                                            <Typography className={classes.heading}>Zona del país</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem onClick={handleClose}>Norte</MenuItem>
                                                <MenuItem onClick={handleClose}>Sur</MenuItem>
                                                <MenuItem onClick={handleClose}>Centro</MenuItem>
                                            </MenuList>
                                        </AccordionDetails>
                                    </Accordion>

                                    <MenuList autoFocusItem={open} id="menu-list-grow-2" onKeyDown={handleListKeyDown}>

                                        <MenuItem onClick={handleClose}>
                                            <Typography variant="inherit">Blog</Typography>
                                        </MenuItem>

                                        <MenuItem onClick={handleClose}>
                                            <Typography variant="inherit">Ayuda</Typography>
                                        </MenuItem>


                                        {
                                            user == null && (<div>

                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <AccountCircleIcon fontSize="small" color='primary' />
                                                    </ListItemIcon>
                                                    <Typography variant="inherit"><NavLink to="/login" style={{ textDecoration: 'none' }}>Iniciar Sesión</NavLink></Typography>
                                                </MenuItem>

                                                <MenuItem onClick={handleClose}>
                                                    <ListItemIcon>
                                                        <AccountCircleIcon fontSize="small" color='primary' />
                                                    </ListItemIcon>
                                                    <Typography variant="inherit"><NavLink to="/register" style={{ textDecoration: 'none' }}>Registrarse</NavLink></Typography>
                                                </MenuItem>
                                            </div>)
                                        }
                                        {
                                            user == 'cliente' && (
                                                <div>
                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <AccountCircleIcon fontSize="small" color='primary' />
                                                        </ListItemIcon>
                                                        <Typography variant="inherit"><NavLink to="/profile">Mi perfil</NavLink></Typography>
                                                    </MenuItem>

                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <LocalAtmSharpIcon fontSize="small" />
                                                        </ListItemIcon>
                                                        <Typography variant="inherit">Mis pedidos</Typography>
                                                    </MenuItem>

                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <FavoriteIcon fontSize="small" />
                                                        </ListItemIcon>
                                                        <Typography variant="inherit">Favoritos</Typography>
                                                    </MenuItem>

                                                    <MenuItem onClick={handleClose}>
                                                        <ListItemIcon>
                                                            <PowerSettingsNewIcon fontSize="small" />
                                                        </ListItemIcon>
                                                        <Typography variant="inherit">Cerrar Sesión</Typography>
                                                    </MenuItem>
                                                </div>
                                            )
                                        }
                                    </MenuList>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </Toolbar>
            </AppBar>
            <div className={classes.search}>
            </div>
        </div >
    );
}



//style={{ color: 'white' }}
