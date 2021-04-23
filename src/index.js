import h from "./mysnabbdom/h.js"
import patch from "./mysnabbdom/patch.js";

const Vnode1 = h("ul", {}, [
    h("li", {key:"A"}, "A"),
    h("li", {key:"B"}, "B"),
    h("li", {key:"C"}, "C"),
]);

const Vnode2 = h("ul", {}, [
    h("li", {key:"A"}, "A"),
    h("li", {key:"B"}, "B"),
    h("li", {key:"M"}, "M"),
    h("li", {key:"N"}, "N"),
    h("li", {key:"C"}, "C")
]);
const container = document.getElementById("container");
const btn = document.getElementById("btn");
patch(container, Vnode1);
btn.onclick = function () {  
    patch(Vnode1, Vnode2);
}