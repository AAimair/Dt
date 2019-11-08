<template>
  <div class="Diana">
    <p>Diana</p>
    <div
      v-for="item in images"
      :key="item.id"
      class="box"
      style="height:300px"
      @mouseleave="changeClass(false)"
      @mouseover="changeClass(true)"
    >
      <img :src="item.url" @click="change(item.path)" alt :style="isShow?'opacity:0.8':''" />
      <div :class="isShow?'showT':'nshowT'">
        <p>{{item.title}}</p>
        <span>{{ item.span}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {
          id: 1,
          url:
            "http://img3.imgtn.bdimg.com/it/u=3764880653,1064473808&fm=26&gp=0.jpg",
          path: "/Melliodas",
          title: "中国风是世界上最优雅的美丽",
          span:
            "中国风，即在歌曲中加入中国古代一些典故作为创作背景，用现代的音乐唱出古典的味道，唱法多样。曲风偏向传统的东方演奏，加入的是一些东方乐器，通曲音调婉转，回环，有一种传统东方的美感。"
        }
      ],
      isShow: false
    };
  },
  created() {},
  methods: {
    change(val) {
      this.$router.push(val);
    },
    changeClass(val) {
      this.isShow = val;
    }
  }
};
</script>

<style lang="scss" scoped>
.Diana {
  .box {
    position: relative;
    overflow: hidden;

    .showT {
      position: absolute;
      top: 210px;
      left: 0;
      width: 910px;
      padding-left: 10px;
      transition: 1s;

      p {
        color: orange;
        font-size: 18px;
        line-height: 24px;
      }
      span {
        color: white;
        line-height: 20px;
        text-indent: 35px !important;
      }
    }
    .nshowT {
      position: absolute;
      top: 300px;
      left: 0;
      z-index: 10px;
      width: 910px;
      padding-left: 10px;
      transition: 2s;
      p {
        color: orange;
        font-size: 18px;
        line-height: 24px;
      }
      span {
        color: white;
        line-height: 20px;
      }
    }
  }
}
</style>