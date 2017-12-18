<template>
    <div class="box">
        <div class="wrap">
            <el-form label-width="80px">
                <el-form-item label="用户名：">
                    <el-input  v-model.trim="username"></el-input>
                </el-form-item>
                <el-form-item label="密  码：">
                    <el-input v-model.trim="password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <p>
                <el-button @click="go_to_register" type="success">注册</el-button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        go_to_register () {
            console.log(this.username, this.password);
            this.$http.post('/admin/registerUser', {
                username: this.username,
                password: this.password
            }).then((res) => {
                if (res.data.code === 0) {
                    this.$alert(res.data.msg, '注册信息有误', {
                        confirmButtonText: '确定'
                    });
                } else if (res.data.code === 1) {
                    this.$alert(res.data.msg, '注册信息提示', {
                        confirmButtonText: '去登陆'
                    });
                    this.$router.push({name: 'login'});
                }
            })
        }
    }
};
</script>

<style scoped>
.box{
    text-align: center;
    width: 100%;
    height: 100%;
    background: url(../../../static/img/bg.jpg);
    background-size: 100%;
}
.wrap{
    padding-top: 50px;
    width: 500px;
    margin: 0 auto;
}
p{
    margin-top: 10px;
}
</style>
