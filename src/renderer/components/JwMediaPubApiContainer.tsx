import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

import { ApiDataStatus, receivedResponse } from '../model/apiSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { update } from '../model/inputsSlice';

import { ContentStartup } from './ContentStartup';
import { ContentRequest } from './ContentRequest';
import { ContentData } from './ContentData';

// const apiPattern =
//   'https://b.jw-cdn.org/apis/pub-media/GETPUBMEDIALINKS?output=json&pub={publication_code}&fileformat={filetype}&alllangs=0&langwritten={language_code}&txtCMSLang={language_code}';
const apiPattern =
  'http://localhost:3002/GETPUBMEDIALINKS?output=json&pub={publication_code}&fileformat={filetype}&alllangs=0&langwritten={language_code}&txtCMSLang={language_code}';

export const JwMediaPubApiContainer = () => {
  const api = useAppSelector((state) => state.api);
  const dispatch = useAppDispatch();

  let component: JSX.Element;
  switch (api.status) {
    case ApiDataStatus.NONE:
    default:
      component = <ContentStartup />;
      break;
    case ApiDataStatus.REQUESTED:
      component = <ContentRequest />;
      break;
    case ApiDataStatus.RECEIVED:
      component = <ContentData />;
  }
  const renderComponent = component;

  // submits request to API
  async function getData() {
    const response = await fetch(apiPattern);
    const data = await response.json();

    // put data into redux store
    dispatch(receivedResponse(data));
  }

  // fetch data if in REQUESTED
  useEffect(() => {
    if (api.status === ApiDataStatus.REQUESTED) {
      getData(); // only in REQUESTED
    }
  });

  return renderComponent;
};

export default JwMediaPubApiContainer;
