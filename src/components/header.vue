<template>
  <div :class="sTop?'headers':'fixed'">
    <div class="left">
      <img
        v-if="sTop"
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2259502057,2983465487&fm=11&gp=0.jpg"
        alt
      />
      <img
        v-else
        src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1741926557,806234599&fm=26&gp=0.jpg"
        alt
      />
    </div>
    <div class="right">
      <!-- <img class="menu" src="../assets/menu.png" alt=""> -->
      <ul v-if="menuShow">
        <router-link tag="li" to="/Melliodas">Melliodas</router-link>
        <router-link tag="li" to="/Elizabeth">Elizabeth</router-link>
        <router-link tag="li" to="/Diana">Diana</router-link>
        <router-link tag="li" to="/Sin">Sin</router-link>
      </ul>
      <i v-else class="el-icon-more" @click="showMenu" :style="menuStyle"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sTop: true,
      menuShow: true,
      menuStyle: {
        display: "inline-block",
        marginRight: "-40px",
        textAlgin: "center",
        lineHight: "80px",
        cursor: "pointer"
      }
    };
  },
  methods: {
    showMenu() {
      // this.
    }
  },
  created() {
    if (document.documentElement.clientWidth < 600) {
      this.menuShow = false;
    } else {
      this.menuShow = true;
    }
    let _this = this;
    window.addEventListener("scroll", function() {
      if (document.documentElement.scrollTop >= 80) {
        _this.sTop = false;
      } else {
        _this.sTop = true;
      }
      _this.$emit("getsTop", _this.sTop);
    });
    window.addEventListener("resize", () => {
      if (document.documentElement.clientWidth < 600) {
        this.menuShow = false;
      } else {
        this.menuShow = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.headers {
  font-size: 14px;
  background: rgba($color: rgb(38, 157, 128), $alpha: 1);
  height: 80px;
  position: relative;
  transition: 0.5s;
  color: rgb(69, 39, 39);
  width: 100%
  box-shadow: 0 2px 2px #ccc;
  ul {
    width: 300px;
    overflow: hidden;
    .router-link-exact-active {
      color: rgb(117, 27, 19);
    }
    li {
      float: left;
      padding: 10px;
      cursor: pointer;
      margin-right: 10px;
      &:nth-of-type(4) {
        margin-right: 0;
      }
    }
  }
  div {
    height: 100%;
    width: 60px;
    text-align: center;
    line-height: 80px;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    img {
      margin-top: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-left: 10px;
    }
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    .menu {
      margin-top: 10px;
      width: 30px;
      height: 30px;
    }
    .el-icon-more {
      margin-right: -200px !important;
    }
  }
}
.fixed {
  height: 80px;
  font-size: 14px;
  background: rgba($color: rgb(117, 27, 19), $alpha: 1);
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 1000;
  color: white;
  transition: 0.5s;
  box-shadow: 0 2px 2px #ccc;
  .router-link-exact-active {
    color: rgb(38, 157, 128);
  }
  li {
    float: left;
    padding: 10px;
    cursor: pointer;
    margin-right: 10px;
    &:nth-of-type(4) {
      margin-right: 0;
    }
  }
  div {
    height: 100%;
    width: 60px;
    text-align: center;
    line-height: 80px;
  }
  .left {
    position: absolute;
    left: 0;
    top: 0;
    img {
      margin-top: 10px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      margin-left: 10px;
    }
  }
  .right {
    position: absolute;
    right: 0;
    top: 0;
    width: 300px;
    .el-icon-more {
      margin-right: -200px !important;
    }
  }
}
</style>
