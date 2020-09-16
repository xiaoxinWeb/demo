<style lang="less" >
    .el-menu-item:not(.is-disabled):hover{
       animation: bounce 1s cubic-bezier(.4,0,.2,1) infinite alternate;
       color:#fff !important;
   }
   .el-menu-item:not(.is-disabled){
       position: relative;
   }
 
   .el-menu-item:not(.is-disabled)::after {
       content: "";
    display: block;
    width: 0;
    height: 4px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 50%;
    transition: 1s all ease;
   }
   .el-menu-item:not(.is-disabled):hover::after {
    width: 100%;
    left: 0;
   }
   .is-active::after{
       width:100%;
       left:0;
   }
 
   .el-menu-item:not(.is-disabled):hover i{
       display: inline-block;
       color:#fff !important;
       animation: loading-center-absolute 3s linear infinite;
   }
   .box-header {
       display: flex;
       justify-content: space-between;
       padding: 0 5px;
       align-items: center;
       line-height: 60px;
       position: relative;
       .logo {
           color:#D0D1D3;
           span {
               font-size: 30px;
               font-weight: 400;
           }
       }
       .el-link.el-link--default:hover{
           color:#D0D1D3;
           border:none;
       }
       .is-underline:hover::after{
           border:none
       }
   }
  .el-menu--horizontal>.el-submenu .el-submenu__title {
      height:none !important;
  }
 
    .header-portrait {
        display: flex;
        flex-direction: row;
    }
    .header-portrait{
        .logo-picture {
            .el-dropdown {
                width:100%;
                height:100%;
                display: flex;
                align-items: center;
                cursor: pointer;
            }
           
        }
    }
</style>
<template>

    <div class="box-header">
        <!-- logo -->
        <div>
        <el-link class="logo">
            H-admin
        </el-link>
        </div>
        <!-- 设置logo -->
            <!-- 列表和头像 -->
        <div class="header-portrait">
        <el-menu  class="hidden-xs-only"  :default-active="activeIndex" background-color="#393D49" text-color="#999" active-text-color="#fff" horizontal="true" mode="horizontal" menu-trigger="hover">
                <el-menu-item
                v-for="(item,index) in headerlist"
                :index="item.id"
                v-if="item.chidred == null"
                >
                 <i class="iconfont" :class="item.icon"></i>
                <span slot="title" class="nameList">{{item.name}}</span>
                    
                </el-menu-item>
                <el-submenu  :index="item.id"  v-else  class="hidden-xs-only">
                <template slot="title"> 
                    <i class="iconfont" :class="item.icon"></i>
                <span slot="title" class="nameList">{{item.name}}</span></template>
                 <el-menu-item
                v-for="(chidren,list) in item.chidred" :index="chidren.id">
                <i class="iconfont" :class="chidren.icon"></i>
                <span slot="title" class="nameList">{{chidren.name}}</span>
                </el-menu-item>
                </el-submenu>   
                         
        </el-menu>
        <!-- 头像和下拉退出 -->
            <el-menu class="hidden-sm-and-up"  :default-active="activeIndex2" background-color="#393D49" text-color="#999" active-text-color="#fff" horizontal="true" mode="horizontal" >
                 <el-submenu>
                <template slot="title"> 
                <span slot="title" class="nameList">所有栏目</span></template>
                 <el-menu-item
                v-for="(item2,index2) in headerlist" :index="item2.id" v-if="item2.chidred == null">
                <i class="iconfont" :class="item2.icon"></i>
                <span slot="title" class="nameList">{{item2.name}}</span>
                </el-menu-item>
                <el-submenu :index="item2.id"  v-else>
                    <template>
                       <span slot="title" class="nameList">{{item2.name}}</span>
                        <el-menu-item
                v-for="(chidren2,list2) in item2.chidred" :index="chidren2.id">
                <i class="iconfont" :class="chidren2.icon"></i>
                <span slot="title" class="nameList">{{chidren2.name}}</span>
                </el-menu-item>
                    </template>
                </el-submenu>
                </el-submenu>
               
            </el-menu>
             <!-- 头像 -->
             <div class="logo-picture">
                 <el-dropdown>
                    <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>
                                <el-link>修改头像</el-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-link>个人信息</el-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-link>修改密码</el-link>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-link>退出</el-link>
                            </el-dropdown-item>
                    </el-dropdown-menu>
                 </el-dropdown>

             </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
                headerlist:"",
                activeIndex:1,
                activeIndex2:1
        }
    },
    mounted(){
        // 获取头部内容
        this.headerTop();

    },
    methods:{
        headerTop(){
            // 头部内容
            const _this = this;
            _this.$axios.get('/static/js/header.json',{
                params:{
                  data: "data",
            }
            }).then(function(res){
                
                _this.headerlist = res.data.header
            })
        }
    }

  }
</script>