import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  InputBase,
  Badge,
  Typography,
} from '@mui/material';
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
} from '@mui/icons-material';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" component="div" color="#303030">
          JW Media Synchronizer
        </Typography>
        {/* <Grid container>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
