<template>
    <div v-loading="loading" 
    class="box" 
    element-loading-text="拼命加载中" 
    element-loading-spinner="el-icon-loading" 
    element-loading-background="rgba(0, 0, 0, 0.8)">
        <div class="wrap">
            <el-form label-width="80px">
                <el-form-item label="用户名：">
                    <el-input v-model.trim="username"></el-input>
                </el-form-item>
                <el-form-item label="密  码：">
                    <el-input v-model.trim="password" type="password"></el-input>
                </el-form-item>
            </el-form>
            <p>
                <el-button @click="go_to_login" type="primary">登录</el-button>
            </p>
        </div>
    </div>
</template>

<script>
import { setCookie } from '../../utils/utils.js';
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: '',
            loading: false
        };
    },
    methods: {
        go_to_login() {
            this.loading = true;
            this.$http.post('/admin/loginUser', {
                username: this.username,
                password: this.password
            }).then(res => {      
                setTimeout(() => {
                    if (res.data.code === 1) {
                        setCookie('token', res.data.token);
                        this.$store.commit('update_username', this.username);
                        this.$router.push({path:'index/publics/activity/1/active'});
                    } else  {
                        this.loading = false;
                        this.$alert(res.data.msg, '登录信息有误', {
                            confirmButtonText: '去注册',
                            callback: action => {
                                this.username='',
                                this.password=''
                            }
                        });
                        this.$router.push({name: 'register'});
                    }                
                 }, 1000);                
            });
        }
    },
    mounted () {
        console.log(document.cookie);        
    }
};
</script>

<style scoped>
.box {
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
