import { configureStore } from '@reduxjs/toolkit';
const FetchData = async () => {
    const resp = await fetch('../../test-data.json');
    return resp.json();
};
const initialAffiliateData = await FetchData();
export const store = configureStore({
    reducer: {},
});
//# sourceMappingURL=store.js.map