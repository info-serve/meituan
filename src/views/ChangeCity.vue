<template>
    <div class="changeCity page-changeCity">
        <el-row>
           <province />
        </el-row>
        <el-row>
            <h-city :cityList="hotList" title="热门城市:"/>
        </el-row>
        <el-row>
            <h-city :cityList="hisList" title="最近访问:"/>
        </el-row>
        <el-row>
            <categroy />
        </el-row>
    </div>
</template>
<script>
import province from "../components/changeCity/province.vue"
import hCity from "../components/changeCity/hotCity.vue"
import categroy from "../components/changeCity/category.vue"
import api from '../API/api.js'
export default {
    data(){
        return{
            hotList:[],
            hisList:[]
        }
    },
    created(){
     api.getHotCityList().then(res=>{
        //  // eslint-disable-next-line no-console
        //  console.log(res)
         this.hotList = res.data.data.map(item=>item.name)
     });
     api.recentsSerachCity().then(rep=>{
         // eslint-disable-next-line no-console
        //  console.log(rep)
           this.hisList = rep.data.data.map(item=>item.name)
     })
    },
    components:{
        province,
        hCity,
        categroy
    }
}
</script>