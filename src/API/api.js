import axios from './axios.js'

const api = {
    // 获取热门列表
    getHotList(){
        return axios.get('api/meituan/header/searchHotWords.json')
    },
//   getHotList(params){//有参数这样传过去
//         return axios.get('api/meituan/header/searchHotWords.json',params)
//     }
//获取搜素列表
  getSerachList(){
      return axios.get('/api/meituan/header/search.json')
  },
  //获取菜单
  getMenuList(){
      return axios.get('/api/meituan/index/nav.json')
  },
  //获取有格调内容区
  getcontentData(){
      return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  //获取城市列表
  getCityList(){
      return axios.get('/api/meituan/city/cityList.json')
  },
  //获取热门城市
  getHotCityList(){
      return axios.get('/api/meituan/city/hot.json')
  },
  //获取省份列表
  getProvinceList(){
      return axios.get('/api/meituan/city/province.json')
  },
  //最近搜索城市
  recentsSerachCity(){
      return axios.get('/api/meituan/city/recents.json')
  },
  //产品展示列表数据获取
  getProductList(){
      return axios.get('/api/meituan/list/goodsList.json')
  },
  //获取地理位置信息
  getGeoAreaInfo(){
      return axios.get('/api/meituan/city/getPosition.json')
  },
  //登录
  login(params){
      return axios.get('/api/meituan/login',{params})
  },
  //注册
  register(params){
      return axios.get('/api/meituan/register', params)
  },
//   推荐产品列表
recommendProduct(){
    return axios.get('/api/meituan/list/recommend.json')
},
// 获取分类列表
classifyList(){
    return axios.get('/api/meituan/list/classify.json')
},
// 获取区域列表
areaList(){
    return axios.get('/api/meituan/list/areaList.json')

}

}


export default api