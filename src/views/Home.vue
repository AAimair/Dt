<template>
  <div class="home" :style="sTop?'paddingTop:0;':'paddingTop:180px;background:rgb(38, 157, 128)'">
    <transition leave-active-class="animated slideOutUp">
      <div @click="show" v-if="isShow" class="showImg"></div>
    </transition>
    <headers @getsTop="getsTop" @changeShow="changeShow"></headers>
    <div class="content">
      <!-- <transition 
      >-->
      <router-view></router-view>
      <!-- </transition> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "../components/header";

export default {
  name: "home",
  components: {
    headers
  },
  data() {
    return {
      sTop: true,
      isShow: ""
    };
  },
  watch: {
    isShow(newVal, oldVal) {
      if (newVal) {
        setTimeout(() => {
          this.isShow = false;
        }, 3000);
      }
    }
  },
  created() {
    let user = sessionStorage.getItem("user");
    if (user) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
    setTimeout(() => {
      this.isShow = false;
    }, 3000);
  },
  methods: {
    changeShow(val) {
      this.isShow = val;
    },
    getsTop(val) {
      this.sTop = val;
    },
    show() {
      this.isShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  background: rgb(107, 191, 151);
  height: 1200px;
  .showImg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573126442027&di=ae8aeee8155dd2b1f638b761eaa1ecd7&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4048783159%2C429884065%26fm%3D214%26gp%3D0.jpg");
    z-index: 10000;
  }

  .content {
    padding: 10px;
  }
  img {
    width: 100px;
    height: 100px;
  }
}
</style>
