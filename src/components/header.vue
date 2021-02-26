<template>
  <div class="more">
   
    <i class="iconfont icon-gerenziliao more-icon" @click="()=>{showPopup=true}"></i>
    

    <van-popup v-model="showPopup" position="left" class="popup-content">
     
      <div class="content-header">
        <div class="userinfo">
          <div class="user-header"></div>
          <div class="nickname">梦中做憨人J <i class="iconfont icon-youjiantou"></i></div>
        </div>
        <div class="scan">
          <i class="iconfont icon-saoyisao"></i>
        </div>
      </div>
      <div class="blank"></div>

      <div class="card">
        <van-cell is-link v-for="(item,index) in cellList" :key="item.id" @click="gotoRouter(index)">
          <template #title>
            <i class="iconfont" :class="item.iconName"></i>
            <span class="custom-title">{{item.title}}</span>
          </template>
          <template #right-icon>
            <van-tag round type="danger" v-if="item.messageType==='标签'">{{item.message}}</van-tag>
            <p v-if="item.messageType==='文字'" class="right-font">{{item.message}}</p>
            <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
          </template>
        </van-cell>
      </div>

      <!-- 音乐服务 -->
      <div class="card">
        <h4>音乐服务</h4>
        <van-cell is-link v-for="(item,index) in musicServe" :key="item.id" @click="gotoRouter(index)">
          <template #title>
            <i class="iconfont" :class="item.iconName"></i>
            <span class="custom-title">{{item.title}}</span>
          </template>
          <template #right-icon>
            <van-tag round type="danger" v-if="item.messageType==='标签'">{{item.message}}</van-tag>
            <p v-if="item.messageType==='文字'" class="right-font">{{item.message}}</p>
            <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
          </template>
        </van-cell>
      </div>

      <!-- 其他 -->
      <div class="card">
        <h4>其他</h4>
        <van-cell is-link v-for="(item,index) in other" :key="item.id" @click="gotoRouter(index)">
          <template #title>
            <i class="iconfont" :class="item.iconName"></i>
            <span class="custom-title">{{item.title}}</span>
          </template>
          <template #right-icon>
            <van-tag round type="danger" v-if="item.messageType==='标签'">{{item.message}}</van-tag>
            <p v-if="item.messageType==='文字'" class="right-font">{{item.message}}</p>
            <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
          </template>
        </van-cell>
      </div>

      <!-- 关于 -->
      <div class="card">
        <van-cell is-link v-for="(item,index) in about" :key="item.id" @click="gotoRouter(index)">
          <template #title>
            <i class="iconfont" :class="item.iconName"></i>
            <span class="custom-title">{{item.title}}</span>
          </template>
          <template #right-icon>
            <van-tag round type="danger" v-if="item.messageType==='标签'">{{item.message}}</van-tag>
            <p v-if="item.messageType==='文字'" class="right-font">{{item.message}}</p>
            <i class="van-icon van-icon-arrow van-cell__right-icon"></i>
          </template>
        </van-cell>
      </div>

      <div class="logout">
        <van-button class="logout-button" @click="logout" >退出登录</van-button>
      </div>
    
    </van-popup>

  </div>
</template>

<script>
import CommonServer from './../api/common.serve'
export default {
  name: 'more',
  props: { },
  data(){
    return{
      showPopup:false,
      cellList:[
        {id:1,title:'消息中心',iconName:'icon-youjian',message:'99+',messageType:'标签'},
        {id:2,title:'云贝中心',iconName:'icon-xuanzhong2',message:'60云贝待领取',messageType:'文字'},
        {id:3,title:'创作者中心',iconName:'icon-duoyonghu',message:'',messageType:''}
      ],
      musicServe:[
        {id:1,title:'演出',iconName:'icon-biaoqian',message:'',messageType:''},
        {id:2,title:'商城',iconName:'icon-qiye',message:'',messageType:''},
        {id:3,title:'口袋彩铃',iconName:'icon-tongzhi',message:'在吗？',messageType:'文字'},
        {id:4,title:'游戏专区',iconName:'icon-caidan',message:'',messageType:''},
      ],
      other:[
        {id:1,title:'设置',iconName:'icon-shezhi',message:'',messageType:''},
        {id:2,title:'夜间模式',iconName:'icon-diqiu',message:'',messageType:''},
        {id:3,title:'定时关闭',iconName:'icon-guanbi',message:'',messageType:''},
        {id:4,title:'个性装扮',iconName:'icon-gerenziliao',message:'',messageType:''},
        {id:5,title:'边听边存',iconName:'icon-xiazai',message:'未开启',messageType:'文字'},
        {id:6,title:'在线听歌免流量',iconName:'icon-shouji',message:'已开通',messageType:'文字'},
        {id:7,title:'添加Siri捷径',iconName:'icon-kefu',message:'',messageType:''},
        {id:8,title:'音乐黑名单',iconName:'icon-jinggao',message:'',messageType:''},
        {id:9,title:'青少年模式',iconName:'icon-shanchuyonghu',message:'未开启',messageType:'文字'},
        {id:10,title:'音乐闹钟',iconName:'icon-xiangji',message:'',messageType:''},
      ],
      about:[
        {id:1,title:'帮助与反馈',iconName:'icon-yijianfankui',message:'',messageType:''},
        {id:1,title:'我的订单',iconName:'icon-dingdanliebiao',message:'',messageType:''},
        {id:1,title:'优惠券',iconName:'icon-jifen',message:'',messageType:''},
        {id:1,title:'分享网易云音乐',iconName:'icon-fenxiang',message:'',messageType:''},
        {id:1,title:'关于',iconName:'icon-guanyu',message:'',messageType:''},
      ]
    }
  },
  methods:{
    logout(){
      CommonServer.logout().then(res=>{
        if(res.data.code===200){
          this.$router.replace('/login/index')
          window.location.reload()

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.more{
    position: fixed;
    left: 0;
    top: 0;
    padding: .1rem;
    z-index: 2000;
    background: #fff;
    .more-icon{
      display: block;
      font-size: .2rem;
      height: .3rem;
      line-height: .3rem;
    }

  .popup-content{
    width: 85%;
    background: rgb(248, 246, 246);
    .blank{
      height: .4rem;
    }
    .content-header{
      padding: 0 5%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      height: .4rem;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      .userinfo{
        display: flex;
        align-items: center;
        .user-header{
          width: .22rem;
          height: .22rem;
          background: #399;
          border-radius: 50%;
          margin-right: .1rem;
        }
        .nickname{
          font-weight: bold;
          font-size: .16rem;
          i{
            font-size: .12rem;
          }
        }
      }
      .scan{
        i{
          // font-weight: bold;
          color: #000;
          font-size: .18rem;
        }
      }
    }
    .card{
      overflow: hidden;
      width: 90%;
      margin: 0 auto;
      margin-top: .2rem;
      border-radius:  .1rem;
      .iconfont{
        margin-right: .08rem;
        // line-height: 24px;
        // padding: 10px 0;
        font-size: .15rem;
      }
      h4{
        font-size: .12rem;
        font-weight: normal;
        color: #b2b2b2;
        background: #fff;
        height: .36rem;
        line-height: .36rem;
        padding-left: .1rem;
        border-bottom: .01rem solid #efefef;
      }
      .right-font{
        font-size: .1rem;
        color: #b2b2b2;
      }
    }
    .logout{
      .logout-button{
        width: 90%;
        margin: .3rem 0 .5rem 5%;
        // margin: 0 auto;
        background: #fff;
        color: rgb(221,40,25);
        border: 0;
        border-radius: .1rem;
      }
    }
  }
}
</style>