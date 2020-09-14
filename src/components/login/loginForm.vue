<style lang="less">
    .loginForm {
        padding: 0 24px 84px;
        position: relative;
        .tabBox {
            text-align: left;
            .tabBoxSwitch {
                .tabBoxSwitchUl{
                    li {
                            display: inline-block;
                            height: 60px;
                            font-size: 16px;
                            line-height: 60px;
                            margin-right: 24px;
                            cursor: pointer;
                    }

                }
                .ercode_tab {
                    position: absolute;
                    width: 52px;
                    height: 52px;
                    top: -3px;
                    right: 0;
                    cursor: pointer;
                    .mylisterweima1 {
                        color:#229dea;
                        font-size: 52px;
                    }
                }
                     
            }
        }
    }
    .tab-active {
        display: inline-block;
    height: 60px;
    line-height: 60px;
    margin-right: 24px;
    cursor: pointer;
    font-size: 16px;
    position: relative;
    color: #1a1a1a;
    font-weight: 600;
    }
    .tab-active::before {
    display: block;
    position: absolute;
    bottom: 0;
    content: "";
    width: 100%;
    height: 3px;
    background-color: #0084ff;
    }

    .tabcontent {
        margin-top: 24px;
        border-bottom: 1px solid #ebebeb;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 48px;
        position: relative;
        .phoneInputGroup {
            display: inline-block;
            position:relative;
            width:100%;
        }
        .el-input__inner {
            border:none;
        }
        .codeInputGroup {
            width: 100%;
            .el-input-group__append {
                border:none;
            }
            .el-button--text span {
                color:#175199;
            }
            .disabColor span {
                color:#999 !important;
            }
        }
     
    }
    .el-input {
        min-width:72px;
        border:none;
    }
    .el-select {
        color: #999;
    }
    .el-input-group__prepend{
        border:none;
    }
    .el-input--suffix>.el-input__inner{
        padding: 0;
       
    }

    .el-input__suffix {
        display: none;
    }

    .login_box {
        height:20px;
        display:flex;
        justify-content: space-between;
        background: #fff;
        .el-button  span{
            font-size: 13px;
        }
        .phone-btn span {
            color:#999;
        }
    }
    .fromSubmit {
        margin-top: 30px;
        width:100%;
        background-color:#0084ff;
        span {
            color: #fff;
        }
    }
    
     .el-input__inner::placeholder ,.el-input--suffix,.el-select-dropdown__item{
    color:#999;
  }
  .SignContainer-tip {
        font-size: 13px;
        color: #999;
        padding:12px 24px;
        text-align: left;
        position: absolute;
        bottom: 0;
        left:0;
        right:0;

        .el-link {
            display: contents;
        }
        .el-link--inner {
            font-size: 13px;
        color: #999;
        }
    }
    .css-1hmxk26 {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    border-top: 1px solid;
    margin-left: 24px;
    margin-right: 24px;
    }
    .footSign {
        display: flex;
        justify-content: space-between;
        padding:0 24px;
        height:60px;
        line-height: 60px;
        color: #999;
        .el-link--inner {
            padding:0 6px;
        }
        .iconfont {
            margin-right:6px;
            font-size: 16px;
        }
        .mylistweixin1 {
            color:#1afa29;
        }
        .mylistweibiaoti-- {
            color: #229dea;
        }
        .mylistweibo {
            color:#d81e06;
        }
    }
    .signDownload {
        background-color:#fff;
        color:#0084ff;
        .css-eow14e {
            width:100%;
            justify-content: flex-end;
            display: flex;
            flex:1;
            text-align: left;
        }
        .el-link--inner {
            color: #229dea;
        }
        .mylistbaidu {
            font-size: 22px;
            color: #229dea;
        }
    }
    .Login-socialButtonGroup , .signSocial{
            .el-link--inner {
                color: #999;
            }
    }
    .el-form-item__error {
        top:87%;
    }
