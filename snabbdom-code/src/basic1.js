import {h,init} from 'snabbdom'
let patch = init([])
let vnode = h('div#container',[
    h('h1','hello snabbdom'),
    h('p', '这是一个标签')
])
let app = document.querySelector('#app')
let oldVnode = patch(app,vnode)
// 2秒后改变vnode
setTimeout(()=>{
    vnode = h('div#container',[
        h('h1', 'hello world'),
        h('p','hello beijing')
    ])
    patch(oldVnode, vnode)
    
}, 2000)
// 10s以后使用注释代码
setTimeout(()=>{
   patch(oldVnode,h('!')) 
}, 10000)