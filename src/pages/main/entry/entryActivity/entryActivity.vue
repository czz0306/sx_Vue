<template>
<div>
    <el-row class="swiper">
        <h1>活动列表</h1>
        <el-carousel :interval="4000" type="card" height="200px" >
            <el-carousel-item v-for="(item, index) in imgList" :key="index" class="swiper_slide">
                    <p>{{item.name}}</p>
                    <p>活动时间：{{item.startDate}}</p>
            </el-carousel-item>
        </el-carousel>
    </el-row>
    <el-row class="bottom-menu">
        <router-link :to="{name: 'name'}" tag="button" class="el-button">活动信息与报名</router-link>
        <router-link :to="{name: 'manage'}" tag="button" class="el-button">人员管理</router-link>
    </el-row>
    <el-row>
        <router-view></router-view>
    </el-row>
</div>
</template>

<script>
import menuTopLeft from "../../../content/menuTopLeft.vue";
export default {
    name: "entryActivity",
    components: {
        menuTopLeft
    },
    data() {
        return {
            imgList: ''
        };
    },
    created() {
        this.$http.post("/admin/swiper").then(res => {
            this.imgList = res.data;
        });
    }
};
</script>

<style scoped>
.swiper {
  background: #fff;
  height: 300px;
  margin: 10px;
  padding: 0 20px;
}
.el-carousel__item div {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.bottom-menu {
  height: 100px;
  text-align: center;
  line-height: 100px;
}

.router-link-active,
.router-link-exact-active {
  display: inline-block;
  background: skyblue !important;
  color: #fff !important;
}

.el-button:focus,
.el-button:hover {
  color: #fff;
  border-color: skyblue;
  background-color: skyblue;
}

h1 {
  padding-top: 30px;
  font-size: 20px;
  padding-bottom: 10px;
}
.swiper_slide {
  text-align: center;
}
.swiper_slide p {
    font-style: 20px !important;
    margin-top: 20px;
}
</style>
