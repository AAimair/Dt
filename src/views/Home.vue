<template>
  <div class="home" :style="sTop?'paddingTop:0':'paddingTop:160px'">
    <headers @getsTop="getsTop"></headers>
    <div class="content">
      <!-- <transition 
        > -->
        <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "../components/header"
export default {
  name: 'home',
  components: {
    headers
  },
  data() {
    return {
      sTop:true
    }
  },
  created() {
  },
  methods: {
    getsTop(val){
      this.sTop = val
    }
  },
}
</script>

<style lang="scss" scoped>
    .home{
      height: 1200px;
      .content{
        padding:10px;
      }
      img{
        width: 100px;
        height: 100px;
      }
    }
</style>
