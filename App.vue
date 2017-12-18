<template>
    <router-view></router-view>    
</template>

<script>
export default {
    name: 'App'
};
</script>

<style>
 html,body{
    width: 100%;
    height: 100%;
}
h1,h2,h3,h4,h5,h6{
    font-weight: normal;
    font-size: 0.12rem;
    padding: 0;
    margin: 0;
}
.bg{
    background: #01b0b9;
    color: #fff;
}
/* 活动管理-邀请居民的弹框样式设置 */
.el-message-box {
    width: 800px;
    text-align: center;
}
.el-message-box__header{
    background: #00afba;
}
.el-message-box__title{
    color: #fff;
}
.el-message-box__content{
    margin: 10px 0;
}
.box_btn{
    width: 50px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    background: red;
}
.box_btn2{
    width: 100px;
    height: 30px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    background: #00afba;
    margin-top: 20px;
}
.box_input {
    width: 300px;
    height: 30px;
    border: solid 1px #ccc;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 30px;
}
.box_input2{
    width: 700px;
    height: 60px;
    border: solid 1px #ccc;
    border-radius: 5px;
    padding-left: 10px;
    margin-right: 30px;
}
.box_info{
    font-size: 14px;
    margin-right: 30px;
}

.el-icon-close::before {
    color: #fff;
}

.el-menu {
    border-right-width: 0px!important;
}
.avatar-uploader{
     width: 100%;
}
.el-upload{
    display: block;
    width: 100%;
}
</style>
