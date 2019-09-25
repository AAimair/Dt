<template>
  <div :class="sTop?'headers':'fixed'">
      <div class="left">
          <img v-if="sTop" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2259502057,2983465487&fm=11&gp=0.jpg" alt="">
          <img v-else src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1741926557,806234599&fm=26&gp=0.jpg" alt="">
      </div> 
      <div class="right"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            sTop:true,
        }
    },
    methods: {

    },
    created() {
        let _this = this
        window.addEventListener("scroll", function () {
            if(document.documentElement.scrollTop>=80){
                _this.sTop = false;
            }else{
                _this.sTop = true;
            }
            _this.$emit('getsTop',_this.sTop)
        })
    },
}
</script>

<style lang="scss" scoped>
    .headers{
        background: black;
        height:80px;
        position: relative;
        transition: .5s;
        div{
            height: 100%;
            width: 80px;
            text-align: center;
            line-height: 80px;
        }
        .left{
            position: absolute;
            left:0;
            top:0;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
        .right{
            position: absolute;
            right:0;
            top:0;    
        }
    }
    .fixed{
        height:80px;
        background: rgba($color: rgb(255, 255, 255), $alpha: 0.5);
        position: fixed;
        top:0;
        bottom:0;
        width: 100%;
        transition: .5s;
        box-shadow:0 2px 2px #ccc;
        div{
            height: 100%;
            width: 80px;
            text-align: center;
            line-height: 80px;
        }
        .left{
            position: absolute;
            left:0;
            top:0;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
        }
        .right{
            position: absolute;
            right:0;
            top:0;    
        }
    }
</style>
