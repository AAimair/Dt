<template>
  <div :class="sTop?'headers':'fixed'">
      <div class="left">ww</div> 
      <div class="right">y</div>
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
        opacity: 0.8;
        color: #fff;
        position: relative;
        transition: .5s;
        div{
            height: 100%;
            width: 100px;
            text-align: center;
            line-height: 80px;
        }
        .left{
            position: absolute;
            left:0;
            top:0;
        }
        .right{
            position: absolute;
            right:0;
            top:0;    
        }
    }
    .fixed{
        background: white;
        height:80px;
        opacity: 0.5;
        color: black;
        position: fixed;
        top:0;
        bottom:0;
        width: 100%;
        transition: .5s;
        box-shadow:0 2px 2px #ccc;
        div{
            height: 100%;
            width: 100px;
            text-align: center;
            line-height: 80px;
        }
        .left{
            position: absolute;
            left:0;
            top:0;
        }
        .right{
            position: absolute;
            right:0;
            top:0;    
        }
    }
</style>
