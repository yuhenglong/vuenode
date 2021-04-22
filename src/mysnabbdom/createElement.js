// 真正的创建节点
// 目的是把虚拟节点（vnode）插入到标杆节点(pivot)之前
export default function (vnode) {
    // 创建一个DOM节点，这个节点现在还是孤儿节点
    let domNode = document.createElement(vnode.sel);
    // 判断是有子节点还是文本节点
    if (vnode.text != "" && (vnode.children == undefined || vnode.children.length == 0)) {
        // 内部是文字
        domNode.innerText = vnode.text;
        vnode.elm = domNode;
    }else if(Array.isArray(vnode.children) && vnode.children.length >0){
        // 他是内部节点，就要递归创建节点
    }
    return vnode.elm;
}