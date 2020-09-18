<style lang="less">
    .el-header {
        padding: 0;
        background-color: #393D49;
        position: relative;
    }
    .el-aside {
    width:inherit !important;
    background-color: #393D49;
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0;
    z-index: 20;
    padding-top: 10px;
    min-width: 230px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    }
    .el-aside::-webkit-scrollbar {
        width: 0px;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
        position: absolute;
        right: 2px;
    }
    .el-asideFalse {
        min-width: inherit !important;
    }
    .layadmin-body-shade{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.3);
    z-index: 10;
    }
    .site-mobile {
    display: block;
    position: fixed;
    cursor: pointer;
    z-index: 100;
    bottom: 15px;
    left: 15px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 2px;
    text-align: center;
    background-color: rgba(0,0,0,.7);
    color: #fff;
    }
    .showLeft {
        transform: translate3d(0px,0,0);
    }
    .hideLeft {
        transform: translate3d(230px,0,0) !important;
        
    }
    .el-main  {
        position: fixed;
        width:calc(100% - 230px);
        top:60px;
        bottom: 0px;
        padding: 0;
        left: 0;
        padding: 15px;
        transform: translate3d(230px,0,0);
        background-color:#EEEEEE;
    }
</style>
<template>
    <div>
<el-container>
    <!-- 头部 -->
  <el-header>
      <headerFrom @header-vue="aside_header" />
      </el-header>
  <el-container>
      <!-- 左边菜单栏 -->
    <el-aside :class="[CollapseIs?'el-asideFalse':'', Leftshow ? 'showLeft':'' ]" class="all">
   
        <left />
    </el-aside>
    <el-container>
        <!-- 右边内容 -->
      <el-main class="all" :class="Leftshow ? 'hideLeft':''">
          <!-- 显示路径  -->
          <router-view></router-view>
          <!--  -->
      </el-main>
        <!-- 模态框 -->
        <div class="layadmin-body-shade hidden-sm-and-up" v-if="Leftshow" @click="modile">
        </div>
        <!-- 显示展开左边栏菜单 -->
        <div class="site-mobile hidden-sm-and-up" @click="site_mobile" v-if="!Leftshow">
            <i class="el-icon-arrow-right"></i>
        </div>
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
                CollapseIs:false,
                Leftshow:false,
        }
    },
    components:{
        headerFrom,
        left
    },
    mounted(){
    },
    created(){
        console.log(this.$router.options)
    },
   
    methods:{
        aside_header(data){
            const _this = this;
            _this.CollapseIs = data
        },
        // 点击展开 左边菜单栏
        site_mobile(){
            const _this = this;
            _this.Leftshow = true
        },
        // 点击模态框
        modile(){
            const _this = this;
            _this.Leftshow = false
        },
        // 跳转页面
        goto(){
            this.$router.push()
        }
        
    }
}
</script>