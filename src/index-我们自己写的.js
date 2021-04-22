import h from "./mysnabbdom/h.js"

const myVnode = h("div", {}, [
    h("p", {}, "大树挂"),
    h("p", {}, "大shagua"),
    h("p", {},h("span", {}, "肥猪"))
]);
console.log(myVnode);