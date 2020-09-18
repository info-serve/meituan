<template>
    <!-- <div class="m-menu">
         <div class="title">全部分类</div>
         <dl class="nav" @mouseleave="menuLeave">
             <dt>全部分类</dt>
             如果想要设置的title、icon可以传入menuEnter(item) item
             <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                  <i :class="item.icon"></i>
                 <a href="/">{{item.title}}</a>
                 <span :class="item.hot"></span>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="food"></i>
                 <a href="/">美食</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="takeout"></i>
                 <a href="/">外卖</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="hotel"></i>
                 <a href="/">酒店</a>
                 <span class="nav-promotion">HOT</span>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="homestay"></i>
                 <a href="/">民宿</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="movie"></i>
                 <a href="/">猫眼电影</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="airport"></i>
                 <a href="/">机票 / 火车票</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="ktv"></i>
                 <a href="/">休闲娱乐 / KTV</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="life"></i>
                 <a href="/">生活服务</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="hair"></i>
                 <a href="/">丽人 / 美发 / 医学美容</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="marry"></i>
                 <a href="/">结婚 / 婚纱摄影 / 婚宴</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="offspring"></i>
                 <a href="/">亲子 / 儿童乐园 / 幼教</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class=" sport"></i>
                 <a href="/">运动健身 / 健身中心</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class=" furniture "></i>
                 <a href="/">家装 / 建材 / 家居</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="study "></i>
                 <a href="/">学习培训 / 音乐培训</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="health"></i>
                 <a href="/">医疗健康 / 宠物 / 爱车</a>
                <span class="arrow"></span>
             </dd>
             <dd>
                 <i class="bar"></i>
                 <a href="/">酒吧 / 密室逃脱</a>
                <span class="arrow"></span>
             </dd>
         </dl>  
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.children" >
        <h2 :key="index"> {{item.tilte}}
            <span >更多
            <i class="detail-right-arrow"></i>
            </span>
        </h2>
            <span v-for="(v,i) in item.children" :key="v + '_' + i">{{v}}</span>
        </template>
     </div>   
    </div> -->
        <div class="m-menu">
         <dl class="nav" @mouseleave="menuLeave">
             <dt>全部分类</dt>
             <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)">
                  <i :class="item.type"></i>
                 <a href="/">{{item.name}}</a>
                <span class="arrow"></span>
             </dd>
         </dl>  
    <div class="detail" v-if="curDetail" @mouseenter="detailEnter" @mouseleave="detailLeave">
      <template v-for="(item,index) in curDetail.items" >
        <h2 :key="index"> {{item.title}}
            <span >更多
            <i class="detail-right-arrow"></i>
            </span>
        </h2>
            <span v-for="(v,i) in item.items" :key="v + '_' + i">{{v}}</span>
        </template>
     </div>   
    </div>
</template>
<script>
import api from '@/API/api.js'
export default {
    data(){
        return{
           curDetail:null,//保存当前的数据
           timer:null,
            // menuList:[{
            //     title:'美食',
            //     icon:'food',
            //     children:[{
            //         tilte:'美食',
            //         //v 代表数组中的你每一项
            //         children:['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理','西餐','聚餐宴请']
            //     }]//二级标题
            // },{
            //      title:'外卖',
            //     icon:'takeout',
            //     children:[{
            //         tilte:'外卖',
            //         //v 代表数组中的你每一项
            //         children:['美团外卖']
            //     }]
            // },
            // {
            //      title:'酒店',
            //     icon:'hotel',
            //     hot:'nav-promotion',
            //     children:[{
            //         tilte:'酒店',
            //         //v 代表数组中的你每一项
            //         children:['经济型','舒适/三星','高档/四星','豪华/五星']
            //     }]
            // },{
            //      title:'民宿',
            //     icon:'homestay',
            //     children:[{
            //         tilte:'热门城市',
            //         //v 代表数组中的你每一项
            //         children:['上海','成都','北京','重庆','南京','杭州','广州','西安','武汉','厦门','长沙','青岛','深圳','天津','苏州']
            //     },{
            //         tilte:'热门房源',
            //         children:['复式Loft','别墅']
            //     }]
            // }]
            menuList:[],
        }
    },
    created(){
        api.getMenuList().then(res=>{
            this.menuList = res.data.data
        })
    },
    methods:{
       menuEnter(item){
         
        this.curDetail = item
        },
        menuLeave(){
            let self =this
            // console.log('ddd');
        //    this.curDetail = null
          this.timer = setTimeout(()=>{
                self.curDetail = null
            },200)

        },
        detailEnter(){
            //移进去就不让二级导航消失
          clearTimeout(this.timer)
        },
        detailLeave(){//二级移出
            this.curDetail = null
        }
    }
}
</script>
