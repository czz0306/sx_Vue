<template>
    <el-main>
        <el-row class="top-menu">
            <el-col :span="12">
                <el-menu  class="el-menu-demo" mode="horizontal"  background-color="#fff" text-color="#333" active-text-color="#ffd04b">
                    <router-link to="/index/entry" tag="li" class="el-menu-item" index="1">一口式受理平台 </router-link>
                    <router-link to="/index/gridding" tag="li" class="el-menu-item" index="1">网格化管理平台 </router-link>
                    <router-link to="/index/publics" tag="li" class="el-menu-item" index="1">公共服务平台 </router-link>
                </el-menu>
            </el-col>
            <el-col :span="12" class="right-menu">
                <el-menu  class="el-menu-demo" mode="horizontal"  background-color="#fff" text-color="#333" active-text-color="#ffd04b">
                    <el-menu-item index="1"><i class="el-icon-bell " ></i></el-menu-item>
                    <el-menu-item index="2"><i class="el-icon-printer "></i></el-menu-item>
                    <el-submenu index="3">
                        <template slot="title"><img src="../../../static/img/1.jpg" alt="" class="people"> 管理员 {{$store.state.username}}</template>
                        <el-menu-item index="3-1" @click="loginOut">退出</el-menu-item>
                    </el-submenu>                
                </el-menu>
            </el-col>
        </el-row>
        <router-view></router-view>       
    </el-main>   
</template>

<script>
import { delCookie } from '../../utils/utils.js';
export default {
    name: 'sxMain',
    methods: {
        loginOut () {
            delCookie('token');
            this.$router.push({name: 'login'});
        }
    }
};
</script>

<style scoped>
.el-main{
    padding: 0;
    background: #eee;
}


.right-menu ul[role='menubar']{
    float: right;
}
.el-menu--horizontal{
    border-bottom: 0
}
.top-menu{
    box-shadow: 0 3px 3px #ccc;
    background: #fff;
}

.middle-menu{
    margin-left: 19px;
    margin-top: 14px;
}
i{
    font-size: 22px;
}
.people{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: solid 1px #ccc;
}
.bottom-menu-son{
    text-align: center;
}
.el-menu-item{
    color: rgb(51, 51, 51);
    border-bottom-color: transparent;
    background: #ffff;
    padding: 0 20px;
}

.router-link-active, .router-link-exact-active{
    display: inline-block;
    background: skyblue!important;
    color: #fff!important;
}
</style>
