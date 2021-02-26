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
          <img :src="item.pic" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 宫格 -->
    <div class="grid-box">
      <ul>
        <li v-for="item in gridList" :key="item.id">
          <i class="iconfont" :class="item.iconName"></i>
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>

    <!-- 每日推荐 -->
    <div class="daliy-recommend">
      <div class="title">
        <h3>推荐歌单</h3>
        <p>更多<i class="iconfont icon-youjiantou"></i></p>
      </div>
      <ul>
        <li v-for="item in recommendMusicList" :key="item.id">
          <div class="img-box">
            <img :src="item.picUrl + '?param=120y120'" alt="" />
            <p class="play-count"><i class="iconfont icon-bofang"></i>{{ item.playCount | formateNum }}</p>
          </div>
          <p class="name">{{ item.name }}</p>
        </li>
      </ul>
    </div>

    <div class="divider-line"></div>

    <!-- 精选音乐视频 -->
    <div class="recommend-mv">
      <div class="title">
        <h3>精选音乐视频</h3>
        <p>更多<i class="iconfont icon-youjiantou"></i></p>
      </div>
      <ul>
        <li v-for="item in recommendMv" :key="item.id">
          <div class="img-box">
            <img :src="item.picUrl + '?param=150y180'" alt="" />
            <p class="play-count"><i class="iconfont icon-bofang"></i>{{ item.playCount }}</p>
            <p class="paly-icon">
              <i class="iconfont icon-bofang"></i>
            </p>
          </div>
          <p class="name">{{ item.name }}</p>
        </li>
      </ul>
    </div>

    <div class="divider-line"></div>

    <!-- 新歌 -->
    <div class="new-music">
      <div class="title">
        <div class="tab">
          <p class="tab-item" :class="{ active: active[0] }" @click="changeTab(0)">新歌</p>
          <span>|</span>
          <p class="tab-item" :class="{ active: active[1] }" @click="changeTab(1)">新碟</p>
          <span>|</span>
          <p class="tab-item" :class="{ active: active[2] }" @click="changeTab(2)">数字专辑</p>
        </div>
        <p class="more">更多<i class="iconfont icon-youjiantou"></i></p>
      </div>
      <div class="tab-content">
        <ul v-show="active[0]">
          <li v-for="item in newMusic" :key="item.id">
            <img :src="item.picUrl + '?param=50y50'" alt="" />
            <p class="name">{{ item.song.name }}</p>
            <span>-{{ item.song.artists[0].name }}</span>
          </li>
        </ul>
        <ul v-show="active[1]">
          <li v-for="item in newDisco" :key="item.id">
            <img :src="item.coverUrl + '?param=50y50'" alt="" />
            <p class="name">{{ item.albumName }}</p>
            <span>-{{ item.artistName }}</span>
          </li>
        </ul>
        <ul v-show="active[2]">
          <li v-for="item in albumProducts" :key="item.id">
            <img :src="item.coverUrl + '?param=50y50'" alt="" />
            <p class="name">{{ item.albumName }}</p>
            <span>-{{ item.artistName }}</span>
          </li>
          >
        </ul>
      </div>
    </div>

    <div class="blank06"></div>
  </div>
</template>

<script>
import DiscoverServe from './../../api/discover.serve'

