<template>
  <div class="index">
    <!-- 头部 -->
    <div class="blank"></div>
    <div class="header">
      <van-button class="search-button">
        <i class="iconfont icon-sousuo"></i>
        遇见-孙燕姿
      </van-button>
      <div class="saoyisao">
        <i class="iconfont icon-Kge"></i>
      </div>
    </div>
  
    <!-- 轮播 -->
    <div class="swiper-box">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in imgList" :key="item.targetId">
          <img :src="item.pic" alt="" >
        </van-swipe-item>
        
      </van-swipe>
    </div>

    <!-- 宫格 -->
    <div class="grid-box">
      <ul>
        <li v-for="item in gridList" :key="item.id">
          <i class="iconfont" :class="item.iconName"></i>
          <p>{{item.name}}</p>
        </li>
      </ul>
    </div>

    <!-- 每日推荐 -->
    <div class="daliy-recommend">
      <i class="iconfont icon-wangyiyun1"></i>
    </div>
  </div>
</template>

<script>
import CommonServer from './../../api/common.serve'

export default {
  data(){
    return{
      imgList:[],
      gridList:[
        {id:1,name:'每日推荐',iconName:'icon-rili',routerName:''},
        {id:2,name:'私人FM',iconName:'icon-diantai',routerName:''},
        {id:3,name:'歌单',iconName:'icon-gedan',routerName:''},
        {id:4,name:'排行榜',iconName:'icon-paihangbang',routerName:''},
        {id:5,name:'直播',iconName:'icon-zhibobofangshexiangjiguankanmianxing',routerName:''},
        {id:6,name:'数字专辑',iconName:'icon-shuzizhuanjibiaoshi',routerName:''},
        {id:7,name:'歌房',iconName:'icon-Kge',routerName:''},
        {id:8,name:'游戏专区',iconName:'icon-Game',routerName:''},
      ]
    }
  },
  created(){
    CommonServer.queryBanner().then((res=>{
      if(res.data.code===200){
        this.imgList = res.data.banners
        // console.log(res.data.banners)
      }
    }))
  },
  methods:{}
}
</script>

<style lang="scss" scoped>
.index{
  min-height: 100vh;
  height: 100000px;
  padding-top: .1rem;
  .blank{
    height: .3rem;
  }
  .header{
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: .1rem 0;
    margin-left: .4rem;
    margin-right: .1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    width: 100%;
    .search-button{
      width: 80%;
      border: 0;
      height: .3rem;
      line-height: .3rem;
      border-radius: .2rem;
      color: #ccc;
      background: #f8f6f6;
    }
    .saoyisao{
      width: 18%;
      i{
        font-size: .2rem;
      }
    }
  }
  .swiper-box{
    width: 90%;
    margin: .15rem auto;
    .my-swipe{
      border-radius: .1rem;
      overflow: hidden;
      img{
        border-radius: .1rem;
        width: 100%;
        height: auto;
      }
    }
  }
  .grid-box{
    ul::-webkit-scrollbar{ //隐藏滚动条！
      display: none;
    }
    ul{
      // display: flex;
      // justify-content: space-around;
      // align-items: center;
      // width: auto;
      // overflow: scroll;
      text-align: center;
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling:touch;
      padding-bottom: .1rem;
      border-bottom: .01rem solid #eee;
      li{
        width: .68rem;
        // flex-shrink:0;
        // margin-right: .3rem;
        i{
          display: block;
          color: rgb(221,40,25);
          font-size: .2rem;
          width: .34rem;
          height: .34rem;
          line-height: .34rem;
          border-radius: 50%;
          background: rgb(248, 224, 224);
          margin: 0 auto;
        }
        p{
          margin-top: .04rem;
          font-size: .1rem;
          color: #666;
        }
      }
    }
  }

}
</style>