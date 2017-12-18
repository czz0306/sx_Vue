const fs = require('fs');
const jwt = require('jsonwebtoken');
module.exports = function (req, res) {
    let info;
    jwt.verify(req.body.token, '1508', (errs, decoded) => {
        if (errs) {
            info = 'errs';// 登录超时
        } else {
            let adminList = JSON.parse(fs.readFileSync('./data_table/adminList.json', 'utf-8')).list;
            adminList.forEach((v, i) => {
                if (v.username === decoded.username) {
                    if (v.authorization === 'admin') {
                        let list = JSON.parse(fs.readFileSync('./data_table/residentList.json', 'utf-8'));
                        list.forEach((v, i) => {
                            if (v.id === req.body.id) {
                                list.splice(i, 1);
                            }
                        });
                        fs.writeFileSync('./data_table/residentList.json', JSON.stringify(list));
                        info = 'success';// 成功
                    } else {
                        info = 'NO authorization'; // 无权限
                    }
                }
            });
        }
        res.end(JSON.stringify(info));
    });
};