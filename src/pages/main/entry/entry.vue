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
    name: 'entry',
    components: {
        menuTopLeft
    },
    created () {
        this.$http.get('/admin/menu/entry').then((res) => {
            console.log(res.data);
            this.$store.commit('update_menu',res.data.data);
        })
    }
};
</script>

<style scoped>



</style>

