const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin': '*'
    });
    let file = JSON.parse(fs.readFileSync('./data_table/adminList.json', { encoding: 'utf-8' }));
    let token, obj;
    let flag = false;
    file.list.forEach(function (item, index) {
        if (item.username === req.body.username) {
            flag = true;
            if (item.password === req.body.password) {
                token = jwt.sign(req.body, '1508', { expiresIn: 30 });
                obj = {
                    'code': 1,
                    'token': token,
                    'msg': 'SUCCESS'
                };
            } else {
                obj = {
                    'code': 2,
                    'msg': '密码错误'
                };
            };
        };
    });
    if (!flag) {
        obj = {
            'code': 3,
            'msg': '用户名不存在'
        };
    }
    res.end(JSON.stringify(obj));
};