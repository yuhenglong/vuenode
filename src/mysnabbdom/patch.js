import vnode from "./vnode.js";
import createElement from "./createElement.js";
import oldVnode from "./patchVnode.js";
import patchVnode from "./patchVnode.js";

export default function (oldVnode, newVnode) {
    // 判断oldVnode是DOM节点还是虚拟DOM
    if (oldVnode.sel == "" || oldVnode.sel == undefined) {
        // 这是真实的DOM节点
        oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode);
    }
    // 判断oldVnode和newVnode是否是同一个节点
    if (oldVnode.key == newVnode.key && oldVnode.sel == newVnode.sel) {
        console.log("是同一个节点");
        // 判断新旧节点是否是同一个对象
        patchVnode(oldVnode,newVnode);
    } else {
        console.log("不是同一个节点，暴力插入心得节点，删除旧的");
        let newVnodeElm = createElement(newVnode);
        // 插入老节点之前
        if (oldVnode.elm.parentNode != undefined && newVnodeElm) {
            oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm)
        }
        // 删掉老节点
        oldVnode.elm.parentNode.removeChild(oldVnode.elm);
    }
}