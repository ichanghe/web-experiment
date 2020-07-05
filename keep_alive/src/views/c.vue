<template>
  <div>
    <div>c页面</div>
    <div><button @click="goAPage">进入a页面</button></div>
    <div><button @click="goBPage">进入b页面</button></div>  
  </div>

</template>
<script>
export default {
  name: "c页面",
  activated() {      
    this.onLoad(); // 这是我们获取数据的函数
  },
  methods:{
    onLoad(){
      console.log('---------查询数据---------')
    },
    goAPage(){
      this.$router.push({
        name:'A'
      })
    },
    goBPage(){
      this.$router.push({
        name:'B'
      })
    }
  }  
};
</script>
<style scoped>
div{
  padding-top:20px;
}
</style>

