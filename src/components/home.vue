<style lang="less">
    .main {
        width:100%;
        height: 100vh;
        display: flex;
        overflow: auto;
        .main_bg {
            width:100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #2e3e9c;
            justify-content: center;
            .loginBox {
                width:400px;
                min-width: 0;
                box-shadow: 6px 6px 6px rgba(0,0,0,1);
                background-color:#fff;
                border-radius:2px;
                padding:0;
                .signContent {
                    text-align: center;
                    margin:  0 auto;
                    .signContainer {
                        position: relative;
                        border-radius: 4px 4px 0 0;
                    }
                }
            }
        }
    }
</style>
<template>

    <div>
        <loading :show="data"></loading>
            <!-- 登录页 -->
            <div class="main">
                <div class="main_bg">
                    <div class="loginBox">
                            <div class="signContent">
                                <!-- 切换 -->
                                <div class="signContainer">
                                        <loginForm />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
</template>
<script>
import loginForm from './login/loginForm' 
export default {
    data(){
        return{
            data:false,
        }
    },
    components:{
        loginForm
    },
    mounted(){
        setTimeout(() => {
            this.data = false
        }, 3000);
    }
}
</script>