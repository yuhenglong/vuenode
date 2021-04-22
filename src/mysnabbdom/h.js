import vnode from "./vnode.js";
// 调用h函数时必须是一下三种方式
// 1.h("div",{},text);
// 1.h("div",{},[]);
// 1.h("div",{},h());

export default function (sel, data, c) {
    if (arguments.length != 3) throw new Error("对不起，参数太少了！");
    // 检查c的参数
    if (typeof c == "number" || typeof c == "string") {
        // 上述第一种情况
        return vnode(sel, data, undefined, c, undefined);
    } else if (Array.isArray(c)) {
        // 上述第二种情况
        // 收集children对象
        let children = [];
        for (let i = 0; i < c.length; i++) {
            // 判断c[i]是否是对象，并且含有sel属性，如果不是则抛出错误
            if (!(typeof c[i] == "object" && c[i].hasOwnProperty("sel"))) throw new Error("情况二中的子节点不是含有sel属性的对象");
            children.push(c[i]);
        }
        // 循环结束了，证明children收集完毕
        return vnode(sel, data, children, undefined, undefined)
    } else if (typeof c == "object" && c.hasOwnProperty("sel")) {
        // 上述第三种情况,证明只有一个children了
        let children = [c];
        return vnode(sel, data, children, undefined, undefined);
    } else {
        throw new Error("不是三种情况之一");
    }
}