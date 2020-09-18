<style lang="less" scoped>
    .box-deskt {
        background-color:#fff;
        margin-bottom: 10px;
        padding: 10px 0;
    }
    .deskt-card {
        line-height: 24px;
        letter-spacing: 2px;
        padding:10px 15px;
        div {
            padding: 15px;
            border-left:5px solid #009688;
            font-size: 12px;
            color:#0e0e0e;
            background-color: #f2f2f2;
            span {
                color:red;
                font-size: 12px;
            }
        }

    }
    .statis-title {
            height: 42px;
            line-height: 42px;
            padding: 0 15px;
            border-bottom: 1px solid #f6f6f6;
            font-size: 14px;
            color: #333;
        }
    // 数据统计
    .statis {
        
        .statis-body {
            padding: 10px 15px;
            line-height: 24px;
            position: relative;
            .statis-list {
                margin:-5px;
                .el-col {
                    padding:5px;
                    a{
                            display: block;
                            padding: 10px 15px;
                            background-color: #f8f8f8;
                            color: #999;
                            border-radius: 2px;
                            transition: all .3s;
                            -webkit-transition: all .3s;
                        }
                    h3{
                        padding-bottom: 10px;
                        font-size: 12px;
                    }
                    span {
                        font-size: 24px;
                        color: #009688;
                        font-weight: 300;
                    }
                }
                .el-col:hover {
                    background:#d7d7d7;
                    border-radius: 5px;
                    a{
                    background:#d7d7d7; 
                    }
                }
            }
        }
    }
</style>
<template>
    <div>
        <!-- 标题欢迎显示时间和天气 -->
        <el-row>
        <el-col :xs="24" :sm="24" class=" box-deskt">
        <div class="deskt-card">
            <div>
                欢迎管理员:<span>Hello World</span>!当前时间:2019-10-20
            </div>
        </div>
        </el-col>
        <!-- 数据统计 -->
      
            <div class="statis">
                  <el-col :xs="24" :sm="24" class="box-deskt">
                <div class="statis-title">
                    数据统计
                </div>
                <div class="statis-body">
                    <div class="statis-list">
                        <el-col :xl="4" :lg="4" :md="12" :sm="12" :xs="24" v-for="(item,index) in staticData">
                            <el-link :underline="false" type="info">
                                    <h3>{{item.name}}</h3>
                                    <animate-number
                                     from="0" 
                                    :to="item.num" 
                                    duration="3000" 
                                    easing="easeOutQuad"
                                ></animate-number>
                            </el-link>
                        </el-col>
                        
                    </div>
                </div>
             </el-col>
            </div>
            <!-- canvas 统计图 和 地图 -->
            <div class="map-body">
                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="box-deskt">
                        <!-- 高德地图 -->
                <div class="statis-title">
                    九宫格抽奖--<span>未解决已知问题</span>
                </div>
                <el-col :xl="24" :lg="24" :md="24" :sm="24" :xs="24">
                <squared class="squared"/>    
                </el-col>  
                       
                </el-col>
                <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="24" class="box-deskt">
                    <!-- canvas 绘制图 -->
                </el-col>
            </div>
        </el-row>
    </div>
</template>
<script>
    import squared from '../../components/squared/squared.vue';
    
export default {
    components:{
        squared
    },
    data(){
        return{
               staticData:"",
               center: [121.59996, 31.197646],
                zoom: 17,
                lng: 0,
                lat: 0,
                loaded: false,
        }
    },
    mounted(){
        const _this = this;
    },
    created(){
        const _this = this;
         // 获取数据统计数据
        _this.data_staic();

    },
    methods:{
        // 获取统计数据
    data_staic(){
        const _this = this;
          _this.$axios.get('/static/js/statis.json',{
                params:{
                  data: "data",
            }
            }).then(function(res){
                _this.staticData = res.data.statis
            })
    },
    // 高德地图
    

    }

}
</script>