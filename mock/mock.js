import mock from './index.js';
import entryList from './entry.json';
console.log(entryList);
const entry = function () {
    mock.onGet('/api/entry').reply((config) => {
        return [200, entryList];
    });
};
export default entry;