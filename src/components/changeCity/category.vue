/* eslint-disable vue/no-unused-vars */
<template>
    <div class="categroy ">
        <dl class="m-categroy">
            <dt>按拼音首字母选择:</dt>
            <dd v-for="(item,index) in letter" :key="index">
            <a :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item,index) in cityGroy" :key="index" :id="'city-'+item">
            <dt>{{index}}</dt>
            <dd><span v-for="city in item" :key="city.id" @click="changecitys(city)">{{city.name}}</span></dd>
        </dl>
    </div>
</template>
<script>
import api from '@/API/api.js'
export default {
    data(){
        return{
            cityGroy:{},
            cityList:[],
            letter:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
            // list:'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),//分割
        }
    },
     created() {
            // eslint-disable-next-line no-unused-vars
            // let data = [{
            //     "id":1,
            //     "name":"北京",
            //     "pinyin":"beijing",
            //     "acronym":"bj",
            //     "rank":"s",
            //     "firstChar":"b"
            // },{
            //     "id":59,
            //     "name":"成都",
            //     "pinyin":"chengdu",
            //     "acronym":"cd",
            //     "rank":"A",
            //     "firstChar":"c"
            // }];
            // let obj = {};
            // // eslint-disable-next-line no-unused-vars
            // data.forEach((item,index)=>{ //分组处理
            //   if(!obj[item.firstChar.toUpperCase()]){
            //       obj[item.firstChar.toUpperCase()] = [];//如果没有就给个空数组
            //   }
            //   obj[item.firstChar.toUpperCase()].push(item)
            // });
            // this.cityGroy = obj

     api.getCityList().then(res=>{
         // eslint-disable-next-line no-console
        //  console.log(res)
         let obj = {};
            // eslint-disable-next-line no-unused-vars
            res.data.data.forEach((item,index)=>{ //分组处理
              if(!obj[item.firstChar.toUpperCase()]){
                  obj[item.firstChar.toUpperCase()] = [];//如果没有就给个空数组
              }
              obj[item.firstChar.toUpperCase()].push(item)
            });
            this.cityGroy = obj
     })
        },
    methods:{
        changecitys(item){
          this.$store.dispatch('setPositionS',item);
         this.$router.push({name:'index'})

            
        }

    }
}
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>