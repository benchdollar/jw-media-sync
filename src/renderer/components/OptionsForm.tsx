import { FolderOpen } from '@mui/icons-material';
import { Autocomplete, Button, Stack, TextField } from '@mui/material';
import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import {
  setPublicationSymbol,
  setFiletype,
  setLanguageMepsCode,
  setFolder,
} from '../model/inputsSlice';

import { CodeItem } from '../model/CodeItem';
import { publications, filetypes, languages } from '../model/Data';

function toLabel(item: CodeItem | null): string {
  if (item == null) {
    return '';
  }
  if (item.name === '') {
    return item.code;
  }
  return `${item.name} (${item.code})`;
}

function fromLabel(text: string): CodeItem {
  // assume unknown code string entered by user
  let res: CodeItem = {
    code: text,
    name: '',
  };

  // now check for CodeItem's toLabel pattern
  const regexp = /^(.+)\W+\((.+)\)$/;
  const match = regexp.exec(text.trim());
  if (match?.length === 3) {
    res = {
      code: match[2],
      name: match[1],
    };
  }
  return res;
}

export default function OptionsForm() {
  // redux store for 'inputs' slice
  const inputs = useAppSelector((state) => state.inputs);
  const dispatch = useAppDispatch();

  // // controlled components
  // const [publicationSymbol, setPublicationSymbol] = useState(
  //   inputs.publicationSymbol != null ? inputs.publicationSymbol.code : ''
  // );
  // const [filetype, setFiletype] = useState(inputs.filetype);
  // const [language, setLanguage] = useState(toLabel(inputs.language));
  // const [folder, setFolder] = useState(inputs.folder);

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <Autocomplete
          value={toLabel(inputs.publicationSymbol)}
          inputValue={toLabel(inputs.publicationSymbol)}
          disablePortal
          id="publication-symbol"
          options={...publications.map((item) => {
            return toLabel(item);
          })}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Publication Symbol"
            />
          )}
          onInputChange={(_event, newInputValue) => {
            dispatch(setPublicationSymbol(fromLabel(newInputValue)));
          }}
          fullWidth
          freeSolo
        />
        <Autocomplete
          value={inputs.filetype}
          inputValue={inputs.filetype}
          disablePortal
          id="filetype"
          options={filetypes}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="File Type" />
          )}
          onInputChange={(_event, newInputValue) => {
            dispatch(setFiletype(newInputValue));
          }}
          disableClearable
          sx={{ minWidth: 120 }}
        />
        <Autocomplete
          value={toLabel(inputs.language)}
          inputValue={toLabel(inputs.language)}
          disablePortal
          id="language-code"
          options={...languages.map((item) => {
            return toLabel(item);
          })}
          renderInput={(params) => (
            <TextField {...params} variant="filled" label="Language Code" />
          )}
          onInputChange={(_event, newInputValue) => {
            dispatch(setLanguageMepsCode(fromLabel(newInputValue)));
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
          value={inputs.folder}
          onChange={(event) => {
            dispatch(setFolder(event.target.value));
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
