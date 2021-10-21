import { Stack, Typography } from '@mui/material';

import OptionsForm from './OptionsForm';

export default function MainFrame() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">JW Media Synchronizer</Typography>
      <Typography variant="body1">
        Select publication, language and a local folder.
      </Typography>
      <OptionsForm />
    </Stack>
  );
}