export default {
  data() {
    return {
      active: [true, false, false],
      imgList: [],
      gridList: [
        { id: 1, name: '每日推荐', iconName: 'icon-rili', routerName: '' },
        { id: 2, name: '私人FM', iconName: 'icon-diantai', routerName: '' },
        { id: 3, name: '歌单', iconName: 'icon-gedan', routerName: '' },
        { id: 4, name: '排行榜', iconName: 'icon-paihangbang', routerName: '' },
        {
          id: 5,
          name: '直播',
          iconName: 'icon-zhibobofangshexiangjiguankanmianxing',
          routerName: '',
        },
        {
          id: 6,
          name: '数字专辑',
          iconName: 'icon-shuzizhuanjibiaoshi',
          routerName: '',
        },
        { id: 7, name: '歌房', iconName: 'icon-Kge', routerName: '' },
        { id: 8, name: '游戏专区', iconName: 'icon-Game', routerName: '' },
      ],
      recommendMusicList: [],
      recommendMv: [],
      newMusic: [],
      newDisco: [],
      albumProducts: [],
    }
  },
  created() {
    DiscoverServe.queryBanner().then((res) => {
      if (res.data.code === 200) {
        this.imgList = res.data.banners
      }
    })
    DiscoverServe.recommendMusicList({ limit: 6 }).then((res) => {
      if (res.data.code === 200) {
        this.recommendMusicList = res.data.result
        // console.log(res.data)
      }
    })
    DiscoverServe.recommenMv().then((res) => {
      if (res.data.code === 200) {
        this.recommendMv = res.data.result
        // console.log(res.data)
      }
    })
    DiscoverServe.newMusic().then((res) => {
      if (res.data.code === 200) {
        this.newMusic = res.data.result
        // console.log(res.data)
      }
    })
    DiscoverServe.newDisco().then((res) => {
      if (res.data.code === 200) {
        this.newDisco = res.data.products
      }
    })
    DiscoverServe.digitalAlbum().then((res) => {
      if (res.data.code === 200) {
        this.albumProducts = res.data.albumProducts
      }
    })
  },
  filters: {
    formateNum(value) {
      const newValue = ['', '', '']
      let fr = 1000
      let num = 3
      let text1 = ''
      let fm = 1
      while (value / fr >= 1) {
        fr *= 10
        num += 1
        // console.log('数字', value / fr, 'num:', num)
      }
      if (num <= 4) {
        // 千
        newValue[0] = parseInt(value / 1000) + ''
        newValue[1] = '千'
      } else if (num <= 8) {
        // 万
        text1 = parseInt(num - 4) / 3 > 1 ? '千万' : '万'
        fm = text1 === '万' ? 10000 : 10000000
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + ''
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + ''
        }
        newValue[1] = text1
      } else if (num <= 16) {
        // 亿
        text1 = (num - 8) / 3 > 1 ? '千亿' : '亿'
        text1 = (num - 8) / 4 > 1 ? '万亿' : text1
        text1 = (num - 8) / 7 > 1 ? '千万亿' : text1
        fm = 1
        if (text1 === '亿') {
          fm = 100000000
        } else if (text1 === '千亿') {
          fm = 100000000000
        } else if (text1 === '万亿') {
          fm = 1000000000000
        } else if (text1 === '千万亿') {
          fm = 1000000000000000
        }
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + ''
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + ''
        }
        newValue[1] = text1
      }
      if (value < 1000) {
        newValue[0] = value + ''
        newValue[1] = ''
      }
      return newValue.join('')
    },
  },
  methods: {
    changeTab(val) {
      this.active.map((item, index) => {
        if (val === index) {
          this.$set(this.active, index, true)
        } else {
          this.$set(this.active, index, false)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.index {
  min-height: 100vh;
  padding-top: 0.1rem;
  .divider-line {
    background: #eee;
    width: 100%;
    height: 0.06rem;
  }
  .blank {
    height: 0.3rem;
  }
  .blank06 {
    height: 0.6rem;
  }
  .header {
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 0.1rem 0;
    margin-left: 0.4rem;
    margin-right: 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    width: 100%;
    .search-button {
      width: 80%;
      border: 0;
      height: 0.3rem;
      line-height: 0.3rem;
      border-radius: 0.2rem;
      color: #ccc;
      background: #f8f6f6;
    }
    .saoyisao {
      width: 18%;
      i {
        font-size: 0.2rem;
      }
    }
  }
  .swiper-box {
    width: 90%;
    margin: 0.15rem auto;
    .my-swipe {
      border-radius: 0.1rem;
      overflow: hidden;
      img {
        border-radius: 0.1rem;
        width: 100%;
        height: auto;
      }
    }
  }
  .grid-box {
    ul::-webkit-scrollbar {
      //隐藏滚动条！
      display: none;
    }
    ul {
      text-align: center;
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 0.1rem;
      border-bottom: 0.01rem solid #eee;
      li {
        width: 0.68rem;
        i {
          display: block;
          color: rgb(221, 40, 25);
          font-size: 0.2rem;
          width: 0.34rem;
          height: 0.34rem;
          line-height: 0.34rem;
          border-radius: 50%;
          background: rgb(248, 224, 224);
          margin: 0 auto;
        }
        p {
          margin-top: 0.04rem;
          font-size: 0.1rem;
          color: #666;
        }
      }
    }
  }
  .daliy-recommend {
    padding-bottom: 0.2rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.1rem;
      h3 {
        font-size: 0.16rem;
      }
      p {
        width: 0.48rem;
        height: 0.2rem;
        line-height: 0.2rem;
        border: 0.01rem solid #eee;
        border-radius: 0.1rem;
        text-align: center;
        font-size: 0.12rem;
        color: #333;
        i {
          font-size: 0.12rem;
          color: #222;
        }
      }
    }
    ul::-webkit-scrollbar {
      //隐藏滚动条！
      display: none;
    }
    ul {
      text-align: center;
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding-left: 0.1rem;
      li {
        width: 1.1rem;
        margin-right: 0.08rem;
        .img-box {
          width: 1.1rem;
          height: auto;
          overflow: hidden;
          position: relative;
          border-radius: 0.06rem;
          border: 0.01rem solid #ccc;

          img {
            width: 100%;
            display: block;
          }
          .play-count {
            position: absolute;
            top: 0.02rem;
            right: 0.02rem;
            color: #fff;
            font-size: 0.1rem;
            padding: 0 0.06rem;
            background: rgba(202, 202, 202, 0.6);
            border-radius: 0.06rem;
            i {
              font-size: 0.1rem;
            }
          }
        }
        .name {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          font-size: 0.11rem;
          margin-top: 0.04rem;
          color: #333;
          text-align: left;
        }
      }
    }
  }
  .recommend-mv {
    padding-bottom: 0.2rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 0.4rem;
      line-height: 0.4rem;
      padding: 0 0.1rem;
      h3 {
        font-size: 0.16rem;
      }
      p {
        width: 0.48rem;
        height: 0.2rem;
        line-height: 0.2rem;
        border: 0.01rem solid #eee;
        border-radius: 0.1rem;
        text-align: center;
        font-size: 0.12rem;
        color: #333;
        i {
          font-size: 0.12rem;
          color: #222;
        }
      }
    }
    ul::-webkit-scrollbar {
      //隐藏滚动条！
      display: none;
    }
    ul {
      text-align: center;
      display: -webkit-box;
      overflow-x: scroll;
      -webkit-overflow-scrolling: touch;
      padding-left: 0.1rem;
      li {
        width: 1.5rem;
        margin-right: 0.08rem;
        .img-box {
          width: 1.5rem;
          overflow: hidden;
          position: relative;
          border-radius: 0.06rem;
          img {
            width: 100%;
            display: block;
          }
          .play-count {
            position: absolute;
            top: 0.02rem;
            right: 0.02rem;
            color: #fff;
            font-size: 0.1rem;
            padding: 0 0.06rem;
            background: rgba(202, 202, 202, 0.6);
            border-radius: 0.06rem;
            i {
              font-size: 0.1rem;
            }
          }
          .paly-icon {
            position: absolute;
            bottom: 0.04rem;
            right: 0.04rem;
            width: 0.2rem;
            height: 0.2rem;
            line-height: 0.2rem;
            text-align: center;
            background: rgb(218, 214, 214);
            border-radius: 50%;
            i {
              font-size: 0.12rem;
              color: red;
            }
          }
        }
        .name {
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          font-size: 0.11rem;
          margin-top: 0.04rem;
          color: #333;
          text-align: left;
        }
      }
    }
  }
  .new-music {
    padding-bottom: 0.2rem;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0.1rem;
      height: 0.4rem;
      .tab {
        display: flex;
        align-items: center;
        .tab-item {
          color: #999;
          font-size: 0.16rem;
          font-weight: bold;
          padding: 0 0.07rem;
        }
        :first-child {
          padding-left: 0;
        }
        span {
          color: #aaa;
        }
        .active {
          color: #000;
        }
      }
      .more {
        width: 0.48rem;
        height: 0.2rem;
        line-height: 0.2rem;
        border: 0.01rem solid #eee;
        border-radius: 0.1rem;
        text-align: center;
        font-size: 0.12rem;
        color: #333;
        i {
          font-size: 0.12rem;
          color: #222;
        }
      }
    }
    .tab-content {
      ul::-webkit-scrollbar {
        //隐藏滚动条！
        display: none;
      }
      ul {
        display: -webkit-box;
        overflow-x: scroll;
        li {
        }
      }
    }
  }
}
</style>
