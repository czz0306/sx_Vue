<template>
<div class="active-box">
    <el-tabs type="border-card">        
        <el-tab-pane label="活动介绍">
            <actSuggest></actSuggest>
        </el-tab-pane>
        <el-tab-pane label="邀请居民">
            <actRequest></actRequest>            
        </el-tab-pane>
        <el-tab-pane label="居民报名">
            <actSignUp></actSignUp> 
        </el-tab-pane>
        <el-tab-pane label="活动总结">
            <actSummary></actSummary>
        </el-tab-pane>
    </el-tabs>
</div>
  
</template>

<script>
import actSuggest from './actSuggest.vue';
import actRequest from './actRequest.vue';
import actSignUp from './actSidnUp.vue';
import actSummary from './actSummary.vue'
export default {
    name: 'sxActive',
    components: {
        actSuggest,
        actRequest,
        actSignUp,
        actSummary
    }
};
</script>

<style scoped >
.active-box{
    margin: 10px;
    padding: 20px;
    background: #fff;
}

.el-tabs--border-card>.el-tabs__content{
  padding: 0
}
.title{
  font-size:18px;
  color:#212121;
  padding-left: 43px;
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
ul{
  height: 30px;
  margin-top: 10px;
}
li{
  width: 100%;
}
li .el-col{
  text-align: center;
}
ol li{
  border-bottom: solid 1px #ccc;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
}
.el-pagination{
  float: right;
}
</style>
