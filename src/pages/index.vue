<template>
    <el-container>
        <sxMenu></sxMenu>
        <sxMain></sxMain>        
    </el-container>
</template>

<script>
import sxMenu from './menu/menu.vue';
import sxMain from './main/main.vue';
export default {
    name: 'index',
    components: {
        sxMenu: sxMenu,
        sxMain: sxMain
    }
};
</script>

<style scoped>

</style>
