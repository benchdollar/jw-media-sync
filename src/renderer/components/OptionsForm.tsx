import { Stack, TextField } from '@mui/material';

export default function OptionsForm() {
  return (
    <Stack spacing={2}>
      <TextField id="publication-code" label="Publication" variant="filled" />
      <TextField id="language" label="Language" variant="filled" />
      <TextField id="local-folder" label="Folder" variant="filled" />
    </Stack>
  );
}
