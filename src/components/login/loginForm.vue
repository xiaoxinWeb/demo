<style lang="less">
    .loginForm {
        padding: 0 24px 84px;
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
                    top: 0;
                    right: 0;
                    img {
                        width:100%;
                        height:100%;
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
     
    }
     .el-input__inner::placeholder {
    color:#999;
  }
</style>
<template>
    <div class="loginForm">
        <div class="tabBox">
                <div class="tabBoxSwitch">
                    <ul class="tabBoxSwitchUl">
                        <li class="tab-active">免密码登录</li>
                        <li>密码登录</li>
                    </ul>
                    <div class="ercode_tab swicth-ercode">
                        <img src="../../assets/erweima.png" alt="">
                    </div>
                </div>
                <!-- 输入框 -->
                <div class="tabContent">
                    <!-- 免密登录 -->
                    <!-- 密码登录 -->
                    <div class="tabcont tabContentAccount">
                        <div class="tabcontent">
                                <div class="phoneInputGroup">
                                 <el-input placeholder="请输入内容" >
                                </el-input>
                                </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>