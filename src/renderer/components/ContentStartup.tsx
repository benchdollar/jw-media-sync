import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

export const ContentStartup = () => {
  // const inputs = useAppSelector((state) => state.inputs);
  // const dispatch = useAppDispatch();

  return (
    <Typography variant="body2" sx={{ height: '100%', overflowY: 'scroll' }}>
      No data to display yet. Please search for a publication first.
    </Typography>
  );
};

export default ContentStartup;
