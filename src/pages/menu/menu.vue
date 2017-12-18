<template>
<el-aside>
    <el-row class="tac">
        <el-col :span="24">
            <div class="aside-top">
                <h1>三鑫智慧社区</h1>
                <h2>公共管理平台</h2>
                <h3><img src="../../../static/img/1.jpg" alt=""></h3>
                <h4>管理员 {{$store.state.username}}</h4>
            </div>


            <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#29282e" text-color="#fff" active-text-color="#ffd04b">
                <div v-for="(item, index) in $store.state.menu" :key="index">
                    <el-submenu v-if="item.submenus" :index="index.toString()" >
                        <template slot="title">
                            <span>{{item.name}}</span>
                        </template>

                        <div v-for="(item_sub,index_sub) in item.submenus" :key="index_sub">
                            <el-submenu v-if="item_sub.submenus" :index="index+'-'+index_sub" >
                                <template slot="title">{{item_sub.name}}</template>

                                <div v-for="(item_sub_sub, index_sub_sub) in item_sub.submenus" :key="index_sub_sub">
                                    <el-menu-item @click="change_route(item_sub_sub.type, item_sub_sub.id, item_sub_sub.name)" :index="index+'-'+index_sub+'-'+index_sub_sub">{{item_sub_sub.name}}</el-menu-item>
                                    
                                </div>
                                
                            </el-submenu> 
                            <el-menu-item v-if="!item_sub.submenus" :index="index+'-'+index_sub">{{item_sub.name}}</el-menu-item>              
                        </div> 
                                           
                    </el-submenu>
                    <el-menu-item v-if="!item.submenus" :index="index.toString()">{{item.name}}</el-menu-item> 
                </div>
                               
            </el-menu>

        </el-col>
    </el-row>
</el-aside>

</template>

<script>
export default {
    name: "sxMenu",
    data () {
        return {
            menu: []
        }
    },
    created () {
    },
    methods: {
        
        change_route (type, id, name) { 
            console.log(type);           
            this.$router.push({
                name: type,
                params:{
                    id: id
                }
            });
            this.$store.commit('update_pathName', name);
        }
    }
};
</script>

<style scoped>
.el-aside{
    background: #29282e;
    color: #fff;
}
.aside-top{
    text-align: center;
    border-bottom: solid 1px #ccc;
}
.aside-top h1{
    font-size: 24px;
    margin-top: 32px;
}
.aside-top h2{
    font-size: 18px;
    margin-top: 17px;
}
.aside-top h3{
    width: 100%;
    height: 100%;
    margin-top: 32px;
}
.aside-top img{
    width: 81px;
    height: 81px;
    border-radius: 50%;
}
.aside-top h4{
    font-size: 16px;
    margin-top: 19px;
    margin-bottom: 20px;
}

</style>
