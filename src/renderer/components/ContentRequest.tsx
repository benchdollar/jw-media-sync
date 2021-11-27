import React, { useState } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

export const ContentRequest = () => {
  // const inputs = useAppSelector((state) => state.inputs);
  // const dispatch = useAppDispatch();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default ContentRequest;
