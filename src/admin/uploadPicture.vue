<template lang="html">
    <div>
        <el-upload class="upload-demo" drag multiple list-type="picture" :file-list="fileList2" action="https://jsonplaceholder.typicode.com/posts/">
            <i class="el-icon-upload"></i>
            <div class="el-upload_text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload_tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                 {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
            };
        },
    }
</script>
<style scoped>
    .upload-demo{
        width: 1200px;
        margin: 20px auto;
    }
</style>
