<template>
    <div class="reMap">
         <maps />
         <recommends />
    </div>
</template>
<script>
import maps from "@/components/mapRecommend/map.vue"
import recommends from "@/components/mapRecommend/recommend.vue"
export default {
    components:{
        // eslint-disable-next-line vue/no-unused-components
        maps,
        recommends
    }
}
</script>
<style>
    .map{
        margin:0 0 10px 10px
    }
    
</style>