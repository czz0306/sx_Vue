const fs = require('fs');
module.exports = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json;charset=utf-8' });
    let adminList = JSON.parse(fs.readFileSync('./data_table/adminList.json', { encoding: 'utf-8' }));
    let obj;
    let flag = false;
    adminList.list.forEach((v, k) => {
        if (v.username === req.body.username) {
            flag = true;
            obj = {
                'code': 0,
                'msg': '用户名已注册'
            };
            return false;
        }
    });
    if (!flag) {
        obj = {
            'code': 1,
            'msg': '注册成功'
        };
        adminList.list.push(req.body);
        fs.writeFileSync('./adminList.json', JSON.stringify(adminList));
    }
    res.end(JSON.stringify(obj));
};