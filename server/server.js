const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const fs = require('fs');
// const jwt = require('jsonwebtoken');
const multer = require('multer');
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null, file.fieldname + '-' + file.originalname);
    }
});
let uploads = multer({storage: storage});

app.use(bodyParser.json());
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 请求地址信息--城市列表
let addrApi = require('./api/location.js');
app.get('/admin/community/location/root', addrApi);

// // 分页信息
let userList = require('./api/userList.js');
app.post('/admin/getUserList', userList);
// 删除居民信息--id
let deleteResident = require('./api/deleteResident.js');
app.post('/admin/deleteResident', deleteResident);
// 备注居民信息--info
let writeInfo = require('./api/writeInfo.js');
app.post('/admin/writeInfo', writeInfo);

// 居民报名信息
let addResident = require('./api/addResident');
app.post('/admin/addResident', addResident);
// 活动展示swiper
let swiper = require('./api/swiper.js');
app.post('/admin/swiper', swiper);

// 添加活动信息
let addAct = '/admin/activity/add';
let addActCallback = require('./api/activity_add.js');
app.post(addAct, addActCallback);

// 上传文件
let upload = '/user/upload';
app.post(upload, uploads.single('file'), function (req, res) {
    res.end(JSON.stringify(1));
});

// 公共页面的菜单接口
let publics = '/admin/menu/:name';
let menu = require('./api/menu.js');
app.all(publics, menu);

// 登录
let loginUser = require('./api/loginUser.js');
app.post('/admin/loginUser', loginUser);

// 注册
let registerUser = require('./api/registerUser.js');
app.post('/admin/registerUser', registerUser);

app.listen(3000, function (data) {
    console.log(3000);
});