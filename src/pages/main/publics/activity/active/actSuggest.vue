<template>
<div>
    <h1 class="title">基本信息 </h1>
    <div class="info-top-list" >
        <div class="info-left">
            <uploadImg :index="0" :hasDelete="0"></uploadImg>           
        </div>
        <div class="info-right">
            <el-form ref="form"  label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="name"></el-input>
                </el-form-item>
                <el-form-item label="选择日期">
                    <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="活动区域" class="demo-input-size" >
                    <el-select v-model="prov" placeholder="请选择省" @change="changeProv">
                        <el-option v-for="(val, index) in data" :key="index" :label="val.name" :value="val.name"></el-option>
                    </el-select>
                    <el-select v-model="city" placeholder="请选择市" @change="changeCity">
                        <el-option v-for="(val, index) in cityList" :key="index" :label="val.name" :value="val.name"></el-option>
                    </el-select>
                    <el-select v-model="area" placeholder="请选择区" >
                        <el-option v-for="(val, index) in areaList" :key="index" :label="val" :value="val"></el-option>
                    </el-select>
                    <el-select v-model="door" placeholder="请选择房号">
                        <el-option label="111室" value="111室"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
        </div>
    </div>
    <div class="info-list-up" v-for="(v, index) in $store.state.arr" :key="index">
        <uploadImg :index="index" :hasDelete="v.hasDelete"></uploadImg>
    </div>
    <div class="hold-up">
        <el-button type="primary" @click="save_pulish">保存并发布</el-button>
    </div>
</div>
    
</template>

<script>
import uploadImg from '../../../../content/uploadImg.vue';
export default {
    name: 'actSuggest',
    data () {
        return {
            name: '',
            value: '',
            data: '',
            prov: '',
            city: '',
            cityList: [],
            area: '',            
            areaList: [],
            door: ''
        };
    },
    components: {
        uploadImg
    },
    methods: {
        save_pulish () {            
            this.$http.post('/admin/activity/add',{
                categoryId: '活动类别id',
                name: this.name,
                imagePath: this.$store.state.imageUrl,
                startDate: this.value[0],
                endDate: this.value[1],
                locationName: this.prov + this.city + this.area+ this.door
            }).then( (res)=> {
                if(res.data=='success'){
                    this.$message({
                        message:'发布成功',
                        onClose:function(){
                            console.log(123);
                        }
                    });
                    this.name = '',
                    this.value = '',
                    this.prov = '',
                    this.city = '',
                    this.area = '',
                    this.door = ''
                };
            })
        },
        changeProv (val) {
            this.city = '';
            this.area = '';
            this.data.forEach((v, i) => {
                if(v.name === val){
                    this.cityList = v.city;
                }
            });            
        },
        changeCity (val) {
            this.area = '';
            this.cityList.forEach((v, i) => {
                if(v.name === val){
                    this.areaList = v.area;
                }
            });         
        }
    },
    created () {
        this.$http.get('/admin/community/location/root').then((res)=>{
            this.data = res.data;
        })
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


/* 日期 */
.info-top-list{
    height: 240px;
    display: flex!important;
    width: 100%!important;
}
.info-left{
    flex: 1
}
.info-right{
    flex:2;
    padding: 10px;
}

.el-input__inner{
    width: 100%;
    font-size: 14px;
}

.el-select{
    width: 24%
}

.hold-up {
    text-align: center;
    line-height: 50px;
}
</style>
