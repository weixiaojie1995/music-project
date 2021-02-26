<template>
  <div class="login">
    <div class="icon-box">
      <div class="icon">
        <i class="iconfont icon-diqiu"></i>
      </div>
      <div class="icon-border icon-border1"></div>
      <div class="icon-border icon-border2"></div>
      <div class="icon-border icon-border3"></div>
      <div class="icon-border icon-border4"></div>
    </div>

    <div class="login-box">
      <div class="login-item phone">
        <i class="iconfont icon-shouji"></i>
        <van-field class="input" type="tel" placeholder="请输入手机号" maxlength="11" v-model="loginData.phone"></van-field>
      </div>
      <div class="login-item password">
        <i class="iconfont icon-guanbiquanxian"></i>
        <van-field class="input" type="password" placeholder="请输入密码" maxlength="16" v-model="loginData.password"></van-field>
      </div>
      <div class="login-button">
        <van-button class="button" @click="login">立即登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import CommonServer from './../../api/common.serve'
import {Toast} from 'vant'

export default {
  data(){
    return {
      loginData:{
        phone:'',
        password:''
      }
    }
  },
  methods:{
    login(){
      CommonServer.login(this.loginData).then(res=>{
        if(res.data.code===200){
          this.$router.replace('/discover/index')
          window.location.reload()
        }else{
          if(res.data.message){
            Toast(res.data.message)
            this.loginData = {phone:'', password:''}
          }
        }
      }).catch((err)=>{
        if(err.data.message){
            Toast(err.data.message)
            this.loginData = {phone:'', password:''}
          }
      })
    }
  }
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  background: rgb(221, 40, 25);
  overflow: hidden;
  .icon-box {
    width: 100%;
    height: 3.6rem;
    position: relative;
    .icon {
      // margin: 1.5rem auto;
      width: 0.8rem;
      height: 0.8rem;
      line-height: 0.8rem;
      background: rgb(241, 58, 41);
      text-align: center;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 2;
      transform: translateX(-50%) translateY(-50%);
      i {
        color: #fff;
        font-size: 0.5rem;
      }
    }
    .icon-border {
      width: 0.6rem;
      height: 0.6rem;
      border-radius: 50%;
      border: 0.01rem solid rgba(243, 229, 229, 0.5);
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);

      z-index: 1;
      animation: wave 4s infinite linear;
      animation-delay: 0.5s;
      @keyframes wave {
        20% {
          transform: translateX(-50%) translateY(-50%) scale(2);
          opacity: 0.4;
        }
        40% {
          transform: translateX(-50%) translateY(-50%) scale(3);
          opacity: 0.3;
        }
        60% {
          transform: translateX(-50%) translateY(-50%) scale(4);
          opacity: 0.2;
        }
        80% {
          transform: translateX(-50%) translateY(-50%) scale(5);
          opacity: 0.1;
        }
        100% {
          transform: translateX(-50%) translateY(-50%) scale(6);
          opacity: 0;
        }
      }
    }
    .icon-border1 {
      animation-delay: 1s;
    }
    .icon-border2 {
      animation-delay: 2s;
    }
    .icon-border3 {
      animation-delay: 3s;
    }
    .icon-border4 {
      animation-delay: 4s;
    }
  }
  .login-box{
    .login-item{
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: .4rem;
      i{
        font-size: .18rem;
        margin-right: .05rem;
        color: rgb(224, 142, 134);
      }
      .input{
        width: 60%;
        background: transparent;
        border-bottom: .01rem solid rgb(224, 142, 134);
        caret-color: rgb(224, 142, 134);
        height: .4rem;
        line-height: .4rem;
        .van-field__control{
          color: #fff !important;

        }
      }
    }
    .login-button{
      margin-top: .2rem;
      text-align: center;
      .button{
        width: 60%;
        margin: .2rem auto;
        border: 0;
        background: rgb(241, 58, 41);
        border-radius: .2rem;
        color: #fff;
      }
    }
  }
}
</style>