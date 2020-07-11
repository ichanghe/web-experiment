import {createRenderer} from '@vue/runtime-core'
import { Graphics,Text} from 'pixi.js'
const renderer  = createRenderer({
    createElement(type){
        console.log(type)
        let element
        if(type == 'circle'){
            // 画圆
             element = new Graphics()
            element.beginFill(0xdddddd,1)
            element.drawCircle(0,0,100)
            element.endFill()
        }
        return element
    },
    insert(el,parent){
        console.log(el,'el')
        parent.addChild(el)
    },
    patchProp(el,key,preValue,nextValue){
        console.log(el,key,preValue,nextValue,'000000')
        el[key] = nextValue
    },
    setElementText(node,text){
        console.log(text,'test')
        const canvasText =  new Text(text)
        node.addChild(canvasText)
    }
    
})
console.log(renderer)

export function createApp(rootComponent){
   return renderer.createApp(rootComponent)
}