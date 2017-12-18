var mutations = {
    update_username: function (state, data) {
        state.username = data;
    },
    update_menu: function (state, data) {
        state.menu = data;
    },
    update_pathName: function (state, data) {
        console.log(data);
        state.pathName = data;
    },
    update_img: function (state) {
        state.arr.push({
            'hasDelete': true
        });
    },
    update_delete: function (state, data) {
        state.index = data;
        state.arr.splice(state.index, 1);
    },
    upload_imgUrl: function (state, data) {
        state.imageUrl.push(data);
    },
    update_resident_list (state, data) {
        state.residentList = data;
    }
};
export default mutations;