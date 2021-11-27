import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

export const ContentData = () => {
  const dataJson = useAppSelector((state) => state.api.response);
  // const dispatch = useAppDispatch();

  return (
    <Typography variant="body2" sx={{ height: '100%', overflowY: 'scroll' }}>
      We got this data:
      <div>
        <pre>{JSON.stringify(dataJson, null, 2)}</pre>
      </div>
    </Typography>
  );
};

export default ContentData;
