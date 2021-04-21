import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

// 创建patch函数， 他是diff算法核心
const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

// h函数的作用是创建出虚拟dom (Vnode)的
const myVnode1 = h("a", { props: { href: "http://www.atguigu.com", target: "_blank" } }, "尚硅谷");

const myVnode2 = h("div", { class: { "box": true } }, "大傻瓜");

const myVnode3 = h("ul", {}, [
    h("li", {}, "香蕉"),
    h("li", {}, "西红柿"),
    h("li", {}, [h("div", {}, [h("p", {}, "大水货"), h("p", {}, "洗洗")])]),
    h("li", {}, "苹果")
]);
// 让虚拟dom上树
const container = document.getElementById("container");
patch(container, myVnode3);