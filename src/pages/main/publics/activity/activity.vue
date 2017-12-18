<template>
<div>
  <el-row class="bottom-menu">
        <router-link :to="{name: 'info'}" tag="button" class="el-button">信息管理</router-link>
        <router-link :to="{name: 'active'}" tag="button" class="el-button">活动管理</router-link>        
    </el-row>
    <el-row>
        <router-view></router-view>
    </el-row>
</div>
    
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom-menu{
    height: 100px;
    text-align: center;
   line-height: 100px;
}
.router-link-active, .router-link-exact-active{
    display: inline-block;
    background: skyblue!important;
    color: #fff!important;
}
.el-button:focus, .el-button:hover {
    color: #fff;
    border-color: skyblue;
    background-color: skyblue;
}
</style>
