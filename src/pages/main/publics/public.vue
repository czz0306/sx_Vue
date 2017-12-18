<template>
<div>
    <menuTopLeft></menuTopLeft>
    <el-row>
        <router-view></router-view>
    </el-row>
</div>
    
</template>

<script>
import menuTopLeft from '../../content/menuTopLeft.vue';
export default {
    name: 'public',
    created () {
        this.$http.get('/admin/menu/public').then((res) => {
            console.log(res.data);
            this.$store.commit('update_menu',res.data.data);
        })
    },
    components:{
        menuTopLeft
    }
};
</script>

<style scoped>

</style>
