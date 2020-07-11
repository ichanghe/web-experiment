// import { createApp } from 'vue';
// import App from './App.vue'

// createApp(App).mount('#app')
import {createRenderer,h} from '@vue/runtime-core'
import { defineComponent } from '@vue/runtime-core'
import { createApp } from './runtime-canvas'
import * as PIXI from 'pixi.js'
console.log(PIXI)
const renderer  = createRenderer({})
console.log(renderer)
// const App = {

// }
const App1 = defineComponent({
    render(){
        const vnode = h("circle",{x:200,y:200},'hello world')
        return vnode
    }

})
// createApp(App).mount('#app')
const app = createApp(App1)
console.log(app)
const game = new PIXI.Application({
    width: 750,
    height:750
})
document.body.appendChild(game.view)
console.log(game,'game')
createApp(App1).mount(game.stage)
console.log(game)