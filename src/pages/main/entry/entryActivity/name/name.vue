<template>
<div>
    <div class="top">
        <h1>活动信息</h1>
        <h2>活动地点：社区居委会活动室</h2>
        <h2>温馨提示： 请携带有效证件前往，如身份证</h2>
    </div>
    <div class="content">
        <h1>居民报名</h1>
        <el-form ref="form" label-width="80px">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input v-model="name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="电话">
                        <el-input v-model="tel"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <!-- <el-row>
                <el-col :span="12">
                    <el-form-item label="年龄">
                        <el-input v-model="age"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别">
                        <el-input v-model="sex"></el-input>
                    </el-form-item>
                </el-col>
            </el-row> -->

            <el-row>
                <el-form-item label="备注信息">
                    <el-input v-model="info"></el-input>
                </el-form-item>
            </el-row>
        </el-form>
        
        <p>
            <el-button @click="add" type="primary">报名</el-button>
        </p>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'name',
    data () {
        return {
            name: '',
            tel: '',
            info: ''
        }
    },
    methods: {
        add () {                       
            this.$http.post('/admin/addResident',{
                name: this.name,
                tel: this.tel,
                info: this.info
            }).then((res) => {
                console.log(res);
                if(res.data === 'YES'){
                    console.log(1111111);
                    this.$store.dispatch('update_resident_list',this.page); 
                    this.$message({
                        type: 'success',
                        message:'居民报名成功'
                    });
                    this.name = '',
                    this.age = '',
                    this.tel = '',
                    this.sex = '',
                    this. info = ''
                } else{
                    this.$message({
                        type: 'warning',
                        message:'电话号码格式错误'
                    })
                }
            });
        }
    }
};
</script>

<style scoped>
.top{
    height: 140px;
    background: #fff;
    margin: 20px;
    padding-left: 20px;

}
h1{
    padding-top: 30px;    
    font-size: 20px;
    padding-bottom: 10px;
}
.top h2{
    font-size: 16px;
    padding-bottom: 13px;
}
.content{
    height: 400px;
    background: #fff;
    margin: 20px; 
    padding-left: 20px;
    padding-right: 20px;
}
.content .el-form{
    margin-top: 20px;
}
.content p{
    text-align: center;
}


</style>
