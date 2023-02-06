import {configureStore} from '@reduxjs/toolkit';

//Code for testing only:
const FetchData = async () => {
  const resp = await fetch('../../test-data.json');
  return resp.json();
};

//export const data = await FetchData();
//

const initialAffiliateData = await FetchData();

export const store = configureStore({
  reducer: {},
});
