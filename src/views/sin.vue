<template>
  <div class="sin"> 
    <p>sin</p>
    <div class="item" v-for="(item,index) of dataList" :key="index">
      <img :src="item.cover" alt="" style="width:100px; height:100px">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList:''
    }
  },
  created() {
    this.$http.get('http://api.pingcc.cn/?',{params:{
      mhname:"七原罪"
    }}).then((res)=>{
      console.log(res.data.list);
      this.dataList = res.data.list;
    })
  },
}
</script>

<style lang="scss" scoped>
    .sin{
      width: 100%;
      height: 100%;
      .item{
        float: left;
        margin-right: 20px;
        margin-bottom: 10px;
        font-size: 12px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        p{
          width: 50px;
        }
      }
    }
</style>

