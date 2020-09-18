<template>
  <div class="changeCity">
    <span class="name">
      省份选择:
      <selectList
        :proviceList="provinceList"
        titles="省份"
        :value="proviceText"
        :showWrapperActive="proviceActive"
        @change_active="changeProviceActive"
        @change="changeProvice"
         styles="Provice"
      />
      <selectList
        :proviceList="cityList"
        titles="城市"
        :value="cityText"
        :showWrapperActive="cityActive"
        @change_active="changeCityActive"
        @change = "changeCity"
        styles="citys"
      />
    </span>
    <span class="names">直接搜索:</span>
    <el-select
    v-model="searchWorld"
    filterable
    remote
    reserve-keyword
    placeholder="请输入城市中文或拼音"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in searchList"
      :key="item"
      :label="item.label"
      :value="item"> 
    </el-option>
  </el-select>
  </div>
</template>
<script>
import selectList from "./select.vue";
import api from '@/API/api.js'
export default {
  components: {
    selectList
  },
  data() {
    return {
      searchWorld:'',
      loading:false,
      provinceList: [],
      searchList:[],
      proviceText: "省份",
      cityList: [],
      cityText: "城市",
      proviceActive: false,
      cityActive: false
    };
  },
  created(){
    api.getProvinceList().then(res=>{
      // eslint-disable-next-line no-console
      console.log(res)
      this.provinceList = res.data.data.map((item)=>{
        item.name =item.provinceName ;
        return item;
        })
    });
  },
  methods: {
    changeProviceActive(flag) {
      this.proviceActive = flag;
        if(flag){
            this.cityActive  = false
        }
    },
    changeCityActive(flag) {
         if(flag){
            this.proviceActive = false
        }
      this.cityActive = flag;

    },
    changeProvice(value){
          // this.proviceText = value
          this.proviceText = value.name
          this.cityList = value.cityInfoList;
    },
    changeCity(value){
          // this.cityText = value
          this.cityText = value.name;
          this.$store.dispatch('setPositionS',value)
          //更新完成跳转页面
       
       this.$router.push({name:'index'})

    },
    remoteMethod(val){
      //远程搜索
      //请求后端接口
      // eslint-disable-next-line no-console
      console.log(val)
    }
  }
};
</script>
<style lang = "scss">
@import "@/assets/css/changecity/iselect.scss";
</style>