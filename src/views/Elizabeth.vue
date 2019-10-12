<template>
  <div class="Elizabeth">
    <p>Elizabeth</p>
    <el-tag
      v-for="(item,index) of list"
      :key="item.id"
      @click="change(index)"
      style="margin-right: 10px; cursor: pointer;"
      :effect="active==index?'dark':'plain'"
    >{{item.name}}</el-tag>
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
    change(val) {
      this.active = val;
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