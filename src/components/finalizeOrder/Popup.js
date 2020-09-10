import React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Download from '../../assets/images/Download.png'
import codigo from '../../assets/images/codigo.png'
import styles from './finalizeOrder.module.css'
import Grid from '@material-ui/core/Grid';

export default function PopoverPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                    <img src={Download} alt="IconDownload" className={styles.iconDow}/>
                    </Button>
                    <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <Box p={2}>
                        <Grid container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                        <Box>
                        <img src={codigo} alt="IconDownload"/>
                        </Box>
                        </Grid>

                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}