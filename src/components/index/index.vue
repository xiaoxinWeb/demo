<style lang="less">
    .el-header {
        padding: 0;
        background-color: #393D49;
        position: relative;
    }
    .el-aside {
        background-color: #393D49;
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0;
    z-index: 2;
    padding-top: 10px;
    width: 220px;
    max-width: 220px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    }
</style>
<template>
    <div>
<el-container>
    <!-- 头部 -->
  <el-header>
      <headerFrom/>
      </el-header>
  <el-container>
      <!-- 左边菜单栏 -->
    <el-aside width="200px">
        <left/>
    </el-aside>
    <el-container>
        <!-- 右边内容 -->
      <el-main>Main</el-main>
     
    </el-container>
  </el-container>
</el-container>
    </div>
</template>
<script>
import headerFrom from '../header/header'  //头部
import left from '../Leftmenu/leftmenu' //左边
export default {
    data(){
        return{

        }
    },
    components:{
        headerFrom,
        left
    }
}
</script>