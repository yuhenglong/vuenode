import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

const btn = document.getElementById("btn");
const container = document.getElementById("container");
// 创建patch函数， 他是diff算法核心
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

const vnode1 = h("ul",{},[
    h("li",{key:"a"},"a"),
    h("li",{key:"b"},"b"),
    h("li",{key:"c"},"c")
]);
const vnode2 = h("ul",{},[
    h("li",{key:"a"},"a"),
    h("li",{key:"d"},"d"),
    h("li",{key:"c"},"c"),
    h("li",{key:"b"},"b")
]);

patch(container,vnode1);

btn.onclick = function(){
    patch(vnode1,vnode2);
}