// const Mock = require('mockjs');
const fs = require('fs');
module.exports = function (req, res) {
    console.log(req.body);
    let {count, pageSize} = req.body;
    /* const newlist = Mock.mock({
        'list|100': [{
            'id|+1': 0,
            'name': '@cname',
            'age|20-60': 1,
            'send|1': ['已通知', '未通知'],
            'tel': /13[123569]{1}\d{8}|15[1235689]\d{8}|188\d{8}/,
            'sex|1': ['男', '女'],
            'info': '-',
            'time': new Date().toLocaleDateString().split('/').join('-')
        }]
    });
    console.log(newlist); */
    let list = JSON.parse(fs.readFileSync('./data_table/residentList.json', 'utf-8'));
    let clist = list.slice(count * (pageSize - 1), count * pageSize);
    res.end(JSON.stringify(clist));
};