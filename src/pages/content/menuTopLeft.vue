<template>
<div>
    <el-row class="middle-menu">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>……</el-breadcrumb-item>
            <el-breadcrumb-item >{{$store.state.pathName}}</el-breadcrumb-item>
        </el-breadcrumb>
    </el-row>
</div>
    
</template>

<script>
export default {
    name: 'menuTopLeft'
};
</script>

<style scoped>
.middle-menu{
    margin-left: 19px;
    margin-top: 14px;
}
.bottom-menu{
    height: 100px;
    text-align: center;
   line-height: 100px;
}
</style>
