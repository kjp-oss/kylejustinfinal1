console.log(document)

const var1 = document.getElementById("var3")

const img1 = document.getElementById("imge")
console.log(img1)

img1.addEventListener(
    "mouseover", function () {
        img1.style.transform = "scale(3)" 
        var1.innerHTML = "Mouse reached the image"
    }
)

img1.addEventListener(
    "mouseout", function () { 
        img1.style.transform = "scale(1)"
        var1.innerHTML = "Mouse leave the image"
    }
)


const txt2 = document.getElementById("name")


txt2.addEventListener (
    "focus", function () {
        txt2.style.backgroundColor = "yellow"
        var1.innerHTML = "selected nickname"
    }
)


txt2.addEventListener(
    "blur", function () {
        txt2.style.backgroundColor = "white"
        var1.innerHTML = "leaving nickname"
    }
)

sel = document.getElementById("select")

sel.addEventListener(
    "click", function(){
        var1.innerHTML = "selected year"
    }
)

var3 = document.getElementById("var1")
clik = document.getElementById("click")

clik.addEventListener(
    "click", function(){
        var3.style.color ="black"
        var3.innerHTML = "FUTURE NETWORK ANALYTS"
        var1.innerHTML = "CLICK THE CLICKBUTTON"
    }
)

Dclik = document.getElementById("dclick")

Dclik.addEventListener(
    "dblclick", function(){
        var3.style.color = "orange"
        var1.innerHTML = "CLICK THE DOUBLEBUTTON"
    }
)




txt2.addEventListener(
    "input", function (){
        var3.innerHTML = txt2.value  || "KYLE NGA PALA"
    }
)


const butn3 = document.getElementById("pclick")


butn3.addEventListener(
    "mousedown", function(){
        butn3.style.transform = "scale(0.8)"
        butn3.style.transition = ".5s"
        var1.innerHTML = "long press the button"
        butn3.style.color ="skyblue"
        butn3.style.backgroundColor ="darkblue"
        }
)


butn3.addEventListener(
    "mouseup", function(){
        butn3.style.transform = "scale(1)"
        butn3.style.transition = ".5s"
        var1.innerHTML = "leave the button"
        butn3.style.color ="black"
        butn3.style.backgroundColor ="white"
    }
)


