<template>
  <div class="outHeaderModule  m-header">
      <el-row>
         <TOPBAR />
      </el-row>
      <el-row>
        <SEARCHBAR />
      </el-row>

  </div>
</template>

<script>
import TOPBAR from '../header/topBar.vue'
import SEARCHBAR from '../header/searchBar.vue'

export default {
  components: {
    TOPBAR,
    SEARCHBAR
  }
}
</script>

<style>
</style>
