/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="searchBar ">
    <el-row class="m-header-searchbar" height="">
      <el-col :span="8" class="left" height="">
          <!-- <a href="//bj.meituan.com"> -->
          <router-link :to="{name:'defaultPage'}">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
          </router-link>
        <!-- </a> -->
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="search_input" placeholder="搜索商家或地点" 
          @focus="foucs" @blur="blurs" @input="inputWord"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isShowHot">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotSearch" :key="index">
              <router-link :to="{name:'goodList',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isShowSearchList">
            <dd  v-for="(seachLists,i) in serachList" :key="i">
              <router-link :to="{name:'goodList',params:{name:seachLists}}">{{seachLists}}</router-link>
              </dd>
          </dl>
        </div>
        <p class="suggest">
          <a href="#"  v-for="(sug,k) in suggestList" :key="k"  >{{sug}}</a>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import api from '@/API/api.js'

export default {
   data(){
     return{
       search_input:'',
       isFoucs:false,
       hotSearch:[],
      //  hotSearch:[
      //    {serchWorldListInfo:'火锅',href:'/huoguo'},
      //    {serchWorldListInfo:'酒店',href:'jiudian'},
      //    {serchWorldListInfo:'外卖',href:'/waimai'},
      //    {serchWorldListInfo:'麻辣火锅',href:'/malahuo'}],
      //  serachListData:[
      //    {serchWorld:'火锅',url:'/huoguo'},
      //    {serchWorld:'重庆火锅',url:'/chongqinghuoguo'},
      //    {serchWorld:'四川火锅',url:'/sichuoguo'},
      //    {serchWorld:'麻辣火锅',url:'/malahuougo'}],
        //  suggestList:['京东第一温泉度假村','99旅馆连锁','民宿','7天连锁酒店'],
        suggestList:[],
        serachList:[]
     }
   },
   created(){
        //  axios.get('api/meituan/header/searchHotWords.json',{
        //     params:{
        //     //  appkey:'liushuiyuan_1551187221481'
        //    }
        // }).then(rep=>{
        //   // eslint-disable-next-line no-console
        //   // console.log(rep)
        //    this.hotSearch = rep.data.data;
        //    this.suggestList = rep.data.data
        // })
        api.getHotList().then(res=>{
          // eslint-disable-next-line no-console
          // console.log(res)
          if(res.data.status ==='success'){
            this.hotSearch = res.data.data;
           this.suggestList = res.data.data
          }
          
        })

   },
   computed:{
      // eslint-disable-next-line vue/return-in-computed-property
      isShowHot:function () {
               return this.isFoucs && !this.search_input
      },

      // eslint-disable-next-line vue/return-in-computed-property
      isShowSearchList:function(){
           return this.isFoucs && this.search_input
      }
   },
   watch:{
        "$route.params.name":function(){
          this.serchWorld = this.$route.params.name
        }
   },
   methods:{

        
        foucs(){
            this.isFoucs = true
        },
        blurs(){
          setTimeout(()=>{
            this.isFoucs= false
          },200)

        },
        inputWord(){
          // eslint-disable-next-line no-console
          // console.log(this.search_input)
  // eslint-disable-next-line no-undef
        //  axios.get('/api/meituan/header/search.json',{
        //    params:{
        //     //  appkey:'liushuiyuan_1551187221481'
        //    }
        //  }).then((res)=>{
        //    // eslint-disable-next-line no-console
        //    console.log( res)
        //  })
         let val = this.search_input
        api.getSerachList().then(rep=>{
          // eslint-disable-next-line no-console
          if(rep.data.status === 'success'){
          // eslint-disable-next-line no-unused-vars
          this.serachList = rep.data.data.list.filter((item,index)=>{
            return item.indexOf(val)>-1
          })
          }
        })
        }
   },
   
}
</script>

<style lang="scss">
  @import '@/assets/css/public/header/index.scss';
  @import '@/assets/css/public/header/search.scss'

</style>
