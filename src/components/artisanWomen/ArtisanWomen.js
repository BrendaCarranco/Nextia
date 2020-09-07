import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarRateIcon from '@material-ui/icons/StarRate';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './styles.module.css';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Card className={styles.root}>
            <CardHeader
                title="Mujeres Artesanas"
            />
            <CardMedia
                className={styles.media}
                image="assets/artisanwomen.jpg"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    <h3>Mujeres zapatistas de la revolución mexicana</h3>
                    <p>Mujeres zapatistas de la revolución mexicana
                    Barro modelado, moldeado
                    y policromado en frío.</p>
                    <p>Ocumicho, Charapan
                    Michoacán</p>
                    <h5> Zenaida Rafael Julián</h5>
                </Typography>
                <div className={styles.iconsWraper}>
                    <div className={styles.startWrapper}>
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                        <StarRateIcon />
                    </div>
                    <p>5.0</p>
                </div>
            </CardContent>

            <CardActions disableSpacing>
                <h4 className={styles.price}>$5000</h4>
                <Paper square className={styles.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="icon label tabs example"
                    >
                        <Tab icon={<ShoppingBasketIcon fontSize="large" className={styles.favoriteIcon} />} />
                        <Tab icon={<FavoriteIcon fontSize="large" className={styles.bagIcon} />} />
                    </Tabs>
                </Paper>
            </CardActions>
        </Card>
    );
}