</style>
<template>
<div>
  
    <div class="loginForm">
          <el-form :model="free" :rules="rules" ref="free"> 
        <div class="tabBox">
            
                <div class="tabBoxSwitch">
                    <ul class="tabBoxSwitchUl">
                        <li class="tab-active">免密码登录</li>
                        <li>密码登录</li>
                    </ul>
                    <div class="ercode_tab swicth-ercode">
                        <i class="iconfont mylisterweima1"></i>
                    </div>
                </div>
                <!-- 输入框 -->
                <div class="tabContent">
                    <!-- 免密登录 -->
                    <!-- 密码登录 -->
                    <div class="tabcont tabContentAccount">
                        <div class="tabcontent">
                                <div class="phoneInputGroup">
                                    <el-form-item prop="mobile_phone" >
                                    <el-input placeholder="手机号" v-model="free.mobile_phone" class="input-with-select">
                                        <el-select v-model="areas" slot="prepend" size= "medium">
                                          <el-option
                                            v-for="item in CountryNum"
                                            :key="item.countryName + item.number"
                                            :value="item.countryName + item.number"
                                            >
                                             </el-option>
                                        </el-select>
                                    </el-input>
                                    </el-form-item>
                                </div>
                        </div>
                        <div class="tabcontent">
                                <div class="codeInputGroup">
                                    <el-form-item prop="code_phone">
                                    <el-input placeholder="输入6位短信验证码" v-model="free.code_phone"> 
                                         <el-button type="text" :class="[Disabled?'disabColor':'']"  slot="append" @click="code('free')" :disabled="Disabled">{{captcha}}</el-button>
                                    </el-input>
                                    </el-form-item>
                                </div>
                        </div>
                    </div>
                </div>
                
                
        </div>
        <div class="login_box">
            <el-button type="text" >
            </el-button>
            <el-button type="text" class="phone-btn" >
                接收语音验证码
            </el-button>
            
        </div>
         <el-form-item>
        <el-button type="primary" class="fromSubmit" @click="submitForm('free')">
                    登录/注册
        </el-button>
         </el-form-item>
         </el-form>
          <div class="SignContainer-tip">
                    未注册手机验证后自动登录，注册即代表同意
                    <el-link :underline="false">《乎乎协议》</el-link>
                    <el-link :underline="false">《隐私保护指引》</el-link>
            </div>
            
    </div>
    <div class="css-1hmxk26"></div>
    <!-- 第三方登录 -->
    <div class="footSign signSocial">
    <el-link :underline="false">社交帐号登录</el-link>
    <div class="Login-socialButtonGroup">
        <el-link :underline="false"><i class="iconfont mylistweixin1"></i>微信</el-link>
        <el-link :underline="false"><i class="iconfont mylistweibiaoti--"></i>支付宝</el-link>
        <el-link :underline="false">
            <i class="iconfont mylistweibo"></i>微博</el-link>
    </div>
    </div>
    <div class="footSign signDownload">
            <div class="css-eow14e">
                <el-link><i class="iconfont mylistbaidu"></i>下载百度APP</el-link>
            </div>
    </div>
  
      </div> 
</template>
<script>
export default {
    data(){
        return{
            Disabled:false,
            areas:"",  // 区号
            CountryNum:"",  // 全部区号
            captcha:"发送短信验证码",
            free:{
                mobile_phone:"",
                code_phone:"",
            },
            rules:{
                mobile_phone:[
                     { required: true, message: '请输入手机号', trigger: 'blur' },
                     { required: true, validator:this.formValidation.mobile,message:"手机号有误!",trigger:'blur'}
                ],
                code_phone:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ]
            }
        }
    },
    mounted(){
        // 获取手机国际区号
        this.area();
    },
    methods:{
        // 手机区号获取
       
        area(){
             const  _this = this;
             _this.$axios.get('/static/js/selectOptions.json',{
            params:{
                  data: "data",
            }
        }).then(function(res){
            // 赋值给sleect  和下拉的值
            _this.CountryNum = res.data.CountryNum
            _this.areas = _this.CountryNum[0].countryName + _this.CountryNum[0].number
        })
        },
        // 发送验证码
        code(){
            const _this = this;
            _this.$refs['free'].validateField('mobile_phone',(err)=>{
                if(!err){
                   _this.$parent.data = true;
                setTimeout(function(){
                _this.$parent.data = false;
                _this.doLoop(60)
                },1000)
                }
            })
            
            
        },
        doLoop(seconds){
            const  _this = this;
            seconds = seconds ? seconds : 60;
            _this.Disabled = true;
            _this.captcha = seconds + 's秒后重新获取';
            // 定时器
            const countdown = setInterval(()=>{
                if(seconds >0){
                    _this.captcha = seconds + 's秒后重新获取';
                    
                --seconds;
                }else {
                    _this.Disabled = false;
                    _this.captcha ="发送短信验证码"
                     clearInterval(countdown);
                }
            },1000)

        },
        // 登录注册
        submitForm(free){
            const _this = this;
            _this.$refs[free].validate((valid) => {
                
          if (valid) {
            //   调用接口
            if(_this.free.mobile_phone == "15000149045" && _this.free.code_phone == "660927"){
                     _this.$parent.data = true;
                     setTimeout(() => {
                          _this.$parent.data = false;
                     }, 3000);
            }else {
                _this.$message.error('账号密码错误')
            }
            
           
          } else {
            return false;
          }
        })
        }
    }
}
</script>