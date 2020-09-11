<style lang="less">
.modile {
  position: fixed;
  width: 100%;
  height: 100%;
}
.loading-box {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  .box-ball {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    -webkit-animation: loading-center-absolute 1s infinite;
    animation: loading-center-absolute 1s infinite;
  }
  .ball {
    width: 20px;
    height: 20px;
    background-color: #FF00FF;
    float: left;

    -moz-border-radius: 50% 50% 50% 50%;
    -webkit-border-radius: 50% 50% 50% 50%;
    border-radius: 50% 50% 50% 50%;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .ball:nth-child(2n + 0) {
    margin-right: 0px;
  }
  .ball:nth-child(1) {
    -webkit-animation: object_one 1s infinite;
    animation: object_one 1s infinite;
  }
  .ball:nth-child(2) {
    -webkit-animation: object_two 1s infinite;
    animation: object_two 1s infinite;
  }
  .ball:nth-child(3) {
    -webkit-animation: object_three 1s infinite;
    animation: object_three 1s infinite;
  }
  .ball:nth-child(4) {
    -webkit-animation: object_four 1s infinite;
    animation: object_four 1s infinite;
  }
}
</style>
<template>
  <!-- 加载页。页面加载的时候 -->
  <div>
    <div class="modile" v-show="show"> 
      <div class="loading-box">
        <div class="box-ball">
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
          <div class="ball"></div>
        </div>
      </div>
    </div>
    <!-- 加载动画 -->
  </div>
</template>
<script>
export default {
  props:{
    show:Boolean
  }
}
</script>