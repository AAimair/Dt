<template>
  <div class="Elizabeth">
    <p>Elizabeth</p>

  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "标签一" },
        { id: 2, name: "标签2" },
        { id: 3, name: "标签3" },
        { id: 4, name: "标签4" },
        { id: 5, name: "标签5" }
      ],
      active: "1"
    };
  },
  methods: {
    change(val, e) {
      this.active = val;
      console.log(e);
    }
  }
};
</script>

<style lang="scss" scoped>
.Elizabeth {
  el-tag {
    margin-right: 10px;
  }
  .active {
    color: red;
  }
}
</style>