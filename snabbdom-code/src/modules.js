// 导入模块
import {h,init} from 'snabbdom'
import style from 'snabbdom/modules/style'
import eventlisteners from 'snabbdom/modules/eventlisteners'
let path = init([style,eventlisteners])
let vnode = h('div',{
    style:{
        backgroundColor:'red'
    },
    on:{
        click:eventHandler
    }
},[
    h('h1','helloworld'),
    h('p','这是p标签')
])
function eventHandler(){
    alert('beijingji')
}
let app = document.querySelector('#app')
path(app,vnode)