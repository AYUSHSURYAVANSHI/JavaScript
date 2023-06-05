let first = document.getElementById("first");
let a = first.getAttribute("class")
console.log(a)

// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.hasAttribute("hidden","True")

// first.setAttribute("class","true sechin")
first.removeAttribute("class")
console.log(first.attributes)
console.log(first.attributes.game)
console.log(first.attributes.play)


