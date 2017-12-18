<template>
    <div>
        <uploadImg></uploadImg>
        <div class="hold-up">
        <el-button type="primary" >保存并发布</el-button>
    </div>
    </div>
</template>

<script>
import uploadImg from '../../../../content/uploadImg.vue';
export default {
    name: 'actSummary',
    components: {
        uploadImg
    }
}
</script>

<style scoped>
.hold-up {
    text-align: center;
    line-height: 50px;
}
</style>
