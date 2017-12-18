<template>
<div>
    <div class="" >
        <h2 class="title_son">请输入栏目名称             
            <span class="write">编辑</span> 
            <span class="column" @click="add_column">添加栏目</span> 
            <span class="look" @click="look">预览</span>
            <span v-if="this.hasDelete" @click="del_column">删除</span>
        </h2>
        <el-upload style="border: solid 1px #ccc"  class="avatar-uploader" action="http://localhost:3000/user/upload" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" >
            <i v-else class="el-icon-plus avatar-uploader-icon" ></i>
        </el-upload>     
        <p class="color_ccc">图片格式：jpg 图片大小：小于200K 建议尺寸：宽度大于800px</p>
    </div>
    
</div>

</template>

<script>
export default {
    name: 'actSummary',
    props: ['index', 'hasDelete'],
    data () {
        return {
            imageUrl: ''
        };
    },
    methods: {
        handleAvatarSuccess(res, file) {         
            this.imageUrl = URL.createObjectURL(file.raw);
            this.$store.commit('upload_imgUrl', this.imageUrl);
            console.log(this.imageUrl.split('blob:')[1]);
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
        },
        add_column () {
            this.$store.commit('update_img');
        },
        del_column (){
            this.$store.commit('update_delete', this.index);
        },
        look () {
            this.$alert('<img src="'+this.imageUrl+'" alt="">', '图片预览', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '确定',
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
 .avatar-uploader .el-upload {
     border: 1px solid #ccc;
     border-radius: 6px;
     cursor: pointer;
     position: relative;
     overflow: hidden;
     text-align: center;
 }

 .avatar-uploader {
     display: flex;
     justify-content: center;

 }
.el-upload{
    flex: 1!important;
    width: 100%!important;
}
 .avatar-uploader .el-upload:hover {
     border-color: #409EFF;
 }

 .avatar-uploader-icon {
     font-size: 28px;
     color: #8c939d;
     width: 178px;
     height: 178px;
     line-height: 178px;
 }

 .avatar {
     width: 100%;
     height: 178px;
 }

.title_son {
    font-size: 16px;
    line-height: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.title_son span {
    margin-left: 15px;
    font-size: 14px;
}

.title_son .column,
.write {
    color: #01b0b9;
}

.color_ccc {
    color: #ccc;
    font-size: 12px;
    line-height: 35px;
}


</style>
