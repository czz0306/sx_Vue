import axios from '../../src/http/axios';
let actions = {
    update_resident_list ({ commit }, pagesize) {
        axios.post('/admin/getUserList', {
            pageSize: pagesize,
            count: 10
        }).then((res) => {
            commit('update_resident_list', res.data);
        });
    }
};
export default actions;