import vnode from "./vnode.js";
import createElement from "./createElement.js";

export default function (oldVnode, newVnode) {
    // 判断oldVnode是DOM节点还是虚拟DOM
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // 这是真实的DOM节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
    }
    // 判断oldVnode和newVnode是否是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        console.log("是同一个节点");
    } else {
        console.log("不是同一个节点，暴力插入心得节点，删除旧的");
        let newVnodeElm = createElement(newVnode);
        // 插入老节点之前
        oldVnode.elm.parentNode.insertBefore(newVnodeElm,oldVnode.elm)
    }
}