// vnode 的目的在于将传入的五个参数返回一个成对象
export default function (sel, data, children, text, elm) {
    return {
        sel, data, children, text, elm
    }
}