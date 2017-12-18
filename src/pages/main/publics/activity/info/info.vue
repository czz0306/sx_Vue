<template>
<div class="info-box">
    <h1 class="tilte">基本信息</h1>
    <div class="fz14"> 
        <el-row>
            <el-col :span="6">
                <div class="grid-content bg-purple fz14">责任人</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light fz14">
                    <el-dropdown>
                        <span class="el-dropdown-link fz14" >
                            选择责任人<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item >责任人1</el-dropdown-item>
                            <el-dropdown-item>责任人1</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple fz14">责任人单位</div>
            </el-col>
            <el-col :span="6">
                <div class="grid-content bg-purple-light fz14">
                    <el-dropdown>
                        <span class="el-dropdown-link fz14">
                            选择责任人单位<i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>责任人单位1</el-dropdown-item>
                            <el-dropdown-item>责任人单位1</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="12">
                <el-input></el-input>
            </el-col>
             <el-col :span="12">
                <el-input></el-input>
            </el-col>
        </el-row>
        <el-row class="mt10">
            <div >温馨提示</div>
            <el-input></el-input>
        </el-row>
        <el-row>
            <div class="info-list-up" v-for="(v, index) in $store.state.arr" :key="index">
                <uploadImg :index="index" :hasDelete="v.hasDelete"></uploadImg>
            </div>              
            
            <div class="hold-up">
                <el-button type="primary">保存并发布</el-button>
            </div>
        </el-row>
    </div>
</div>
</template>

<script>
import uploadImg from '../../../../content/uploadImg';
export default {
    name: 'sxInfo',
    data () {
        return {
            imageUrl: ''
        };
    },
    components: {
      uploadImg  
    },
    methods: {
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        }
    }
};
</script>

<style scoped >
.info-box{
    padding: 20px;
    margin: 10px;
    background: #fff;
}
.fz14{
    font-size: 14px;
}
.mt10{
    margin-top: 10px;
}
.mtb5{
    margin-bottom: 5px;
}
.bg-purple-light{
    text-align: right;
}
h1.tilte{
    font-size: 20px;
    margin-bottom: 25px;
}




.hold-up {
    text-align: center;
    line-height: 50px;
}
</style>
