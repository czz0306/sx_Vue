let fs = require('fs');
module.exports = function (req, res) {
    let flag;
    let list = JSON.parse(fs.readFileSync('./data_table/residentList.json'), 'utf-8');
    /*  let reg = /13[123569]{1}\d{8}|15[1235689]\d{8}|188\d{8}/;
    let tel; */
    let bignumid = 0;
    list.forEach((v, i) => {
        if (v.id > bignumid) {
            bignumid = v.id;
        }
    });
    if (!req.body.name) {
        res.end(JSON.stringify('NO'));
    } else {
        if (!req.body.tel) {
            res.end(JSON.stringify('NO'));
        } else {
            flag = 'success';
        }
    }
    if (flag === 'success') {
        list.unshift({
            id: 1 + bignumid,
            name: req.body.name,
            age: 40,
            send: '已通知',
            tel: req.body.tel,
            sex: '女',
            info: req.body.info,
            time: new Date().toLocaleDateString().split('/').join('-')
        });
    };
    fs.writeFileSync('./data_table/residentList.json', JSON.stringify(list));
    res.end(JSON.stringify('YES'));
    console.log(bignumid, flag, req.body.name, req.body.id);
};