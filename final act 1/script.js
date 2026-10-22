console.log(document)

const var1 = document.getElementById("output")

const button1 = document.getElementById("btn1")
console.log(button1)


button1.addEventListener(
    "click", function(){
        var1.innerHTML = "welcome to javascript"
    }
)

const Double = document.getElementById("doubleClick")
console.log(Double)

Double.addEventListener(
    "dblclick", function () {
        var1.innerHTML = "double Click"
    }
)   

const img1 = document.getElementById("image1")
console.log(img1)

img1.addEventListener(
    "mouseover", function () {
        img1.style.transform = "scale(1.1)" 
        var1.innerHTML = "Mouse reached the image"
    }
)

img1.addEventListener(
    "mouseout", function () { 
        img1.style.transform = "scale(1)"
        var1.innerHTML = "Mouse leave the image"
    }
)

const txt2 = document.getElementById("txt1")
console.log(txt2)


txt2.addEventListener (
    "focus", function () {
        txt2.style.backgroundColor = "black"
    }
)


txt2.addEventListener(
    "blur", function () {
        txt2.style.backgroundColor = "white"
    }
)

txt2.addEventListener(
    "change", function (){
        var1.innerHTML ="HELLO: " + txt2.value + " hehe "
    }
)

txt2.addEventListener(
    "input", function (){
        var1.innerHTML ="typing: " + txt2.value + " hehe "
    }
)


