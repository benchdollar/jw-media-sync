import * as React from 'react';
import { Paper, Stack, Theme, Typography } from '@mui/material';
import { DefaultTheme, makeStyles, useTheme } from '@mui/styles';

import OptionsForm from './OptionsForm';
import AppBar from './AppBar';

const useStyles = makeStyles((theme: Theme) => ({
  page: {
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
    borderRadius: '0px',
    // marginTop: theme.spacing(2),
  },
}));

export default function MainFrame() {
  const theme: Theme = useTheme();
  const classes = useStyles(theme);
  return (
    <>
      <AppBar />
      <Paper
        elevation={0}
        className={classes.page}
        sx={{
          borderRadius: '0px',
          height: `calc(100vh - 110px)`, // 110px by trial-and-error
        }}
      >
        <Stack
          spacing={4}
          sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        >
          <Stack spacing={2} sx={{ flex: '0 0 auto' }}>
            <Typography variant="body1">
              Select publication, language and a local folder.
            </Typography>
            <OptionsForm />
          </Stack>
          <Paper
            elevation={4}
            sx={{
              p: 2,
              flex: '1 1 auto',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <Typography variant="body2" sx={{ height: '100%', overflowY: 'scroll' }}>
              No results yet. sdf sdf sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              {/* fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd sfd s<br />
              <br />
              fsd f sdf */}
            </Typography>
          </Paper>
        </Stack>
      </Paper>
    </>
  );
}
