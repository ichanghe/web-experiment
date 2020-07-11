<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>world</div>
  </div>
</template>

<script>
import {onMounted} from 'vue'
import {createRenderer} from '@vue/runtime-core'
const userTest = ()=>{
  onMounted(()=>{
    console.log(createRenderer)
  })
}
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    userTest()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
