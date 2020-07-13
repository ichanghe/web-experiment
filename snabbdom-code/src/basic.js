import {h,thunk,init} from 'snabbdom'
// 返回值：patch函数，作用对比两个vnode的差异更新到真实DOM
let patch = init([])
// 第一个参数
// 第二个参数
let vnode = h('div#container.cls','helloworld')
let app = document.querySelector('#app')
// 第一个参数，可以是DOM元素，内部会把DOM元素转换成VNODE
// 第二个参数，vnode
let oldVnode = patch(app,vnode)
// 2.div中放置子元素 h1,p
vnode = h('div', 'hello vonode')
// 3s以后dom变化
setTimeout(()=>{
    patch(oldVnode,vnode)
}, 3000)