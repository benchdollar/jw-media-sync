import React, { useState } from 'react';
import { Typography } from '@mui/material';

import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

export const ContentContainer = () => {
  const inputs = useAppSelector((state) => state.inputs);
  const dispatch = useAppDispatch();

  return (
    <Typography variant="body2" sx={{ height: '100%', overflowY: 'scroll' }}>
      No results yet. sdf sdf sfd s<br />
      <br />
      fsd sfd s<br />
      <br />
      <div>
        <pre>{JSON.stringify(inputs, null, 2)}</pre>
      </div>
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
  );
};

export default ContentContainer;
