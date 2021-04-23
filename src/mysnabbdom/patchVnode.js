import createElement from "./createElement.js"
export default function patchVnode(oldVnode, newVnode) {
    if (oldVnode === newVnode) return;
    // 判断新vnode有没有text属性
    if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.lenght == 0)) {
        console.log("新vnode有text属性");
        if (newVnode.text != oldVnode.text) {
            oldVnode.elm.innerText = newVnode.text;
        }
    } else {

        // 判断老的vnode有没有children
        if (oldVnode.children != undefined && oldVnode.children.length > 0) {
            // 此时老的vnode是有children的
            let un = 0;
            for (let i = 0; i < newVnode.children.length; i++) {
                let ch = newVnode.children[i];
                let isExist = false;
                // 再次遍历，看看oldVnode中有没有节点和它是相同的
                for (let j = 0; j < oldVnode.children.length; j++) {
                    if (oldVnode.children[j].sel == ch.sel && oldVnode.children[j].key == ch.key) {
                        isExist = true;
                    }
                }
                if (!isExist) {
                    console.log(ch, i);
                    let dom = createElement(ch);
                    ch.elm = dom;
                    oldVnode.elm.insertBefore(dom, oldVnode.children[un].elm);
                } else {
                    un++;
                }
            }
        } else {
            console.log("新vnode没有text属性");
            // 此时老的vnode是没有children的，新的有children;
            if (oldVnode.children != undefined && oldVnode.children.length > 0) {
                // 老的有children ,此时就是最复杂的情况，就是新老都有children;
                
            }else{
                // 清空老的节点
                oldVnode.elm.innerHTML = '';
                // 遍历新的vnode的子节点，创建dom，上树
                for (let i = 0; i < newVnode.children.length; i++) {
                    let dom = createElement(newVnode.children[i]);
                    oldVnode.elm.appendChild(dom);
                }

            }
        }
    }
}