<template>
  <div class="footer">
    <ul class="tab-list">
      <li v-for="(item,index) in tabList" :key="item.id" class="tab-item" :class="{active:item.active}" @click="changeTab(index)">
        <i class="iconfont" :class="item.iconName"></i>
        <p>{{item.name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'foot',
  props: {},
  data(){
    return{
      tabList:[
        {
          id:1,
          name:"发现",
          iconName:'icon-diqiu',
          active:true,
          routerName:'/discover/index'
        },
        {
          id:2,
          name:"播客",
          iconName:'icon-liulanjilu',
          active:false,
          routerName:'/recommend/index'
        },
        {
          id:3,
          name:"我的",
          iconName:'icon-yinle',
          active:false,
          routerName:'/mine/index'
        },
        {
          id:4,
          name:"k歌",
          iconName:'icon-Kge',
          active:false,
          routerName:'/sing/index'
        },
        {
          id:5,
          name:"云村",
          iconName:'icon-duoyonghu',
          active:false,
          routerName:'/community/index'
        },

      ]
    }
  },
  methods:{
    changeTab(index){
      this.tabList.map((item,idx)=>{
        idx===index ? item.active = true : item.active = false
        if(idx === index ){
          this.$router.push(item.routerName)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.footer{
  background: #fff;
  width: 100%;
  height: .6rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // background: red;
  // z-index: -1;
  .tab-list{
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: .6rem;
    color: #aaa;
    .tab-item{
      i{
        font-size: .2rem;
        padding: .04rem;
      }
      p{
        font-size: .1rem;
        margin-top: .03rem;
      }
    }
    .active{
      i{
        background: rgb(221,40,25);
        border-radius: 50%;
        color: #fff;
      }
      p{
        color: rgb(221,40,25);
      }
    }
  }
}
</style>
