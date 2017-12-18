<template>
<div>
    <h1 class="title">邀请居民 <span @click="open">添加居民</span> <span>短信通知</span></h1>
    <div>
        <el-table ref="multipleTable" tooltip-effect="dark" :data="$store.state.residentList" style="width: 100%" @selection-change="handleSelectionChange">              <el-table-column type="selection"  width="55"></el-table-column>
            <el-table-column prop="name" label="居民姓名" width="100">
            </el-table-column>
            <el-table-column prop="tel" label="联系电话" width="150">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="100">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="100">
            </el-table-column>
            <el-table-column prop="send" label="短信通知" width="150">
            </el-table-column>
            <el-table-column prop="info" label="备注信息" width="200">
            </el-table-column>
            <el-table-column
                label="操作" width="200" fixed="right">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="writeInfo(scope.row.id)">备注</el-button>
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>                    
                    <el-button @click="deleteRow(scope.row.id)" type="text" size="small">删除</el-button>
                </template>
                </el-table-column>
        </el-table>
    </div>
    <p>
        <el-pagination background layout="prev, pager, next" :total="100" @current-change="handleCurrentChange">
        </el-pagination>
    </p>
    
       
</div>
</template>

<script>
import {getCookie} from '@/utils/utils';
export default {
    name: 'actRequest',
    data() {
        return {
            checked: true,
            page:1
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
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleClick(row) {
            console.log(row);
        },
        deleteRow (row) {
            this.$http.post('/admin/deleteResident',{id:row,token:getCookie('token')}).then(res=>{
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
        },
        writeInfo (id) {
            this.$prompt('请输入备注', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(({ value }) => {
                this.$http.post('/admin/writeInfo',{
                    id: id,
                    info: value
                }).then((res) => {
                    if(res.data === 'success'){
                        this.$store.dispatch('update_resident_list',this.page); 
                        this.$message({
                            type: 'success',
                            message:'备注信息成功'
                        })
                    }
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });       
            });
        },
        open () {
            this.$alert('<span class="box_info">居民信息</span><input type="text" placeholder="请输入用户名或手机号" class="box_input"><button class="box_btn">查询</button>', '提示信息', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '确定',
                showConfirmButton: false,
                callback: action => {
                    this.$message({
                    type: 'info',
                    message: `action: ${ action }`
                    });
                }
            });  
        }
    }
};
</script>

<style scoped>
.title{
  font-size:18px;
  color:#212121;
  margin-top: 30px;
  margin-bottom: 19px;
  font-size: 20px;
}
.title span{
  font-size:14px;
  margin-left: 15px;
}
.title span:nth-child(1){
  color:#01b0b9;
}
p{
    text-align: right;
    margin-top: 10px;
}
.el-message-box{
    width: 850px!important;
}
</style>
