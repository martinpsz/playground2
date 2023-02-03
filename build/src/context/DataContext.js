import { createContext, useContext, component } from 'haunted';
const FetchData = async () => {
    const resp = await fetch('../../test-data.json');
    return resp.json();
};
export const data = await FetchData();
const DataContext = createContext('');
customElements.define('payload-provider', DataContext.Provider);
customElements.define('payload-consumer', DataContext.Consumer);
function Consumer() {
    const context = useContext(DataContext);
    return context;
}
customElements.define('data-consumer', component(Consumer));
//# sourceMappingURL=DataContext.js.map