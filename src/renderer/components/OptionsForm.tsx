import { FolderOpen } from '@mui/icons-material';
import { Button, IconButton, Stack, TextField } from '@mui/material';

export default function OptionsForm() {
  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField
          id="publication-code"
          label="Publication"
          variant="filled"
          fullWidth
        />
        <TextField id="language" label="Language" variant="filled" fullWidth />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          id="local-folder"
          label="Folder"
          variant="filled"
          fullWidth
        />
        <Button
          color="secondary"
          variant="contained"
          startIcon={<FolderOpen />}
          sx={{ width: '200px', whiteSpace: 'nowrap' }}
          size="large"
        >
          <span>Open Folder</span>
        </Button>
      </Stack>
      <Button variant="contained">Find Media Files</Button>
    </Stack>
  );
}
