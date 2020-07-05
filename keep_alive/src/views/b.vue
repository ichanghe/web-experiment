<template>
  <div>
    <div>b页面</div>
    <div><button @click="goAPage">进入a页面</button></div>
    <div><button @click="goCPage">进入c页面</button></div>  
  </div>

</template>
<script>
export default {
  name: "b页面",
  activated() { 
    if(!this.$route.meta.useCache){
      this.onLoad(); // 这是我们获取数据的函数
    }else{
      console.log('此时我们读缓存')
    }
  },
  beforeRouteEnter(to, from, next) {
    if (from.name === 'C') {
      //判断是从哪个路由过来的，若是detail页面不需要刷新获取新数据，直接用之前缓存的数据即可
      to.meta.useCache = true
    }
    next()
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
    goCPage(){
      this.$router.push({
        name:'C'
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

