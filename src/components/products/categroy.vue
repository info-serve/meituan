<template>
  <div class="m-product-categroy">
      <dl class="classic">
          <dt>分类</dt>
          <dt>全部</dt>
          <dd v-for="item in menuList" :key="item.type">
              <m-select :name="item.name" :list="item.sub_list" />
          </dd>
      </dl>
      <dl class="classic">
          <dt>区域</dt>
          <dt>全部</dt>
          <dd v-for="item in areaList" :key="item.type">
              <m-select :name="item.title" :list="item.sub_list" />
          </dd>
      </dl>
  </div>
</template>
<script>
import mSelect from './productSelect.vue'
export default {
  data() {
    return {
      areaList:[{
          title:'推荐商圈',
          sub_list:[{
            name:'北京王府井',
            id:'54564561'
          },{
            name:'北京王府井',
            id:'54564561'
          },{
            name:'北京王府井',
            id:'54564561'
          }]

      }
      ],
      menuList: [
        {
          type: "food",
          name: "美食",
          sub_list: [ 
            {
              name: "日本菜",
              id:'Japan'
            }
          ]
        },
        {
          name: "饮品店",
          id:'drink'
          
        },
        {
          name: "饮品店",
          id:'drink'
          
        },
        {
          name: "饮品店",
          id:'drink'
          
        }
      ]
    };
  },
  components:{
    mSelect
  }

}
</script>