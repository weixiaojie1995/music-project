import axios from './../config/axios.config'

class DiscoverServe {
  // banner
  queryBanner(){
    return axios.post('/banner',{ type:2})
  }
  // 推荐歌单
  recommendMusicList(param){
    return axios.post('/personalized',param)
  }
  // 推荐歌曲
  recommenMusic(param){
    return axios.post('/personalized/newsong',param)
  }
  // 独家放送
  privatecontent(param){
    return axios.post('/personalized/privatecontent',param)
  }
  // 推荐mv
  recommenMv(){
    return axios.post('/personalized/mv')
  }
  // 新歌
  newMusic(){
    return axios.post('/personalized/newsong',{limit:6})
  }
  // 新碟
  newDisco(){
    return axios.post('/album/list',{limit:6})
  }
  // 数字专辑
  digitalAlbum(){
    return axios.post('/album/list/style',{limit:12,area:'Z_H',offset:1})
  }
  

 

  

  

}

export default new DiscoverServe();