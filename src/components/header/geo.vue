<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location" />
            <span>{{$store.state.position.name}}</span>
            <router-link class="changeCity" :to="{name:'changeCity'}">切换城市</router-link>
            [
            <!-- <a href="#">门头沟区</a>
            <a href="#">大厂回族自治县</a>
            <a href="#">廊坊</a> -->
            <a href="#" v-for="(item,index) in nearCity" :key="index">{{item.name}}</a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.user.data">
            <router-link class="login" :to="{name:'login'}"  >立即登录</router-link>
            <router-link class="register" :to="{name:'register'}" >注册</router-link>
        </div>
        <div class="m-user" v-else>
             <router-link class="login" to="/personalInfo">{{$store.state.user.data}}</router-link>
              <span @click="loginOut()">退出</span>

        </div>
    </div>
</template>
<script>
import api from '@/API/api.js'
// eslint-disable-next-line no-unused-vars
import{mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
               nearCity:[]
        }
    },
    watch:{
      '$store.state.position':function(){//监听
            this.nearCity =this.$store.state.position.nearCity

      }
    },
     created(){
         // eslint-disable-next-line no-console
        //  console.log(this.$store.state.user.data.data.data.data)
         api.getGeoAreaInfo().then(res=>{
             // eslint-disable-next-line no-console
             
            //  console.log(res)
            this.$store.dispatch('setPositionS',res.data.data);
            this.nearCity = res.data.data.nearCity

         })
     },
     computed:{
        //  ...mapState([''])
        //   ...mapActions([''])
     },
     methods:{
        loginOut(){
           // eslint-disable-next-line no-console
           console.log('退出登录')
        }
     }


}
</script>
<style>
  span{
      cursor: pointer;
  }
</style>