<style lang="less" scoped>
    .model {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 99;
        background:rgba(0,0,0,1);
        opacity: 0.5;
        width:100%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
       
    }
    .model-title {
        width:100%;
        height:100%;
        position: absolute;
        display: flex;
        z-index:100;
        justify-content: center;
        flex-direction: column;
        align-items: center;
         span {
            color:#fff;
        }
    }
    .clone {
        position: absolute;
        right:10px;
        top: 10px;
        cursor: pointer;
        z-index: 999;
        img {
            width:25px;
            height: 25px;
        }
    }
    .clone:hover{
            transform: rotateZ(180deg);
        
    }
</style>
<template>
<!-- 中奖弹出框 -->
    <div>
        <div class="model" ></div>
        <div class="model-title">
            <img :src="conterText.img" alt="">
        <span>{{conterText.name}}</span>
        </div>
        <!-- 关闭按钮 -->
        <div class="clone all" @click="clone">
            <i>
                <img src="../../../static/img/clone.png" alt="">
            </i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
              conterText:''  
        }
    },
    props:[
        'showList'
    ],
    created(){
    },
    methods: {
        parentHandleclick(val){
            this.conterText = val
        },
        clone(){
            // 调用父级关闭模态框
            console.log(this.$emit('modelt'))
            this.$emit('modelt')
            
        }
    },
    
}
</script>