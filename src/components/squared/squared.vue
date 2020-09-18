<style lang="less" scoped>
        .el-row {
            width:100%;
            .contain {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: space-around;
            position: relative;
            .item {
                color:#fff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding:10px;
                p{
                    img {
                        width:60px;
                        height:60px;
                    }
                }
                span {
                    font-size: 13px;
                    color:#000;
                }
            }
            
        }
        }
        .activeName {
            cursor: pointer;
            .item {
                span {
                    color:aqua !important;
                }
            }
        }
        .activeColor {
            background-color: aqua;
        }
        .FalseColor {
            background-color: #fff !important;
        }
        
</style>
<template>
    <div>
       <div class="contain">
           <el-row>
                <el-col :xl="8" :lg="8" :md="8" :sm="8" :xs="8" v-for="(item,i) in squaredlist"  :class="[item.active == null?'':'activeName',index == i?'activeColor':'',index == 4? 'FalseColor':'']">
                    <div class="bg2"  :xl="8" :lg="8" :md="8" :sm="8" :xs="8"></div>
                    <div class="item" @click="item.active == null?'':move()">
                        <p>
                            <img :src="item.img" alt="">
                        </p>
                        <span>{{item.name}}</span>
                    </div>
                </el-col>
                
                <model :showList="showList" ref="mychild" v-show="showTost" @modelt="modelt"/>
           </el-row>
       </div>
    </div>
</template>
<script>
// 自定义弹出框
import model from '../../components/model/model.vue'
export default {
    data(){
        return{
            squaredlist:"",
            index:-1,//当前转动那个位置，起点位置
            count:9,//总共有多少个位置
            timer:0,//每次转动定时器
            speed:200,//初始转动速度
            times:0,//转动次数
            cycle:50,//转动基本次数，至少转动多少次再进入抽奖环节
            prize:-1,//中奖位置
            click:true,
            showTost:false,
            toasType:'luck',
            showList:""
        }
    },
    components:{
        model
    },
    mounted(){
        // 获取抽奖奖品
        const _this = this;
        _this.squared();
    },
    methods:{
            squared(){
                // 获取抽奖
                const _this = this;
                 _this.$axios.get('/static/js/squared.json',{
                params:{
                  data: "data",
            }
                }).then(function(res){
                _this.squaredlist = res.data.squared
                console.log(_this.squaredlist)
                })
            },
            // 点击抽奖
            move(){
                // 开始抽奖
                const _this = this;
                if(!_this.click){
                    return
                }
                //  _this.closeToast();
                _this.speed = 200;
                _this.click = false;
                // 开始转动
                _this.startRoll();
            },
            // 开始转动
      startRoll () {
      this.times += 1  // 转动次数
      this.oneRoll()  // 转动过程调用的每一次转动方法，这里是第一次调用初始化

      // 如果当前转动次数达到要求 && 目前转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer)   // 清除转动定时器，停止转动
        this.prize = -1
        this.times = 0
        this.click = true
        this.showToast = true
        this.toastType = 'comeOn'
        console.log('你已经中奖了' + this.prize)
      } else {
        
        if (this.times < this.cycle) {
          this.speed -= 10   // 加快转动速度
        } else if (this.times === this.cycle) {    // 随机获得一个中奖位置
          const index = parseInt(Math.random() * 1000, 0) || 0
          this.prize = index
          if (this.prize >7) {
            this.prize = 7
          }
          if(this.prize == 4 || this.prize == 0){
            //   未中奖
            this.showList = this.squaredlist[0]
          }else {
            //  中奖
            this.showList = this.squaredlist[this.prize]
            this.clickParent(this.showList)
            this.showTost = true
          }
        } else if (this.times > this.cycle + 10 &&
          ((this.prize === 0 && this.index === 8) || this.prize === this.index + 1)) {
          this.speed += 110
        } else {
          this.speed += 20
        }

        if (this.speed < 40) {
          this.speed = 40
        }
        this.timer = setTimeout(this.startRoll, this.speed)
      }
    },

   // 每一次转动
    oneRoll () {
      let index = this.index  // 当前转动到哪个位置
      const count = this.count  // 总共有多少个位置
      index += 1
      if (index > count - 1) {
        index = 0
      }
      this.index = index
    },
    // 子组件方法
    clickParent(val){
        console.log(this.$refs)
        this.$refs.mychild.parentHandleclick(val)
    },
    // 关闭模态框
   modelt(){
       console.log("123213")
        this.showTost = false
   }

    }
}
</script>