<style lang="less"  scoped>
@import '../../assets/less/left.less';
.el-menu {
    width:100%;
}
</style>
<template>
    <div>
        <!-- 左边导航栏 -->
<el-menu :default-active="Leftactive" background-color="#393D49" text-color="#999" :unique-opened="true" active-text-color="#fff" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item v-for="(item,index) in Leftlist" v-if="item.children == null" :index="item.id">
        <i class="iconfont" :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
    </el-menu-item>
  <el-submenu 
  v-else
  :index = "item.id" >
      <template slot="title">
      <i class="iconfont" :class="item.icon"></i>
      <span slot="title">{{item.name}}</span>
      </template>
      <el-menu-item 
      v-for="(item2,index2) in item.children" 
      :index="item2.id" 
      v-if="item2.children == null">
          <i class="iconfont" :class="item2.icon"></i>
      <span slot="title">{{item2.name}}</span>
      </el-menu-item>
      <el-submenu v-else :index="item2.id">
          <template slot="title">
     <i class="iconfont" :class="item2.icon"></i>
      <span slot="title">{{item2.name}}</span>
          </template>
          <el-menu-item v-for="(item3,index3) in item2.children" :index="item3.id">
        <i class="iconfont" :class="item3.icon"></i>
        <span slot="title">{{item3.name}}</span>
          </el-menu-item>
      </el-submenu>
  </el-submenu>
</el-menu>
    </div>
</template>
<script>
export default {
    data() {
      return {
        isCollapse: false,
        Leftlist:"",
        Leftactive:"4"
      };
    },
    mounted(){
            // 获取左侧边栏菜单
            const _this = this;
            _this.leftList();
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      leftList(){
        //   获取左侧边菜单数据
        const _this = this;
         _this.$axios.get('/static/js/left.json',{
                params:{
                  data: "data",
            }
            }).then(function(res){
                _this.Leftlist = res.data.Left
            })
      }
    }
  }
</script>