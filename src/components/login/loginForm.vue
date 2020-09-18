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
    }·
    .el-select>.el-input--suffix>.el-input__inner{
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
            color:#409EFF;
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
                        <li @click="tab_switch(index)" :class="active===index ? 'tab-active' : ''" v-for="(item,index) in Loginname" :key="index"> {{item.name}}</li>
                    </ul>
                    <div class="ercode_tab swicth-ercode">
                        <i class="iconfont mylisterweima1"></i>
                    </div>
                </div>
                <!-- 输入框 -->
                <div class="tabContent">
                    <!-- 免密登录 -->
                    <!-- 密码登录 -->
                    <div class="tabcont tabContentAccount" v-if="Password_free">
                        <div class="tabcontent">
                                <div class="phoneInputGroup">
                                    <el-form-item prop="mobile_phone" >
                                    <el-input placeholder="手机号" v-model="free.mobile_phone" class="input-with-select">
                                        <el-select v-model="areas" slot="prepend" size= "medium" @change="selectOne">
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
                    <!-- 密码登录 -->
                    <div class="tabcont tabContentAccount"  v-if="!Password_free">
                            <div class="tabcontent">
                                <div class="phoneInputGroup">
                                    <el-form-item  prop="mailbox_phone">
                                       <el-input placeholder="手机号或账号" v-model="free.mailbox_phone" class="input-with-select">
                                        <el-select v-model="areas" slot="prepend" size= "medium" v-if="overseas"  @change="selectOne">
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
                                    <el-form-item prop="password_phone">
                                        <el-input placeholder="密码" v-model="free.password_phone" show-password></el-input>
                                    </el-form-item>
                                </div>
                            </div>
                    </div>

                </div>
                
                
        </div>
        <div class="login_box">
            <el-button type="text" @click="overseasClick" >
                <span v-show="!Password_free">
                {{overseas?'手机号或邮箱':'海外手机号'}}
                </span>
            </el-button>
            <el-button type="text" class="phone-btn" >
                {{Password_free?'接收语音验证码':'忘记密码'}}
            </el-button>
            
        </div>
         <el-form-item>
        <el-button type="primary" class="fromSubmit" @click="submitForm('free')">
                    {{Password_free?'登录/注册':'登录'}}
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
            active:"0",
            Loginname:[
                    {
                        name:"免密码登录"
                    },
                    {
                        name:"密码登录"
                    }
            ],
            Disabled:false,
            areas:"",  // 区号
            CountryNum:"",  // 全部区号
            captcha:"发送短信验证码",
            free:{
                mobile_phone:"",
                code_phone:"",
                mailbox_phone:"",
                password_phone:"",
            },
            rules:{
                mobile_phone:[
                     { required: true, message: '请输入手机号', trigger: 'blur' },
                     { required: true, validator:this.formValidation.mobile,message:"手机号有误!",trigger:'blur'}
                ],
                code_phone:[
                    { required: true, message: '请输入验证码', trigger: 'blur' },
                ],
                mailbox_phone:[
                    { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
                    { required: true, validator:this.formValidation.password,message:"不能有特殊符号!",trigger:'blur'}
                ],
                password_phone:[
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { required: true, validator:this.formValidation.password,message:"不能有特殊符号!",trigger:'blur'}
                ]
            },
            Password_free:true,
            overseas:false,
        }
    },
    mounted(){
        // 获取手机国际区号
        this.area();
        this.tab_switch(1)
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
            console.log(_this.$refs['free'])
            _this.$refs.free.validateField('mobile_phone',(err)=>{
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
            _this.$refs.free.validate((valid) => {
              if (valid) {
            //   调用接口
            if(_this.free.mobile_phone == "15000149045" && _this.free.code_phone == "660927" || _this.free.mailbox_phone == "2804446445@qq.com" && _this.free.password_phone == "660927"){
                     _this.$parent.data = true;
                     setTimeout(() => {
                        _this.$router.push({name:"index"});
                     }, 3000);
                }else {
                _this.$message.error('账号密码错误')
             }
            }else {
                return false;
            }
        })
        },
        // 切换免登录
        tab_switch(index){
            const _this = this;
             _this.active=index;
             if(index == 0 ){
                //  则代表免密码登录
                _this.Password_free = true
             }else {
                 _this.Password_free = false
             }
        },
        // 点击切换手机号
        overseasClick(){
            const _this = this;
            _this.overseas = !_this.overseas
        },
        // 监听select 下拉框
        selectOne(value){
           
        }
    
    }
}
</script>