
<template>
  <div class="choose-wrap" @click="handleClickList" v-document-click="documentClick">
    <!-- 封装选择下拉列表 -->
    <div class="choose">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <!-- 下拉列表 -->
      <div :class="{'mt-content':true,'active':showWrapperActive}">
        <h2>{{titles}}</h2>
        <div :class="[styles]" class="wrapper">
          <div class="col" v-for="(listData,index) in renderList" :key="index">
            <span :class="{'mt-item': true, 'active': item.name == value}"
       v-for="(item , index) in listData" :key="index" @click="changeCityValue(item)">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() { 
    return {
    //   showWrapperActive: false //1
    };
  },
  props: [ 
    //父级传过来
    "proviceList",
    "value",
    "titles",
    'showWrapperActive',
    'styles'
  ],
  computed:{
    //省份数据分列
    
    renderList(){
   
     let col= Math.ceil(this.proviceList.length /12);
     let resultList =[]
     for(var i =0 ;i< col ;i++){
       resultList.push(this.proviceList.slice(i*12,i*12 + 12))
     }
     return resultList
    }
  },
  methods: {
    handleClickList(e) {
        e.stopPropagation();
    //   this.showWrapperActive = true;
    this.$emit("change_active",true)
    },
    documentClick() {
      // eslint-disable-next-line no-console
    //   this.showWrapperActive = false;
    this.$emit('change_active',false)
    },
    changeCityValue(item){
      this.$emit('change',item)
    }
  }
};
</script>
<style lang = "scss">
@import "@/assets/css/changecity/select.scss";
</style>