import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import ShareIcon from '@material-ui/icons/Share';
import { Facebook } from 'react-social-sharing';
import { Twitter } from 'react-social-sharing';
import { Tumblr } from 'react-social-sharing';
import { Mail } from 'react-social-sharing';
import { Linkedin } from 'react-social-sharing';
import { Whatsapp } from 'react-social-sharing';

export default function PopoverPopupState() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
                        <ShareIcon />
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
                            <Typography><Facebook solid small link='https://nextia-67a31.web.app/store' /></Typography>
                            <Typography><Whatsapp solid small message="Somos Nextia" link="https://nextia-67a31.web.app/store" /></Typography>
                            <Typography><Linkedin solid small message="Somos Nextia" link="https://nextia-67a31.web.app/store" /></Typography>
                            <Typography> <Twitter solid small message='https://nextia-67a31.web.app/store' /></Typography>
                            <Typography> <Tumblr solid small link="https://nextia-67a31.web.app/store" /></Typography>
                            <Typography> <Mail solid small subject="Somos Nextia" link="https://nextia-67a31.web.app/store" /></Typography>

                        </Box>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}






