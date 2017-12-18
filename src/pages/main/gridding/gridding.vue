<template>
    <h1>azxcvbnm</h1>
</template>

<script>
export default {
    name: 'gridding',
    created () {
        this.$http.get('/admin/menu/grid').then((res) => {
            console.log(res.data);
            this.$store.commit('update_menu',res.data.data);
        })
    }
};
</script>

<style>

</style>
