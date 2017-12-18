<template>
  <div>
       <h1 class="title">角色管理 <span>短信通知</span></h1>
       <div>
       <el-table ref="multipleTable" tooltip-effect="dark" :data="$store.state.residentList" style="width: 100%" @selection-change="handleSelectionChange">              <el-table-column type="selection"  width="55"></el-table-column>
            <el-table-column prop="name" label="居民姓名" >
            </el-table-column>
            <el-table-column prop="tel" label="联系电话" >
            </el-table-column>
            <el-table-column prop="send" label="短信通知" >
            </el-table-column>
            <el-table-column prop="info" label="备注信息" >
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
export default {
    name: 'actSignUp',
    data() {
        return {
            checked: true
            }
    },
    created () {
        this.$store.dispatch('update_resident_list',1);
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleCurrentChange (page) {
            this.$store.dispatch('update_resident_list',page);
            this.page = page;
        },
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

</style>
