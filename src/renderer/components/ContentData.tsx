import React, { useState } from 'react';
import { getAlertTitleUtilityClass, Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

class MediaEntry {
  readonly title: string;

  readonly url: string;

  readonly filename: string;

  readonly filetype: string;

  readonly filesize: number;

  constructor(
    title = '',
    url = '',
    filename = '',
    filetype = '',
    filesize = 0
  ) {
    this.title = title;
    this.url = url;
    this.filename = filename;
    this.filetype = filetype;
    this.filesize = filesize;
  }
}

// see https://dev.to/ankittanna/how-to-create-a-type-for-complex-json-object-in-typescript-d81
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTitles = (dataJson: any): string[] => {
  const data = dataJson; // JSON.parse(JSON.stringify(dataJson));
  const titles: string[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const item of data.files.X.MP3.values()) {
    titles.push(item.title as string);
  }
  return titles;
};

export const ContentData = () => {
  const dataJson = useAppSelector((state) => state.api.response);
  // const dispatch = useAppDispatch();

  const titles = getTitles(dataJson == null ? '' : dataJson);

  return (
    <Typography variant="body2" sx={{ height: '100%', overflowY: 'scroll' }}>
      We got this data:
      <ol>
        {titles.map((value) => (
          <li id={value}>{value}</li>
        ))}
      </ol>
      <div>
        <pre>{JSON.stringify(dataJson, null, 2)}</pre>
      </div>
    </Typography>
  );
};

export default ContentData;
