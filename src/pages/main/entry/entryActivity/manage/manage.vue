<template>
   <div class="manage">
    <h1>报名名单</h1>
    <div>
        <el-table ref="multipleTable" tooltip-effect="dark" :data="$store.state.residentList" style="width: 100%" >
            <el-table-column prop="name" label="居民姓名">
            </el-table-column>
            <el-table-column prop="tel" label="联系电话" >
            </el-table-column>
            <el-table-column prop="info" label="备注信息" >
            </el-table-column>            
            <el-table-column prop="time" label="报名时间" >
            </el-table-column>
            <el-table-column label="操作" >
                <template slot-scope="scope">                    
                    <el-button @click="deleteRow(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <p>
             <el-pagination background layout="prev, pager, next" :total="100" @current-change="handleCurrentChange">
        </el-pagination>
        </p>
    </div>
</div>
</template>

<script>
import {getCookie} from '@/utils/utils';
export default {
    name: 'manage',
    data () {
        return {
            page: 1
        }
    },
    created () {
        this.$store.dispatch('update_resident_list',1);
    },
    methods: {
        handleCurrentChange (page) {
            this.$store.dispatch('update_resident_list',page);
            this.page = page;
        },
        deleteRow (row) {
            this.$http.post('/admin/deleteResident',{id:row,token:getCookie('token')}).then(res=>{
                console.log(res);
                if (res.data=="success") {
                    this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消'
                    }).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!'
                        });
                        this.$store.dispatch('update_resident_list',this.page);   
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });          
                    });                                     
                }
                if(res.data=== 'errs'){
                    this.$confirm('用户登录已过期无法实现删除, 是否重新登陆?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消'
                    }).then(() => {
                        this.$router.push({
                            name:'login'
                        })
                    }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消登录'
                        });          
                    });
                    return;
                } else if (res.data=== 'NO authorization') {
                    this.$message(res.data);
                }                
            })
        }
    }
};
</script>

<style scoped>
h1{
    padding-top: 30px;    
    font-size: 20px;
    padding-bottom: 10px;
}
.manage{
    background: #fff;
    margin: 20px;
    padding-left: 20px;
}
p{
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: right;
}
</style>
