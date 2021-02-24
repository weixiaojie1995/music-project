import axios from './../config/axios.config'

class CommonServer {
  // 首页banner
  queryBanner(){
    return axios.post('/banner',{ type:2,})
  }
  login(param){
    return axios.post('/login/cellphone',param)
  }

  //每日推荐

}

export default new CommonServer();