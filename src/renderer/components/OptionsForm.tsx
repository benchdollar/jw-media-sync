import { FolderOpen } from '@mui/icons-material';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';
import { CodeItem } from '../model/CodeItem';
import { publications, filetypes, languages } from '../model/Data';

function label(item: CodeItem): string {
  return `${item.name} (${item.code})`;
}

export default function OptionsForm() {
  const [publicationSymbol, setPublicationSymbol] = useState('');
  const [filetype, setFiletype] = useState(filetypes[0]);
  const [language, setLanguage] = useState(label(languages[0]));
  const [folder, setFolder] = useState('');

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          value={publicationSymbol}
          inputValue={publicationSymbol}
          disablePortal
          id="publication-symbol"
          options={...publications.map((item) => {
            return label(item);
          })}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Publication Symbol"
            />
          )}
          onInputChange={(_event, newInputValue) => {
            setPublicationSymbol(newInputValue);
          }}
          fullWidth
          freeSolo
        />
        <Autocomplete
          value={filetype}
          inputValue={filetype}
          disablePortal
          id="filetype"
          options={filetypes}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="File Type" />
          )}
          onInputChange={(_event, newInputValue) => {
            setFiletype(newInputValue);
          }}
          disableClearable
          sx={{ minWidth: 120 }}
        />
        <Autocomplete
          value={language}
          inputValue={language}
          disablePortal
          id="language-code"
          options={...languages.map((item) => {
            return label(item);
          })}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Language Code" />
          )}
          onInputChange={(_event, newInputValue) => {
            setLanguage(newInputValue);
          }}
          fullWidth
          freeSolo
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          id="local-folder"
          label="Folder"
          variant="filled"
          fullWidth
          value={folder}
          onChange={(event) => {
            setFolder(event.target.value);
          }}
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
