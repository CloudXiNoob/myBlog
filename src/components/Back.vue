<template>
    <div class="back-wrapper" @click="back">
        <span class="mouse-pointer">Back</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .back-wrapper{
        width: 40px;
        height: 40px;
        display: inline-block;
        position: relative;
        z-index: 999;
        border-radius: 50%;
        background: #f9f9f9;
        text-align: center;
    }
</style>

